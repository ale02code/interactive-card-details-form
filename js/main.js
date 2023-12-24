"use strict"
const nameTargetFront = document.getElementById("name-target-front");
const nameTargetFrontInput = document.getElementById("cardholder-name");

const cardNumberFront = document.getElementById("card-number-content");
const cardNumberFrontInput = document.getElementById("card-number");

const expDateInput = document.getElementById("exp-date");
const expDate = document.getElementById("exp-date-front");
const monthAndYearInput = document.getElementById("date");
const monthAndYear = document.getElementById("mm-yy");

const cvcInput = document.getElementById("cvc");
const cvc = document.getElementById("cvc-back");

const formMain = document.getElementById("main-form");
const nameTargetBorder = document.getElementById("cardholder-name-border");

nameTargetFrontInput.addEventListener('change', () => {
  if (nameTargetFrontInput.value.length <= 15)
    return nameTargetFront.textContent = nameTargetFrontInput.value;
})

cardNumberFrontInput.addEventListener("change", () => {
  const cardNumberValue = cardNumberFrontInput.value;
  const cardNumberWithoutSpaces = cardNumberValue.replace(/\s/g, '');

  let formattedNumbersTarget = '';

  if (cardNumberFrontInput.value.length <= 16) {
    for (let i = 0; i < cardNumberWithoutSpaces.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedNumbersTarget += ' ';
      }

      formattedNumbersTarget += cardNumberWithoutSpaces[i];
    }
    return cardNumberFront.textContent = formattedNumbersTarget;
  }
})

expDateInput.addEventListener("change", () => {
  return expDate.textContent = expDateInput.value;
})

monthAndYearInput.addEventListener("change", () => {
  return monthAndYear.textContent = monthAndYearInput.value;
})


cvcInput.addEventListener("change", () => {
  return cvc.textContent = cvcInput.value;
})

const errorStyle = (input) => {
  input.classList.add("input-error");
}

formMain.addEventListener("submit", (event) => {
  event.preventDefault()

  if (nameTargetFrontInput.value === "") {
    errorStyle(nameTargetFrontInput)
  } else if (cardNumberFrontInput.value === "") {
    cardNumberFrontInput.style.border = "#f11 1px solid"
  }
})

nameTargetFrontInput.addEventListener("focus", () => {
  nameTargetBorder.classList.add("cardholder-name-border");
});

nameTargetFrontInput.addEventListener("blur", () => {
  nameTargetBorder.classList.remove("cardholder-name-border")
});