// Assignment code here
var amount = document.querySelector("#amount")
var lowercase = document.querySelector("#lowercase");
var uppercase = document.querySelector("#uppercase");
var number = document.querySelector("#number");
var special = document.querySelector("#special");




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

console.log("button pressed")
console.log(amount.value)
console.log(lowercase.checked)

  // var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
