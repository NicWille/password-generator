// references to the # elements
let amount = document.querySelector("#amount");
let lowercase = document.querySelector("#lowercase");
let uppercase = document.querySelector("#uppercase");
let number = document.querySelector("#number");
let special = document.querySelector("#special");
let generateBtn = document.querySelector("#generate");

function libraryCreator() {

  let library = '';

  let lowerBoolean = lowercase.checked;
  let upperBoolean = uppercase.checked;
  let numBoolean = number.checked;
  let specialBoolean = special.checked;

  let digitList = '0123456789';
  let lowerList = 'abcdefghijklmnopqrstuvwxyz';
  let upperList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let specialList = '!@#$%&*+=<>^&-~';

  if (numBoolean) library = library + digitList;
  if (lowerBoolean) library = library + lowerList;
  if (upperBoolean) library = library + upperList;
  if (specialBoolean) library = library + specialList;

  return library.split('');
};

function randomNumberGenerator(maxNum) {
  let randomNum = Math.floor(Math.random()*maxNum);

  return randomNum;
};

function passwordCreator() {
  let password = '';
  let amountNumber = +amount.value;
  let library = libraryCreator();

  for (let i=0; i<amountNumber; i++) {
    password = password + library[randomNumberGenerator(library.length)];
  };

  return password;
}

function passwordWriter() {
  let password = passwordCreator();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", passwordWriter);
