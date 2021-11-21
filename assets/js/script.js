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








/*
Quokka practice with functions
*/


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