import { random, times } from 'lodash';

//typically prevent business names, since this app is for borrowers (personal)
export const FlaggedWordsForNames = [
  'limited',
  'ltd',
  'limit',
  'limite',
  'pay',
  'loan',
  'credit'
];

export const RegexBuilderForFlaggedWords = () => {
  return new RegExp(`^((?!${FlaggedWordsForNames.join('|')}).)*$`, 'i');
};

/**
 * Generates random digits of a specified length
 * @param length The amount of random digits to generate and return
 */
export const randomDigits = (length: number) => {
  return times(length, () => random(0, 9).toString()).join('');
};

export const randomPassword = (): string => {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChars = "@$!%*?&";
  const allChars = lowercase + uppercase + numbers + specialChars;

  // Helper function to get a random character from a string
  const getRandomChar = (chars: string): string => {
    return chars.charAt(Math.floor(Math.random() * chars.length));
  };

  // Helper function to shuffle a string
  const shuffleString = (str: string): string => {
    const array = str.split('');
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array.join('');
  };

  // Ensure at least one character from each character set
  let password = [
    getRandomChar(lowercase),
    getRandomChar(uppercase),
    getRandomChar(numbers),
    getRandomChar(specialChars),
  ];

  // Add random characters to reach the desired length (between 8 and 32)
  const remainingLength = Math.floor(Math.random() * (32 - 8 + 1)) + 8;
  password = [
    ...password,
    ...Array.from({ length: remainingLength - 4 }, () => getRandomChar(allChars)),
  ];

  // Shuffle the password to avoid predictable patterns
  return shuffleString(password.join(""));
};
