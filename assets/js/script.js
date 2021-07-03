// Assignment Code
var generateBtn = document.querySelector("#generate");

// Pool of possible characters to be used.
const lowers = "abcdefghijklmnopqrstuvwxyz";
const uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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

  // Set empty variable.
  let allPassword = "";

  // Prompts for lower case letters, upper case letters, numbers, &| specials to be added to generated password.
  if (confirm("Do you want to add lower case letters?    OK:Yes / CANCEL:No")) {
    allPassword = allPassword.concat(lowers);
  }

  if (confirm("Do you want to add upper case letters?    OK:Yes / CANCEL:No")) {
    allPassword = allPassword.concat(uppers);
  }

  if (confirm("Do you want to add numbers?    OK:Yes / CANCEL:No")) {
    allPassword = allPassword.concat(numbers);
  }

  if (confirm("Do you want to add specials?    OK:Yes / CANCEL:No")) {
    allPassword = allPassword.concat(specials);
  }

  // Checks if any character types were selected.
  if (allPassword === "") {
    return generatePassword();
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
