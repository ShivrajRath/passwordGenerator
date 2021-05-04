export const getRandom = (max, min = 0) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

export const getRandomAlphabet = () => {
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  return alphabets[getRandom(alphabets.length)];
};

export const getRandomNumber = () => {
  return getRandom(9);
};

export const getRandomSpecialChars = () => {
  const specialChars = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  return specialChars[getRandom(specialChars.length)];
};

export const getRandomPasswordChar = () => {
  const randomGenerators = [
    getRandomSpecialChars,
    getRandomNumber,
    getRandomAlphabet,
  ];
  return randomGenerators[getRandom(randomGenerators.length)]();
};

/**
 * Generates a random password
 */
const generatePassword = () => {
  let totalLength = getRandom(32, 12);
  let password = "";
  while (totalLength--) {
    password += getRandomPasswordChar();
  }
  document.getElementById("password").innerText = password;
};

export default generatePassword;
