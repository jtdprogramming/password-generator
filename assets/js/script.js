// James D. - Challenge 03 - Javascript Password Generator 

// Assignment Code
var generateBtn = document.querySelector("#generate");

// generate password
function generatePassword() {
  
  // Prompt user password length
  var passLength = window.prompt('Please enter a numerical password length');
    
  // Check password length and confirm criteria choices
  if (passLength >= 8 && passLength <= 128) {
    var lowercaseChar = window.confirm("Include lowercase characters?");
    var uppercaseChar = window.confirm("Include uppercase characters?");
    var numericChar = window.confirm("Include numeric characters?");
    var specialChar = window.confirm("Include special characters?");
  }
  // Invalid password length alerts user and calls function to start again
  else {
    window.alert("Please choose a number between 8 and 128");
    return generatePassword();
  }

  // Invalid choice of minimum 1 character types alerts user m
  if (lowercaseChar === false && uppercaseChar === false && numericChar === false && specialChar === false){
    window.alert("You must choose at least one, try again!");
    return generatePassword();
  }

  // Conditionals to use chosen criteria and set string to value else undefined
  if (lowercaseChar) {
    lowercaseChar = ["abcdefghijklmnopqrstuvwxyz"]
  } else if (lowercaseChar === false) {
    lowercaseChar = [""]
  }

  if (uppercaseChar) {
    uppercaseChar = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
  } else if (uppercaseChar === false) {
    uppercaseChar = [""]
  }

  if (numericChar) {
    numericChar = ["0123456789"]
  } else if (numericChar === false) {
    numericChar = [""]
  }

  if (specialChar) {
    specialChar = ["!@#$%^&*()'-+,./:;<=>?@\_`{|}~"]
  } else if (specialChar === false) {
    specialChar = [""]
  }

  // Concatenate chosen criteria into var to use to generate random password
  var passString = lowercaseChar + uppercaseChar + numericChar + specialChar;
  var password = "";

  // for loop to choose random char from passString var based on length input
  for (var i = 0; i < passLength; i++) {
    var randomPass = passString[Math.floor(Math.random() * passString.length)];
    password += randomPass;
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
