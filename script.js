// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Need variables to store all password criteria uppercase, lowercase, numbers, and special characters
// Prompt user to select password criteria
// Asks user to select amount of characters between 8-128
// Then ask if they want to use Uppercase letters
// Ask user if they want to use Lowercase letters
// Ask user if they want to use Numbers
// Ask user if they want to use Special characters
// Based off selections randomly generates new password
// Once newpassword is generated return result to user


