// references to the # elements
var amount = document.querySelector("#amount");
var lowercase = document.querySelector("#lowercase");
var uppercase = document.querySelector("#uppercase");
var number = document.querySelector("#number");
var special = document.querySelector("#special");
var generateBtn = document.querySelector("#generate");

var amountNumber = +amount.value;

function libraryCreator() {

  var library = '';

  var lowerBoolean = lowercase.checked;
  var upperBoolean = uppercase.checked;
  var numBoolean = number.checked;
  var specialBoolean = special.checked;

  var digitList = '0123456789';
  var lowerList = 'abcdefghijklmnopqrstuvwxyz';
  var upperList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var specialList = '!@#$%&*?';

  if (numBoolean) library = library + digitList;
  if (lowerBoolean) library = library + lowerList;
  if (upperBoolean) library = library + upperList;
  if (specialBoolean) library = library + specialList;

  return library;
};

function randomNumberGenerator(maxNum) {
  var randomNum = Math.floor(Math.random()*maxNum)
  return randomNum
}

function passwordCreator() {
  // init library
  //
}

// Write password to the #password input
function writePassword() {

  console.log(randomNumberGenerator())

  // var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
}






// event listener to generate button
generateBtn.addEventListener("click", writePassword);
