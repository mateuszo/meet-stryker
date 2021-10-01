export function isAllowedToBuyBeer(age, bac, country) {
  console.log("calculating", { age, bac, country });
  return isAdult(age, country) && bac < 0.5;
}

export function isAdult(age, country) {
  switch (country) {
    case "PL":
      return age >= 18;
    case "USA":
      return age >= 21;
    case "DE":
      return age >= 16;
  }
}
