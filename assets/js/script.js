// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  
  // Prompt user password criteria
  var passLength = window.prompt('Please enter a numerical password length');
    
  // Get password length and confirm criteria choices
  if (passLength >= 8 && passLength <= 128) {
    var lowerCase = confirm("Include lower case letters?");
    var upperCase = confirm("Include upper case letters?");
    var numbers = confirm("Include numbers?");
    var special = confirm("Include special characters?");
  }
  else {
    window.alert("Please choose a number between 8 and 128");
    return generatePassword();
  }

  // Force criteria choice ** update to return to "choice function" instead of asking for length
  if (lowerCase === false && upperCase === false && numbers === false && special === false){
    window.alert("You must choose at least one, try again!");
    return generatePassword();
  }

  //conditionals to determine criteria
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
    special = ["!@#$%^&*()"]
  } else if (special === false) {
    special = [""]
  }
/*
completed: choice and criteria
to do: generate password based on determined length using for loop and return password
*/
  // Concatenate chosen criteria into one string
  var passString = lowerCase + upperCase + numbers + special;
  console.log(passString); // test for concatenation

  password = passString; //test 

  // Generate random pass
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
