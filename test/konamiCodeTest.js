const { expect } = require("chai");
const { konamiCode } = require("../konamiCode.js");

describe("konamiCode", function () {
  it("Should return a string", () => {
    const vicViperKonamiCode = konamiCode("Vic Viper");
    expect(typeof vicViperKonamiCode).to.equal("string");
  });

  it("Should return a string even if there is no input into the function", () => {
    const namelessKonamiCode = konamiCode();
    expect(namelessKonamiCode).to.equal(`Use this on your journey, nameless traveller! \nUp, Up, Down, Down, Left, Right, Left, Right, B, A`);
  });
});