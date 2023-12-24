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
const numberTargetBorder = document.getElementById("card-number-border");
const ExpDateTargetBorder = document.getElementById("card-exp-date");
const DateTargetBorder = document.getElementById("card-date");
const CvcTargetBorder = document.getElementById("cvc-border");

const nameCardContainer = document.getElementById("name-card");
const numbersCardContainer = document.getElementById("numbers-card");
const expCardContainer = document.getElementById("exp-card");
const dateCardContainer = document.getElementById("date-card");
const cvcCardContainer = document.getElementById("cvc-card");

// *Errors
const errorParagraph = document.createElement('p');

const errorStyle = (border, father, textError) => {
  border.classList.add("input-error");
  errorParagraph.classList.add("error-paragraph");
  errorParagraph.style.display = "block";
  errorParagraph.textContent = textError;
  father.appendChild(errorParagraph);
}

// *Interactivity with targets
let errorNumber = null;
nameTargetFrontInput.addEventListener('input', (event) => {
  const valueInputName = event.target.value;
  const valueWithoutLetters = valueInputName.replace(/\d/g, '');

  if (valueInputName !== valueWithoutLetters) {
    return errorNumber = true;
  } else {
    nameTargetFront.textContent = nameTargetFrontInput.value;
    return errorNumber = false;
  }
})

cardNumberFrontInput.addEventListener("input", () => {
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

    cardNumberFront.textContent = formattedNumbersTarget;
  } else {
    cardNumberFront.textContent = "XXXX XXXX XXXX XXXX";
  }
})

expDateInput.addEventListener("input", () => {
  return expDate.textContent = expDateInput.value;
})

monthAndYearInput.addEventListener("input", () => {
  return monthAndYear.textContent = monthAndYearInput.value;
})


cvcInput.addEventListener("input", () => {
  return cvc.textContent = cvcInput.value;
})

// *Error inputs
formMain.addEventListener("submit", (event) => {
  event.preventDefault()

  errorParagraph.remove();

  if (nameTargetFrontInput.value === "") {
    return errorStyle(nameTargetFrontInput, nameCardContainer, "Field Empty");
  } else if (errorNumber === true) {
    errorStyle(nameTargetFrontInput, nameCardContainer, "The numbers are not valid here");
  } else if (cardNumberFrontInput.value === "") {
    return errorStyle(cardNumberFrontInput, numbersCardContainer, "Field Empty");
  } else if (cardNumberFrontInput.value.length > 16 || cardNumberFrontInput.value.length < 16) {
    return errorStyle(cardNumberFrontInput, numbersCardContainer, "the numbers are 16");
  } else if (expDateInput.value === "") {
    return errorStyle(expDateInput, expCardContainer, "Field Empty");
  } else if (expDateInput.value.length !== 2) {
    return errorStyle(expDateInput, expCardContainer, "2 numbers");
  } else if (monthAndYearInput.value === "") {
    return errorStyle(monthAndYearInput, dateCardContainer, "Field Empty");
  } else if (monthAndYearInput.value.length !== 2) {
    return errorStyle(monthAndYearInput, dateCardContainer, "2 numbers");
  } else if (cvcInput.value === "") {
    return errorStyle(cvcInput, cvcCardContainer, "Field Empty");
  } else if (cvcInput.value.length !== 3) {
    return errorStyle(cvcInput, cvcCardContainer, "3 numbers")
  }
})

// *linear-gradient and replace borders
function handleFocusAndBlur(inputElement, borderElement) {
  inputElement.addEventListener("focus", () => {
    borderElement.classList.add("cardholder-name-border");
    inputElement.classList.remove("input-error");
  });

  inputElement.addEventListener("blur", () => {
    inputElement.classList.remove("input-error");
    borderElement.classList.remove("cardholder-name-border");
  });
}


handleFocusAndBlur(nameTargetFrontInput, nameTargetBorder);
handleFocusAndBlur(cardNumberFrontInput, numberTargetBorder);
handleFocusAndBlur(expDateInput, ExpDateTargetBorder);
handleFocusAndBlur(monthAndYearInput, DateTargetBorder);
handleFocusAndBlur(cvcInput, CvcTargetBorder);