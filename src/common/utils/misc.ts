/**
 * Removes special characters from gmail addresses
 * Gmail classifies usernames with special characters like `.` & those without it as the same.
 * Therefore, darthvader@gmail.com is the same as darth.vader@gmail.com as well as dar.th.va.der@gmail.com
 * 
 * @param email the user's email address
 * 
 * @returns a sanitised emailaddress
 */
export function sanitiseGmailAddress(email: string): string {
  const [username, domain] = email.split('@');
  const sanitisedUsername = username.replace(
    /[`~!#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
    ''
  );

  return `${sanitisedUsername}@${domain}`;
}

/**
 * Converts Kobo to Naira and converts it to human readable format e.g 300000 -> 3,000
 * @param koboAmount
 */
export const toNaira = (koboAmount: number) =>
  (koboAmount / 100).toLocaleString();

/**
 * Converts a number to a human readable amount and returns a string prefixed with the Naira symbol and the amount.
 * @param amount The amount to convert.
 */
export const humanReadableAmount = (amount: number) =>
  `\u20A6${toNaira(amount)}`;

export const formatWalletDebitName = (
  str: string,
  splitChar = ' ',
  joinChar = ' '
) => {
  const [first, ...rest] = str
    .trim()
    .replace(/([ ,])+/g, splitChar)
    .split(splitChar);

  return `${first} ${rest.join(joinChar)}`;
}
