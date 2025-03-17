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
