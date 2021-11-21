// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  console.log('mark');

  // Prompt user password criteria
  var passLength = window.prompt('Please enter a numerical password length');
    
  // Get password length and confirm choices
  if (passLength >= 8 && <= 128) {
    var lowerCase = confirm("Include lower case letters?");
    var upperCase = confirm("Include upper case letters?");
    var numbers = confirm("Include numbers?");
    var special = confirm("Include special characters?");
  }

  // Force criteria choice
  if (lowerCase === false && upperCase === false && numbers === false && special === false){
    window.alert("You must choose at least one")
  }

  
  // Validate input
  // Generate random pass
  return password;
}



  



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; //Display password value on screen

  // generatePassword() function

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);










// const person = {
//   name: 'jim',
//   age: 30,
//   location: 'NY',
// }

// console.log(person);

// function add(x, y){
//   return x + y;
// }

// console.log(add(25, 54));

// const nums = [11, 30, 22, 9, 14];

// console.log(nums.pop());

// const sum = nums.reduce((acc, cur) => acc + cur)

// sum