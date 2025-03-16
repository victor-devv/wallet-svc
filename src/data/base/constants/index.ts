export const TOKEN_CACHE_TTL = 300;

export const PHONE_CODES = {
  '234': {
    country: 'nigeria',
    iso_code: 'NG',
    prefix: '234',
    local_number_length: 10
  },
  '44': {
    country: 'united kingdom',
    iso_code: 'GB',
    prefix: '44',
    local_number_length: 10
  },
  '1': {
    country: 'united states of america & canada',
    iso_code: 'US',
    prefix: '1',
    local_number_length: 10
  }
};

/**
 * checks if the passed argument is a possible Nigerian BVN
 * @param bvn the user's account number
 */
export const isBVN = (bvn: string) => /^\d{11}$/.test(bvn);

/**
 * Checks if a given phone number is valid.
 * The check basically validates the length & format of the phone number
 * @param phoneNumber The phone number to be validated.
 */
export const isPhoneNumberValid = (phoneNumber: string): boolean => {
  return (
    /^234[7-9][0-1][0-9]{8}/i.test(phoneNumber) ||
    /0[7-9][0-1][0-9]{8}/i.test(phoneNumber)
  );
};

/**
 * checks if the passed argument is a valid Nigerian account number
 * @param accountNumber the user's account number
 */
export const validNigerianAccountNumber = (accountNumber: string) =>
  /^\d{10}$/.test(accountNumber);
