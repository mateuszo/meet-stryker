import { isAllowedToBuyBeer } from "../src/logic";

const poorTestData = [
  // age,  bac,  country,  expectation
  [17, 0, "PL"],
  [20, 0, "PL"],
  [20, 1, "PL"],
  [20, 1, "DE"],
  [20, 1, "USA"],
  [20, 1, "YE"],
  [20, 1, ""],
];

test("full coverage, noting is actually tested", () => {
  for (let data of poorTestData) {
    const [age, bac, country] = data;
    isAllowedToBuyBeer(age, bac, country);
  }
});

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

  // YE
  // age,  bac,  country,  expectation
  [20, 0, "YE", false], // adult, sober -> no beer

  // no country
  [20, 0, "", false], // adult, sober -> no beer
];

xdescribe("full coverage, some things are tested", () => {
  test.each(betterTestData)(
    "age: %i, bac: %d, country: %s, expectation: %s",
    (age, bac, country, expectation) => {
      expect(isAllowedToBuyBeer(age, bac, country)).toEqual(expectation);
    }
  );
});
