// Function to validate major 3 credit (MasterCard, Verve, Visa)
function validateCreditCard(cardNumber) {
  // Remove any non-digit characters prompted by the user
  var cleanedCardNumber = cardNumber.replace(/\D/g, "");

  // Define regular expressions for different card types
  var visaPattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
  var mastercardPattern = /^5[1-5][0-9]{14}$/;
  var vervePattern =
    /^(506(0|1|2|3|4|5)[0-9]{10})|(6505[0-9]{12})|(6504[0-9]{12})|(6504[0-9]{12})$/;

  // Check for Visa
  if (visaPattern.test(cleanedCardNumber)) {
    return "Visa";
  }
  // Check for MasterCard
  else if (mastercardPattern.test(cleanedCardNumber)) {
    return "MasterCard";
  }
  // Check for Verve
  else if (vervePattern.test(cleanedCardNumber)) {
    return "Verve";
  }
  // If none of the patterns match, return a null
  else {
    return null;
  }
}

// Function to prompt the user for card input and display the result
function validateAndDisplayCardType() {
  var cardNumber = prompt("Please enter your credit card number:");
  var cardType = validateCreditCard(cardNumber);
  if (cardType) {
    alert("Your credit card type is: " + cardType);
  } else {
    alert("Invalid card number.");
  }
}

// Call the function to start the interaction
validateAndDisplayCardType();

// 1: Visa Pattern (/^4[0-9]{12}(?:[0-9]{3})?$/):

// ^: Asserts the start of the string.
// 4: Visa cards start with a 4.
// [0-9]{12}: Matches any 12 digits.
// (?:[0-9]{3})?: Matches an optional group of 3 digits.
// $: Asserts the end of the string.


// 2: MasterCard Pattern (/^5[1-5][0-9]{14}$/):

// ^: Asserts the start of the string.
// 5: MasterCard numbers start with 5.
// [1-5]: The second digit can be between 1 and 5.
// [0-9]{14}: Matches any 14 digits.
// $: Asserts the end of the string.


// 3: Verve Pattern (/^(506(0|1|2|3|4|5)[0-9]{10})|(6505[0-9]{12})|(6504[0-9]{12})|(6504[0-9]{12})$/):

// ^: Asserts the start of the string.
// 506(0|1|2|3|4|5): Matches 506 followed by any of the digits 0, 1, 2, 3, 4, or 5.
// [0-9]{10}: Matches any 10 digits.
// |: OR operator.
// 6505[0-9]{12}: Matches 6505 followed by any 12 digits.
// 6504[0-9]{12}: Matches 6504 followed by any 12 digits.
// $: Asserts the end of the string.
