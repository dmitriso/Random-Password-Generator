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


// Need variables to store all password criteria uppercase, lowercase, numbers, and special characters.
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ":", ";", "'", "\"", "<", ">", ",", ".", "\/", "\\", "|", "?"];
// Prompt user to select password criteria
// Asks user to select amount of characters between 8-128
// Then ask if they want to use Uppercase letters
// Ask user if they want to use Lowercase letters
// Ask user if they want to use Numbers
// Ask user if they want to use Special characters
// Based off selections randomly generates new password
// Once new password is generated return result to user

// Randomly Generates the password here
function generatePassword() {
  // Stores results for new randomly generated password
  var newPasssword = "";
  // All user selected criteria Uppercase letters, Lowercase letters, Numbers, Special characters
  var allChoice = [];
  var passwordLength = prompt("How many characters would you like to use? (Must be between 8-128 characters)");
  // Conditions to select new password criteria.
  // Password length user selection
  if (passwordLength >=8 && passwordLength <= 128) {
    console.log(passwordLength);
    // UpperCase?
    var useUpper= confirm("Do you want uppercase letters?");
    console.log(useUpper);
    // LowerCase?
    var useLower= confirm("Do you want to use lowercase letters?");
    console.log(useLower);
    // Numbers?
    var useNumber= confirm("Do you want to use numbers?");
    console.log(useNumber);
    // SpecialCharacters?
    var useSpecial= confirm("Do you want to use special characters?");
    console.log(useSpecial);
  // Password criteria selection Uppercase letters, Lowercase letters, Numbers, Special characters

  


    return newPasssword;
  } else {
    console.log(passwordLength);
    alert ("Error! Must contain between 8-128 characters.");
    return("Try again!");


  }



  // Once newpassword is generated return result to user
  return newPasssword;
}