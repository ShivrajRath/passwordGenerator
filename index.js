const getRandom = (max, min = 0) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const getRandomAlphabet = () => {
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  return alphabets[getRandom(alphabets.length)];
};

const getRandomNumber = () => {
  return getRandom(9);
};

const getRandomSpecialChars = () => {
  const specialChars = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  return specialChars[getRandom(specialChars.length)];
};

const getRandomPasswordChar = () => {
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

const copy = () => {
  navigator.clipboard.writeText(document.getElementById("password").innerText);
};
