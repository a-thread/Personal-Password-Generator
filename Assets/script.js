// Assignment Code
const generateBtn = document.querySelector(".btn");

// Calling our variables and splitting them
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const lowerCaseArr = lowerCase.split("");

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const upperCaseArr = upperCase.split("");

const numbers = '0123456789';
const numbersArr = numbers.split("");

const specialChar = ' !"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
const specialCharArr = specialChar.split("");

// Establishing the length of our password via slider
function getPasswordLength() {
  const passwordLength = document.getElementById("passLength").value;
  return passwordLength;
}

// Builds password based on which character styles are checked...
function buildPassword() {
  // ...based on the length of our slider
  const length = getPasswordLength();
  const results = [];
  let superArray = [];

  if (document.getElementById("lowerCase").checked) {
    superArray = superArray.concat(lowerCaseArr);
  }
  if (document.getElementById("upperCase").checked) {
    superArray = superArray.concat(upperCaseArr);
  }
  if (document.getElementById("numbers").checked) {
    superArray = superArray.concat(numbersArr);
  }
  if (document.getElementById("specialChar").checked) {
    superArray = superArray.concat(specialCharArr);
  }
  if (superArray.length === 0) {
    return alert("Please select one character type");
  }


  // Setting loop to randomize choices and set password
  for (var i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * superArray.length);
    const digit = superArray[index];
    results.push(digit)
    console.log(results);
  }
  return results.join("")
}

// Writing password to the #password input
function writePassword() {
  const password = buildPassword();
  if (password === undefined) {
    passwordText.value = "";
  }
  const passwordText = document.querySelector("#password");

  return passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);