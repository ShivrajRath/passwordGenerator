const expect = require("chai").expect;
const generator = require("./index");

describe("password generator", () => {
  describe("generatePasword", () => {
    it("should generate a password between 12-32 characters", () => {
      const password = generator.generatePassword();
      expect(password).to.have.lengthOf.at.least(12);
      expect(password).to.have.lengthOf.at.most(32);
    });
  });
  describe("generateRandomAlphabet", () => {
    it("should generate a random alphabet", () => {
      const alpha = generator.getRandomAlphabet();
      expect(/[a-z]/gi.test(alpha)).to.be.true;
    });
  });
  describe("generateRandomNumber", () => {
    it("should generate a random number", () => {
      const number = generator.getRandomNumber();
      expect(/[0-9]/gi.test(number)).to.be.true;
    });
  });
  describe("getRandomSpecialChars", () => {
    it("should generate a special character", () => {
      const char = generator.getRandomSpecialChars();
      expect("!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~".includes(char)).to.be.true;
    });
  });
});
