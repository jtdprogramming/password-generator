// James D. - Challenge 03 - Javascript Password Generator 

// Assignment Code
var generateBtn = document.querySelector("#generate");

// TODO-extra: refactor into while loop if length is invalid
function generatePassword() {
  
  // Prompt user password length
  var passLength = window.prompt('Please enter a numerical password length');
    
  // Check password length and confirm criteria choices
  if (passLength >= 8 && passLength <= 128) {
    var lowerCase = window.confirm("Include lower case letters?");
    var upperCase = window.confirm("Include upper case letters?");
    var numbers = window.confirm("Include numbers?");
    var special = window.confirm("Include special characters?");
  }
  // Invalid password length alerts user and calls function to start again
  else {
    window.alert("Please choose a number between 8 and 128");
    return generatePassword();
  }

  // Force minimum criteria choice
  if (lowerCase === false && upperCase === false && numbers === false && special === false){
    window.alert("You must choose at least one, try again!");
    return generatePassword();
  // } else if (lowerCase || upperCase || numbers || special) {

  // }

  //TODO: refactor in a while loop to confirm choices or choose again
  //conditionals to use chosen criteria and set string to value else undefined
  if (lowerCase) {
    lowerCase = ["abcdefghijklmnopqrstuvwxyz"]
  } else if (lowerCase === false) {
    lowerCase = [""]
  }

  if (upperCase) {
    upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
  } else if (upperCase === false) {
    upperCase = [""]
  }

  if (numbers) {
    numbers = ["0123456789"]
  } else if (numbers === false) {
    numbers = [""]
  }

  if (special) {
    special = ["!@#$%^&*()'-+,./:;<=>?@\_`{|}~"]
  } else if (special === false) {
    special = [""]
  }

  // Concatenate chosen criteria into var to use to generate random password
  var passString = lowerCase + upperCase + numbers + special;
  var password = "";

  //for loop to choose random char from passString var based on length
  for (var i = 0; i < passLength; i++) {
    var randomPass = passString[Math.floor(Math.random() * passString.length)];
    password += randomPass;
    console.log(password);
  }

  // return generated password
  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; //Display password value on screen
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
