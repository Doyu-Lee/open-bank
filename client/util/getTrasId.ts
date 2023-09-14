const generateRandom9DigitNumber = () => {
  const min = 100000000;
  const max = 999999999;
  const random9DigitNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return random9DigitNumber.toString();
};

export const genTrasId = () => {
  return 'M202300440U' + generateRandom9DigitNumber();
};
