'use strict';

import { isAllowedToBuyBeer } from "./logic.js";

const form = document.querySelector('form');
const output = document.querySelector('#output');
form.onsubmit = (event) => {
  event.preventDefault();
  const age = event.target.age.value;
  const bac = event.target.bac.value;
  const country = event.target.country.value;

  if (isAllowedToBuyBeer(age, bac, country)) {
    output.style.color = "green";
    output.innerHTML = "Please have a beer 🍻"
  } else {
    output.style.color = "red";
    output.innerHTML = "No beer today 👮‍♀️"
  }
}

