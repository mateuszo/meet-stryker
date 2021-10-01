import { isAllowedToBuyBeer } from "../src/logic";

const poorTestData = [
  // age,  bac,  country,  expectation
  [17, 0, "PL", false],
  [20, 0, "PL", true],
  [20, 1, "PL", false],
  [20, 1, "DE", false],
  [20, 1, "USA", false],
];

// test('full coverage, noting is actually tested', () => {
//   for(let data of poorTestData){
//     const [age, bac, country] = data;
//     isAllowedToBuyBeer(age, bac, country)
//   }
// })

const betterTestData = [
  // PL
  // age,  bac,  country,  expectation
  [17, 0, "PL", false], // young, sober -> no beer
  [18, 0, "PL", true], // adult, sober -> beer
  [18, 1, "PL", false], // adult, drunk -> no beer

  // DE
  // age,  bac,  country,  expectation
  [15, 0, "DE", false], // young, sober -> no beer
  [18, 0, "DE", true], // adult, sober -> beer
  [18, 1, "DE", false], // adult, drunk -> no beer

  // USA
  // age,  bac,  country,  expectation
  [20, 0, "USA", false], // young, sober -> no beer
  [21, 0, "USA", true], // adult, sober -> beer
  [21, 1, "USA", false], // adult, drunk -> no beer
];

describe("full coverage, some things are tested", () => {
  test.each(betterTestData)(
    "age: %i, bac: %d, country: %s, expectation: %s",
    (age, bac, country, expectation) => {
      expect(isAllowedToBuyBeer(age, bac, country)).toBe(expectation);
    }
  );
});
