// import {
//   startOfDay,
//   endOfDay,
//   startOfWeek,
//   endOfWeek,
//   startOfYear,
//   endOfYear,
//   startOfMonth,
//   endOfMonth,
//   eachYearOfInterval,
//   eachMonthOfInterval,
//   addMonths
// } from 'date-fns';
// import { format } from 'date-fns-tz';
// import { pick } from 'lodash';
// import {
//   BaseRepository,
//   isPhoneNumberValid,
//   QueryResult,
//   validNigerianAccountNumber
// } from '../base';
// import {
//   Transaction,
//   TransactionPeriod,
//   TransactionsDateRange,
//   GetTransactionsOptions,
//   GetOneTransactionOptions,
//   TagTransactionOptions,
//   TransactionMonthlyReport,
//   intentTypes,
//   TransactionSummaryOptions,
//   TransactionSearchOptions,
//   ReportCategories,
//   TransactionCategories
// } from './transaction.model';
// import TransactionSchema from './transaction.schema';
// import {
//   ActionNotAllowedError,
//   TransactionSearchError
// } from '@app/server/controllers/errors/controller.errors';
// import { ignoredIntents } from './transaction.constants';
// import { subDays } from 'date-fns';

// /**
//  * Default sort order used for sorting returned transactions
//  */
// const SORT = '-created_at';
// const timeZone = 'Africa/Lagos';

// export class TransactionRepository extends BaseRepository<Transaction> {
//   private merchantProjections: string;

//   constructor() {
//     super('Transaction', TransactionSchema);
//     this.merchantProjections =
//       'id currency description recipient sender intent reference amount status adapter source destination created_at updated_at';
//   }

//   /**
//    * Sums and returns the total amount in an array of transactions
//    * @param transactions Array of transactions
//    */
//   calculateTotal(transactions: Transaction[]) {
//     return transactions.reduce(
//       (total, transaction) => total + transaction.amount,
//       0
//     );
//   }

//   getStartAndEndBalance(user: string, _transactions: Transaction[]) {
//     let end_balance = 0;
//     let start_balance = 0;

//     const transactions = _transactions.filter(
//       (it) => !ignoredIntents.includes(it.intent)
//     );

//     if (transactions.length > 0)
//       end_balance =
//         user === transactions[0]?.sender?._id
//           ? transactions[0].sender.wallet_balance
//           : transactions[0].recipient.wallet_balance;

//     if (transactions.length > 0)
//       start_balance =
//         user === transactions[transactions.length - 1]?.sender?._id
//           ? transactions[transactions.length - 1].sender.wallet_balance
//           : transactions[transactions.length - 1].recipient.wallet_balance;

//     return { start_balance, end_balance };
//   }

//   /**
//    * returns the appropriate query for a user's information
//    * @param id the user's id, account number or phone number
//    */
//   private buildQuery(id: string) {
//     let query: {
//       creditQuery:
//       | { 'recipient.phone_number': string }
//       | { 'recipient.account_number': string }
//       | { 'recipient._id': string };
//       debitQuery:
//       | { 'sender.phone_number': string }
//       | { 'sender.account_number': string }
//       | { 'sender._id': string };
//     };
//     if (isPhoneNumberValid(id)) {
//       query = {
//         creditQuery: { 'recipient.phone_number': id },
//         debitQuery: { 'sender.phone_number': id }
//       };
//       return query;
//     } else if (validNigerianAccountNumber(id)) {
//       query = {
//         creditQuery: { 'recipient.account_number': id },
//         debitQuery: { 'sender.account_number': id }
//       };
//       return query;
//     } else {
//       query = {
//         creditQuery: { 'recipient._id': id },
//         debitQuery: { 'sender._id': id }
//       };
//       return query;
//     }
//   }

//   /**
//    * Returns an object for querying for a user's transactions based on the action carried out on the user's wallet(debit, credit or both)
//    * @param id User's id
//    * @param action Type of action the transaction had on the user's wallet
//    */
//   getUserQuery(id: string, action?: 'credit' | 'debit' | 'all') {
//     const { creditQuery, debitQuery } = this.buildQuery(id);
//     switch (action) {
//       case 'credit':
//         return creditQuery;
//       case 'debit':
//         return debitQuery;
//       case 'all':
//       default:
//         return { $or: [creditQuery, debitQuery] };
//     }
//   }

//   /**
//    * Returns a MongoDB date range object for querying transactions based on creation date
//    * @param period The period in which the transactions occured
//    * @param date_range Required if period is `range`. Start and optional end date of the transactions
//    */
//   private getDateRange(
//     period: TransactionPeriod,
//     date_range?: TransactionsDateRange
//   ) {
//     const now = Date.now();

//     switch (period) {
//       case 'today':
//         return {
//           $gte: startOfDay(now),
//           $lte: endOfDay(now)
//         };
//       case 'week':
//         return {
//           $gte: startOfWeek(now),
//           $lte: endOfWeek(now)
//         };
//       case 'month':
//         return {
//           $gte: startOfMonth(now),
//           $lte: endOfMonth(now)
//         };
//       case 'year':
//         return {
//           $gte: startOfYear(now),
//           $lte: endOfYear(now)
//         };
//       case 'range':
//         const { start, end } = date_range;

//         if (!start) return null;

//         const range = {
//           $gte: startOfDay(start),
//           $lte: endOfDay(end || start)
//         };

//         return range;
//       case 'all':
//       default:
//         return null;
//     }
//   }

//   /**
//    * Picks pagination options from an Express query object
//    * @param query Query object
//    */
//   private getPaginationOptions(query: any) {
//     return pick(query, ['per_page', 'page', 'return_total_pages']);
//   }

//   /**
//    * Picks fields for querying for transactions from an Express query object
//    * @param query Query object
//    */
//   getTransactionQuery(query: any) {
//     return pick(query, [
//       'intent',
//       'status',
//       'adapter',
//       'destination',
//       'source',
//       'quickteller_request_reference',
//       'reference'
//     ]);
//   }

//   /**
//    * Returns an object for querying for transactions based on the user's channel
//    * @param channel User's channel
//    */
//   getChannelQuery(channel: string) {
//     return {
//       $or: [{ 'sender.channel': channel }, { 'recipient.channel': channel }]
//     };
//   }

//   /**
//    * Gets a transaction by id or reference
//    * @param options Options for getting a transaction
//    */
//   getOneTransaction(options: GetOneTransactionOptions) {
//     const { id, user, isAdmin, query } = options;

//     if (!isAdmin && !user) throw new ActionNotAllowedError('Missing user id');

//     // restrict users to only get transactions they participated in
//     const userQuery = isAdmin ? {} : this.getUserQuery(user);

//     const transactionQuery = {
//       $or: [{ _id: id }, { reference: id }]
//     };

//     const channelQuery = query.channel
//       ? this.getChannelQuery(query.channel)
//       : {};

//     // remove empty queries
//     const queries = [userQuery, transactionQuery, channelQuery].filter(
//       (query) => Object.keys(query).length !== 0
//     );

//     const conditions = {
//       $and: queries
//     };

//     return this.byQuery(
//       conditions,
//       query.projections && this.merchantProjections
//     );
//   }

//   /**
//    * Gets all of a user's transactions that match a particular query
//    * @param options Options for getting the transactions
//    */
//   async getTransactions(options: GetTransactionsOptions) {
//     const { query, user, action, isAdmin, isMerchant, paginated, projections } =
//       options;

//     if (!isAdmin && !user && !isMerchant)
//       throw new ActionNotAllowedError('Missing user id');

//     // allows only an admin to get transactions for all users
//     const userQuery = isAdmin && !user ? {} : this.getUserQuery(user, action);

//     const transactionQuery = this.getTransactionQuery(query);

//     const channelQuery = query.channel
//       ? this.getChannelQuery(query.channel)
//       : {};

//     const dateRange =
//       this.getDateRange(query.period, query.date_range) ??
//       (isAdmin && this.getDateRange('range', this.dateRangeForLastNDays()));
//     const dateQuery = dateRange ? { created_at: dateRange } : {};
//     // TODO: remove this after migration is done
//     const intentQuery = {
//       intent: { $nin: ['core_tss', 'core_fee', 'core_vat', 'sms_fee'] }
//     };

//     // remove empty queries
//     const queries = [
//       !isMerchant && userQuery,
//       transactionQuery,
//       channelQuery,
//       dateQuery,
//       intentQuery
//     ].filter((query) => Object.keys(query).length !== 0);

//     let conditions: { $and?: any[] };

//     if (queries.length !== 0) {
//       conditions = { $and: queries };
//     } else {
//       conditions = {};
//     }

//     if (!paginated) return this.all({ conditions, sort: SORT, limit: 50 });

//     const paginationOptions = this.getPaginationOptions(query);

//     return this.list({
//       conditions,
//       sort: SORT,
//       return_total_pages: isAdmin, // Only return the total number of pages for admins
//       ...paginationOptions,
//       ...(projections && { projections: this.merchantProjections })
//     });
//   }

//   private dateRangeForLastNDays(nDays = 30): TransactionsDateRange {
//     const end = new Date();
//     const start = subDays(end, nDays);
//     return { start, end };
//   }

//   /**
//    * Returns all card transactions belonging to a user
//    * @param phone_number User's phone number
//    * @param limit Number of transactions to return
//    */
//   getCardTransactions(phone_number: string, limit: string) {
//     //todo update to account number
//     const conditions = {
//       $or: [
//         {
//           'sender.phone_number': phone_number
//         },
//         { 'recipient.phone_number': phone_number }
//       ],
//       adapter: 'postilion'
//     };

//     return this.all({
//       conditions,
//       sort: SORT,
//       limit: parseInt(limit, 10)
//     });
//   }

//   /**
//    * Gets a card transaction by reference
//    * @param reference Card transaction reference
//    */
//   getCardTransactionByReference(reference: string) {
//     const conditions = {
//       'postilion_service.card_request_reference': reference
//     };

//     return this.byQuery(conditions);
//   }

//   /**
//    * Tags a transaction with a category name
//    * @param options Options for tagging the transaction
//    */
//   async tagTransaction(options: TagTransactionOptions) {
//     const { id, user } = options;
//     let { category } = options;

//     // fix this so the clients won't have this problem again
//     if (category === 'investments') category = 'investment';

//     const transactionQuery = {
//       $or: [{ _id: id }, { reference: id }]
//     };

//     const userQuery = {
//       $or: [{ 'sender._id': user }, { 'recipient._id': user }]
//     };

//     const transaction = await this.byQuery({
//       $and: [transactionQuery, userQuery]
//     });

//     const update =
//       transaction.sender && transaction.sender._id === user
//         ? { 'sender.category': category }
//         : { 'recipient.category': category };

//     const taggedTransaction = await TransactionRepo.update(
//       transactionQuery,
//       update
//     );

//     return taggedTransaction;
//   }

//   async getMonthlyReports(user_id: string, month: Date) {
//     const intents = [
//       'core_tss',
//       'core_fee',
//       'core_vat',
//       'nip_reversal',
//       'card_preauth_completion'
//     ];

//     const reversalConditions = (transaction: Transaction) =>
//       'reversal' === transaction.intent ||
//       (transaction.description && transaction.description.toLowerCase()) ===
//       'card purchase reversal';

//     const start = new Date(startOfMonth(month));
//     const end = new Date(addMonths(month, 1));
//     const dateQuery = { created_at: { $gte: start, $lte: end } };

//     const transactions = await this.all({
//       conditions: { ...dateQuery, ...this.getUserQuery(user_id) }
//     });

//     const firstTransaction = await this.getWalletStartingBalanceForMonth(
//       user_id,
//       month
//     );

//     let senderTransactions = transactions
//       .filter((it) => it.sender && it.sender._id === user_id)
//       .map((it) => {
//         it?.reference?.toLowerCase();
//         return it;
//       })
//       .filter((it) => !intents.includes(it.intent));

//     let recipientTransactions = transactions
//       .filter((it) => it.recipient && it.recipient._id === user_id)
//       .map((it) => {
//         it?.reference?.toLowerCase();
//         return it;
//       })
//       .filter((it) => !intents.includes(it.intent));

//     const grouped: TransactionMonthlyReport = {
//       starting_balance: firstTransaction,
//       report: [
//         {
//           type: 'debit',
//           summary: senderTransactions.reduce(
//             (acc: ReportCategories, item: Transaction) => {
//               const { category } = reversalConditions(item)
//                 ? item.recipient
//                 : item.sender;

//               // add missing categories
//               const currentCategories = acc.map((it) => it.category);
//               if (!currentCategories.includes(category)) {
//                 acc.push({ amount: 0, category: category });
//               }
//               if (!currentCategories.includes('all')) {
//                 acc.push({ amount: 0, category: 'all' });
//               }

//               // update current category
//               const currentCategory = acc.find(
//                 (it) => it.category === category
//               );
//               currentCategory.amount +=
//                 item.amount * (reversalConditions(item) ? -1 : 1);

//               // update `all` cetegory
//               const allCategory = acc.find((it) => it.category === 'all');
//               allCategory.amount +=
//                 item.amount * (reversalConditions(item) ? -1 : 1);

//               return acc;
//             },
//             []
//           ),
//           transactions: senderTransactions.reduce(
//             (acc: TransactionCategories, item: Transaction) => {
//               const { category } = reversalConditions(item)
//                 ? item.recipient
//                 : item.sender;

//               // add missing categories
//               const currentCategories = acc.map((it) => it.category);
//               if (!currentCategories.includes(category)) {
//                 acc.push({ category, transactions: [item._id] });
//               }

//               // update category
//               const currentCategory = acc.find(
//                 (it) => it.category === category
//               );
//               if (!currentCategory.transactions.includes(item._id)) {
//                 currentCategory.transactions.push(item._id);
//               }

//               return acc;
//             },
//             []
//           )
//         },
//         {
//           type: 'credit',
//           summary: recipientTransactions.reduce((acc, item) => {
//             const { category } = item.recipient;

//             // add missing categories
//             const currentCategories = acc.map((it) => it.category);
//             if (!currentCategories.includes(category)) {
//               acc.push({ amount: 0, category: category });
//             }
//             if (!currentCategories.includes('all')) {
//               acc.push({ amount: 0, category: 'all' });
//             }

//             // update current category
//             const currentCategory = acc.find((it) => it.category === category);
//             currentCategory.amount += item.amount;

//             // update `all` cetegory
//             const allCategory = acc.find((it) => it.category === 'all');
//             allCategory.amount += item.amount;

//             return acc;
//           }, []),
//           transactions: recipientTransactions.reduce(
//             (acc: TransactionCategories, item: Transaction) => {
//               const { category } = item.recipient;

//               // add missing categories
//               const currentCategories = acc.map((it) => it.category);
//               if (!currentCategories.includes(category)) {
//                 acc.push({ category, transactions: [item._id] });
//               }

//               // update cetegory
//               const currentCategory = acc.find(
//                 (it) => it.category === category
//               );
//               if (!currentCategory.transactions.includes(item._id)) {
//                 currentCategory.transactions.push(item._id);
//               }

//               return acc;
//             },
//             []
//           )
//         }
//       ]
//     };

//     return grouped;
//   }

//   async getUserFirstTranaction(user_id: string) {
//     const trxns = await this.model
//       .find(this.getUserQuery(user_id))
//       .sort({ created_at: 1 })
//       .limit(1);

//     return trxns.length > 0 ? trxns[0] : null;
//   }

//   /**
//    * compound tenary that returns 0 if there are no transactions.
//    * If there are transactions then it returns the wallet balance for this user
//    */
//   async getWalletStartingBalanceForMonth(user_id: string, month: Date) {
//     const startMonth = startOfDay(startOfMonth(month));
//     const trxns = await this.model
//       .find({ ...this.getUserQuery(user_id), created_at: { $lte: startMonth } })
//       .sort({ created_at: -1 })
//       .limit(1);

//     return trxns.length > 0
//       ? trxns[0].sender && trxns[0].sender._id === user_id
//         ? trxns[0].sender.wallet_balance
//         : trxns[0].recipient.wallet_balance
//       : 0;
//   }

//   async getUserLastTranaction(user_id: string) {
//     const trxns = await this.model
//       .find(this.getUserQuery(user_id))
//       .sort({ created_at: -1 })
//       .limit(1);

//     return trxns.length > 0 ? trxns[0] : null;
//   }

//   async getYearlyReports(user_id: string) {
//     const transactions = await Promise.all([
//       this.getUserFirstTranaction(user_id),
//       this.getUserLastTranaction(user_id)
//     ]);

//     const years = eachYearOfInterval({
//       start: transactions[0]?.created_at || new Date(),
//       end: transactions[1]?.created_at || new Date()
//     }).map((it) => format(it, 'yyyy', { timeZone }));

//     const summary = [];

//     for (const year of years) {
//       const months = eachMonthOfInterval({
//         start: new Date(`${year}-01-01`),
//         end: new Date(`${year}-12-31`)
//       }).map((it) => format(it, 'yyyy-MM', { timeZone }));

//       const thisYearsSummary = [];

//       for (const month of months) {
//         const thisMonthsSummary = await this.getMonthlyReports(
//           user_id,
//           new Date(month)
//         );

//         if (
//           thisMonthsSummary.report.find((it) => it.type === 'credit')
//             .transactions.length > 0 ||
//           thisMonthsSummary.report.find((it) => it.type === 'credit')
//             .transactions.length > 0
//         ) {
//           thisYearsSummary.push({
//             month: format(new Date(month), 'MMMM'),
//             summary: thisMonthsSummary
//           });
//         }
//       }
//       summary.push({ year, summary: thisYearsSummary });
//     }

//     return summary;
//   }

//   /**
//    * Get the transaction summary between two people/parties.
//    * People could be a biller e.g. MTN, Uber
//    * @param user_id
//    * @param user_account
//    * @param intent
//    * @param options
//    */
//   async getOneToOneTransactionSummary(
//     user_id: string,
//     intent: string,
//     options: TransactionSummaryOptions
//   ) {
//     //check what kind of intent we need to pass
//     var secondPartyQuery: any;
//     if (intent === 'bills' && Number(options.page) < 2) {
//       let transactions: QueryResult<Transaction>,
//         total_sent_result: Transaction[],
//         total_received_result: Transaction[];
//       secondPartyQuery = { 'bill.biller_name': options.biller_name };
//       const query = {
//         $match: { 'sender._id': user_id, intent, ...secondPartyQuery }
//       };
//       const total_sent_query = {
//         'sender._id': user_id,
//         intent,
//         ...secondPartyQuery
//       };
//       const total_received_query = {
//         'recipient._id': user_id,
//         intent,
//         ...secondPartyQuery
//       };
//       const paginationOptions = this.getPaginationOptions(options);
//       await Promise.all([
//         (transactions = await this.aggregate({
//           conditions: query,
//           ...paginationOptions
//         })),
//         (total_sent_result = await this.all({
//           conditions: total_sent_query
//         })),
//         (total_received_result = await this.all({
//           conditions: total_received_query
//         }))
//       ]);
//       const total_sent =
//         total_sent_result.length > 0
//           ? this.calculateTotal(total_sent_result)
//           : 0;
//       const total_received =
//         total_received_result.length > 0
//           ? this.calculateTotal(total_received_result)
//           : 0;
//       const total_sent_count = total_sent_result.length || 0;
//       const total_received_count = total_received_result.length || 0;
//       const { total_transaction_amount, average_spend } =
//         this.calculateTotalandAverageSpend(
//           total_sent,
//           total_received,
//           transactions
//         );
//       const total_transactions = transactions.total_transactions;
//       return {
//         data: transactions,
//         total_transaction_amount,
//         average_spend,
//         total_sent,
//         total_received,
//         total_sent_count,
//         total_received_count,
//         total_transactions
//       };
//     } else if (intent === 'bills' && Number(options.page) >= 2) {
//       secondPartyQuery = { 'bill.biller_name': options.biller_name };
//       const query = {
//         $match: { 'sender._id': user_id, intent, ...secondPartyQuery }
//       };
//       const paginationOptions = this.getPaginationOptions(options);
//       const transactions = await this.aggregate({
//         conditions: query,
//         ...paginationOptions
//       });
//       return {
//         data: transactions
//       };
//     }

//     if (
//       ['card_preauth', 'card_preauth_completion', 'card_purchase'].includes(
//         intent
//       ) &&
//       Number(options.page) < 2
//     ) {
//       let transactions: QueryResult<Transaction>,
//         total_sent_result: Transaction[],
//         total_received_result: Transaction[];
//       secondPartyQuery = { 'postilion_service.merchant': options.biller_name };
//       const query = {
//         $match: { 'sender._id': user_id, intent, ...secondPartyQuery }
//       };
//       const total_sent_query = {
//         'sender._id': user_id,
//         intent,
//         ...secondPartyQuery
//       };
//       const total_received_query = {
//         'recipient._id': user_id,
//         intent,
//         ...secondPartyQuery
//       };
//       const paginationOptions = this.getPaginationOptions(options);
//       await Promise.all([
//         (transactions = await this.aggregate({
//           conditions: query,
//           ...paginationOptions
//         })),
//         // TODO: We pulling a lot of data here. It may not be many for a single request,
//         // but consider many concurrent users viewing their transaction summaries.This may cause an OOM.
//         // We can move these calculations to the database instead.
//         (total_sent_result = await this.all({
//           conditions: total_sent_query
//         })),
//         (total_received_result = await this.all({
//           conditions: total_received_query
//         }))
//       ]);
//       const total_sent =
//         total_sent_result.length > 0
//           ? this.calculateTotal(total_sent_result)
//           : 0;
//       const total_received =
//         total_received_result.length > 0
//           ? this.calculateTotal(total_received_result)
//           : 0;
//       const total_sent_count = total_sent_result.length || 0;
//       const total_received_count = total_received_result.length || 0;
//       const { total_transaction_amount, average_spend } =
//         this.calculateTotalandAverageSpend(
//           total_sent,
//           total_received,
//           transactions
//         );
//       const total_transactions = transactions.total_transactions;
//       return {
//         data: transactions,
//         total_transaction_amount,
//         average_spend,
//         total_sent,
//         total_received,
//         total_sent_count,
//         total_received_count,
//         total_transactions
//       };
//     } else if (
//       ['card_preauth', 'card_preauth_completion', 'card_purchase'].includes(
//         intent
//       ) &&
//       Number(options.page) >= 2
//     ) {
//       secondPartyQuery = { 'postilion_service.merchant': options.biller_name };
//       const query = {
//         $match: { 'sender._id': user_id, intent, ...secondPartyQuery }
//       };
//       const paginationOptions = this.getPaginationOptions(options);
//       const transactions = await this.aggregate({
//         conditions: query,
//         ...paginationOptions
//       });
//       return {
//         data: transactions
//       };
//     }

//     if (
//       (intent === 'savings' && Number(options.page) < 2) ||
//       (intent === 'savings_withdrawal' && Number(options.page) < 2)
//     ) {
//       let transactions: QueryResult<Transaction>,
//         total_sent_result: Transaction[],
//         total_received_result: Transaction[];
//       secondPartyQuery = { 'sub_wallet._id': options.subwallet };
//       const query = {
//         $match: {
//           intent,
//           ...secondPartyQuery
//         }
//       };
//       const total_sent_query = {
//         'sender._id': user_id,
//         intent,
//         ...secondPartyQuery
//       };
//       const total_received_query = {
//         'recipient._id': user_id,
//         intent,
//         ...secondPartyQuery
//       };
//       const paginationOptions = this.getPaginationOptions(options);
//       await Promise.all([
//         (transactions = await this.aggregate({
//           conditions: query,
//           ...paginationOptions
//         })),
//         (total_sent_result = await this.all({
//           conditions: total_sent_query
//         })),
//         (total_received_result = await this.all({
//           conditions: total_received_query
//         }))
//       ]);
//       const total_sent =
//         total_sent_result.length > 0
//           ? this.calculateTotal(total_sent_result)
//           : 0;
//       const total_received =
//         total_received_result.length > 0
//           ? this.calculateTotal(total_received_result)
//           : 0;
//       const total_sent_count = total_sent_result.length || 0;
//       const total_received_count = total_received_result.length || 0;
//       const { total_transaction_amount, average_spend } =
//         this.calculateTotalandAverageSpend(
//           total_sent,
//           total_received,
//           transactions
//         );
//       const total_transactions = transactions.total_transactions;
//       return {
//         data: transactions,
//         total_transaction_amount,
//         average_spend,
//         total_sent,
//         total_received,
//         total_sent_count,
//         total_received_count,
//         total_transactions
//       };
//     } else if (
//       (intent === 'savings' && Number(options.page) >= 2) ||
//       (intent === 'savings_withdrawal' && Number(options.page) >= 2)
//     ) {
//       const query = {
//         $match: {
//           'sub_wallet._id': options.subwallet,
//           intent
//         }
//       };
//       const paginationOptions = this.getPaginationOptions(options);
//       const transactions = await this.aggregate({
//         conditions: query,
//         ...paginationOptions
//       });
//       return {
//         data: transactions
//       };
//     }

//     if (intentTypes.includes(intent) && Number(options.page) < 2) {
//       /**
//        * Change of query type from $or to $in as $in matches the query types faster than the $or
//        * operator which takes a longer time and costs more on atlas
//        *
//        */
//       let transactions: QueryResult<Transaction>,
//         total_sent_result: Transaction[],
//         total_received_result: Transaction[];
//       const userQuery = {
//         $or: [
//           { 'recipient.account_number': options.user_account_number },
//           { 'sender.account_number': options.user_account_number }
//         ]
//       };
//       const secondPartyQuery = {
//         $or: [
//           { 'recipient.account_number': options.secondary_account_number },
//           { 'sender.account_number': options.secondary_account_number }
//         ]
//       };

//       const query = {
//         $match: {
//           $and: [userQuery, { intent }, secondPartyQuery]
//         }
//       };
//       const total_sent_query = {
//         'sender._id': user_id,
//         intent,
//         'recipient.account_number': options.secondary_account_number
//       };
//       const total_received_query = {
//         'recipient._id': user_id,
//         intent,
//         'sender.account_number': options.secondary_account_number
//       };
//       const paginationOptions = this.getPaginationOptions(options);
//       await Promise.all([
//         (transactions = await this.aggregate({
//           conditions: query,
//           ...paginationOptions
//         })),
//         (total_sent_result = await this.all({
//           conditions: total_sent_query
//         })),
//         (total_received_result = await this.all({
//           conditions: total_received_query
//         }))
//       ]);
//       const total_sent =
//         total_sent_result.length > 0
//           ? this.calculateTotal(total_sent_result)
//           : 0;
//       const total_received =
//         total_received_result.length > 0
//           ? this.calculateTotal(total_received_result)
//           : 0;
//       const total_sent_count = total_sent_result.length || 0;
//       const total_received_count = total_received_result.length || 0;
//       const { total_transaction_amount, average_spend } =
//         this.calculateTotalandAverageSpend(
//           total_sent,
//           total_received,
//           transactions
//         );
//       const total_transactions = transactions.total_transactions;

//       return {
//         data: transactions,
//         total_transaction_amount,
//         average_spend,
//         total_sent,
//         total_received,
//         total_sent_count,
//         total_received_count,
//         total_transactions
//       };
//     } else if (intentTypes.includes(intent) && Number(options.page) >= 2) {
//       const userQuery = {
//         $or: [
//           { 'recipient.account_number': options.user_account_number },
//           { 'sender.account_number': options.user_account_number }
//         ]
//       };
//       const secondPartyQuery = {
//         $or: [
//           { 'recipient.account_number': options.secondary_account_number },
//           { 'sender.account_number': options.secondary_account_number }
//         ]
//       };

//       const query = {
//         $match: {
//           $and: [userQuery, { intent }, secondPartyQuery]
//         }
//       };
//       const paginationOptions = this.getPaginationOptions(options);
//       const transactions = await this.aggregate({
//         conditions: query,
//         ...paginationOptions
//       });
//       return {
//         data: transactions
//       };
//     }
//   }
//   /**
//    *
//    * @param references list of references that we can use to get the transactions
//    */
//   async getTransactionsbyreferences(
//     references: string[]
//   ): Promise<Transaction[]> {
//     const conditions = {
//       $or: [{ _id: { $in: references } }, { reference: { $in: references } }]
//     };

//     return this.all({ conditions });
//   }

//   async searchTransactions(user_id: string, options: TransactionSearchOptions) {
//     const paginationOptions = this.getPaginationOptions(options);
//     const userQuery = {
//       $or: [{ 'recipient._id': user_id }, { 'sender._id': user_id }]
//     };
//     let recipientOptionsQuery: any = {},
//       categoryOptionsQuery: any = {},
//       dateRangeQuery: any = {},
//       amountRangeQuery: any = {};

//     if (Object.keys(options).length === 0) {
//       throw new TransactionSearchError();
//     }

//     //SELECT FROM TRANSACTIONS WHERE USERID (recipientID or senderID) AND (recipient.accountnumber)

//     if (options.recipient) {
//       recipientOptionsQuery = {
//         $or: [
//           { 'recipient.account_number': options.recipient },
//           { 'sender.account_number': options.recipient }
//         ]
//       };
//       delete options.recipient;
//     }

//     if (options.category) {
//       categoryOptionsQuery = {
//         $or: [
//           { 'sender.category': options.category },
//           { 'recipient.category': options.category }
//         ]
//       };

//       delete options.category;
//     }

//     if (options.date_range_from && options.date_range_to) {
//       const dateFrom = new Date(options.date_range_from);
//       const dateTo = new Date(options.date_range_to);
//       dateRangeQuery = {
//         created_at: { $lte: dateTo, $gte: dateFrom }
//       };
//       delete options.date_range_from;
//       delete options.date_range_to;
//     }

//     if (options.range_higher_amount && options.range_lower_amount) {
//       amountRangeQuery = {
//         amount: {
//           $gte: Number(options.range_lower_amount),
//           $lte: Number(options.range_higher_amount)
//         }
//       };
//       delete options.range_higher_amount;
//       delete options.range_lower_amount;
//     }

//     //Here we need to clean the keys if not they will tamper with the query
//     Object.keys(options).forEach((key) => {
//       if (typeof options[key] === 'undefined' || typeof options[key] === null) {
//         delete options[key];
//       }
//     });
//     const conditions = {
//       $match: {
//         $and: [
//           userQuery,
//           recipientOptionsQuery,
//           categoryOptionsQuery,
//           dateRangeQuery,
//           amountRangeQuery
//         ],
//         ...options
//       }
//     };

//     return this.aggregate({ conditions, ...paginationOptions });
//   }
//   /**
//    * search transactions by alias account number
//    * @param user_id
//    * @param account_number
//    */
//   async searchByAliasAccount(
//     user_id: string,
//     query: any,
//     account_number: string
//   ) {
//     const dateRange = this.getDateRange(query.period, query.date_range);
//     const dateQuery = dateRange ? { created_at: dateRange } : {};
//     const transactionQuery = {
//       $or: [
//         { 'recipient.alias_account_number': account_number },
//         { 'recipient.account_number': account_number }
//       ],
//       'recipient._id': user_id
//     };
//     // remove empty queries
//     const queries = [dateQuery, transactionQuery].filter(
//       (query) => Object.keys(query).length !== 0
//     );

//     const paginationOptions = this.getPaginationOptions(query);

//     let conditions: {
//       $and?: (
//         | { created_at: { $gte: Date; $lte: Date } }
//         | { created_at?: undefined }
//         | {
//           $or: (
//             | {
//               'recipient.alias_account_number': string;
//               'recipient.account_number'?: undefined;
//             }
//             | {
//               'recipient.account_number': string;
//               'recipient.alias_account_number'?: undefined;
//             }
//           )[];
//           'recipient._id': string;
//         }
//       )[];
//     };

//     if (queries.length !== 0) {
//       conditions = { $and: queries };
//     } else {
//       conditions = {};
//     }

//     return this.list({
//       conditions,
//       sort: SORT,
//       ...paginationOptions,
//       projections: this.merchantProjections
//     });
//   }
// }

// export const TransactionRepo = new TransactionRepository();
 