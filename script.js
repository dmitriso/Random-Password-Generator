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


// Randomly Generates the password here
function generatePassword() {
  // Variables to store all password criteria uppercase, lowercase, numbers, and special characters.
  var allUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var allLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var allNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var allSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ":", ";", "'", "\"", "<", ">", ",", ".", "\/", "\\", "|", "?"];

  // Stores results for new randomly generated password
  var newPasssword = "";

  // All user selected criteria Uppercase letters, Lowercase letters, Numbers, Special characters
  var allChoice = [];

  // Prompt user for new password length
  var passwordLength = parseInt(prompt("How many characters would you like to use? (Must be between 8-128 characters)"));

  // Conditions to select new password criteria.
  // Password length user selection condition
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log(passwordLength);

    // UpperCase?
    var useUpper = confirm("Do you want uppercase letters?");
    console.log(useUpper);

    // LowerCase?
    var useLower = confirm("Do you want to use lowercase letters?");
    console.log(useLower);

    // Numbers?
    var useNumber = confirm("Do you want to use numbers?");
    console.log(useNumber);

    // SpecialCharacters?
    var useSpecial = confirm("Do you want to use special characters?");
    console.log(useSpecial);

    // Setting password criteria conditions (Uppercase letters, Lowercase letters, Numbers, Special characters)
    if ((useUpper === true) && (useLower === true) && (useNumber === true) && (useSpecial === true)) {
      // If user selects uppercase. Characters are combined with allChoice array
      allChoice = allChoice.concat(allUpper);
      // If user selects lowercase. Characters are combined with allChoice array
      allChoice = allChoice.concat(allLower);
      // If use selects numbers. Characters are combined with allChoice array
      allChoice = allChoice.concat(allNumber);
      // If user selects special characters. Characters are combined with allChoice array
      allChoice = allChoice.concat(allSpecial);
      console.log(allChoice);
      // If user selects none of the character options then they recieve an error prompt and are returned a "Try Again!" text
    } else {
      alert("Must select atleast one character option!");
      return ("Try Again!");
    }

    // Randomly generate new password based off user selection
    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * allChoice.length);
      console.log(randomIndex);
      // Sets results of random index to the users new password
      newPasssword += allChoice[randomIndex];
    }
  } else {
    alert("Error! Must contain between 8-128 characters.");
    return ("Try again!");
  }
  // Once newpassword is generated return result to user
  return newPasssword;
}