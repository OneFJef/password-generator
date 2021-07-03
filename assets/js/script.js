// Assignment Code
var generateBtn = document.querySelector("#generate");

// Pool of possible characters to be used.
const alpha = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";
const numbers = "0123456789";
const specials = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";

function generatePassword() {

  // Prompt for desired length.
  let lengthPrompt = prompt(
    "Enter the desired length of the password between 8 and 128 charaters:"
  );

  // Convert desired length from string to number.
  let passwordLength = parseInt(lengthPrompt);

  // Check if input is a number and meets length requirement.
  if (isNaN(passwordLength)) {
    return generatePassword();
  } else if (passwordLength < 8 || passwordLength > 128) {
    return generatePassword();
  }

  // Prompts for numbers &| specials to be added to generated password.
  addNumbers = confirm("Do you want to add numbers?  OK:Yes  /  CANCEL:No");
  addSpecials = confirm("Do you want to add specials?  OK:Yes  /  CANCEL:No");

  // Combining of strings from ansers on lines 27 & 28.
  if (addNumbers && addSpecials) {
    allPassword = alpha.concat(numbers, specials);
    console.log(allPassword);
  } else if (addNumbers) {
    allPassword = alpha.concat(numbers);
    console.log(allPassword);
  } else if (addSpecials) {
    allPassword = alpha.concat(specials);
    console.log(allPassword);
  } else {
    allPassword = alpha;
    console.log(allPassword);
  }

  // Set empty variable for the for loop.
  let finalPassword = "";

  // Randomly select characters out of results from 31-43.
  for (i = 0; i < passwordLength; i++) {
    finalPassword +=
      allPassword[Math.floor(Math.random() * allPassword.length)];
  }

  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
