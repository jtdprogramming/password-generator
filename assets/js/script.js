// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  console.log("hello"); 

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