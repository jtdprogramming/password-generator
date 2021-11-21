// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  console.log('mark');

  // Prompt user password criteria
  var passLength = window.prompt('Please enter a numerical password length');
  password = passLength;

  
  
  // if (promptLength === "" || promptLength === null) {
  //   window.alert("Entry must be a number between 8 and 128!")
    
  //   return generatePassword();
  // }
  

  // Password length: 8 < 128
  // Password characters: lowercase, uppercase, numbers, special characters
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