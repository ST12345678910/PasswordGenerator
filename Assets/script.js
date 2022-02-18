let charLength;
let verNum;
let verChar;
let verUpper;
let verLower;
let userOptions;

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
character = ["'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "!", "#", "$", "%", "&",];

holderUpper = [];

let toUpper = (x) => x.toUpperCase();

alphaUpper = alpha.map(toUpper);

let get = document.querySelector("#generate");

get.addEventListener("click", function () {
  pg = passwordGen();
  document.getElementById("password").placeholder = pg;
});

function passwordGen() {

  charLength = parseInt(prompt("Choose password length, between 8 and 128 characters"));

  if (!charLength) {
    alert("Invalid Input");
  } else if (charLength < 8 || charLength > 128) {

    charLength = parseInt(prompt("Invalid Input: length must be between 8 - 128 characters"));

  } else {

    verNum = confirm("Contain numbers?");
    verChar = confirm("Contain special characters?");
    verUpper = confirm("Contain uppercase characters?");
    verLower = confirm("Contain lowercase characters");
  };

  switch (userOptions = true) {
    case userOptions = (!verChar && !verNum && !verUpper && !verLower):
      userOptions = alert("You must choose within the range")
      break;
    case userOptions = verChar && verNum && verUpper && verLower:
      userOptions = character.concat(number, alpha, alphaUpper);
      break;
    case userOptions = verChar && verNum && verUpper: 
      userOptions = character.concat(number, alphaUpper);
      break;
    case userOptions = verChar && verNum && verLower:
      userOptions = character.concat(number, alpha);
      break;
    case userOptions = verChar && verLower && verUpper:
      userOptions = character.concat(alpha, alphaUpper);
      break;
    case userOptions = verNum && verLower && verUpper:
      userOptions = number.concat(alpha, alphaUpper);
      break;
    case userOptions = verChar && verNum:
      userOptions = character.concat(number);
      break;
    case userOptions = verChar && verLower:
      userOptions = character.concat(alpha);
      break;
    case userOptions = verChar && verUpper:
      userOptions = character.concat(alphaUpper);
      break;
    case userOptions = verLower && verNum:
      userOptions = alpha.concat(number);
      break;
    case userOptions = verLower && verUpper:
      userOptions = alpha.concat(alphaUpper);
      break;
    case userOptions = verNum && verUpper:
      userOptions = number.concat(alphaUpper);
      break;
    case userOptions = verChar:
      userOptions = character;
      break;
    case userOptions = verNum:
      userOptions = number;
      break;
    case userOptions = verLower:
      userOptions = alpha;
      break;
    case userOptions = verUpper:
      userOptions = holderUpper.concat(alphaUpper);
      break;
  };
  
  let password = [];


  for (let i = 0; i < charLength; i++) {
    let pickuserOptions = userOptions[Math.floor(Math.random() * userOptions.length)];
    password.push(pickuserOptions);
  }

  let pg = password.join("");
  userInput(pg);
  return pg;
}

function userInput(pg) {
  document.getElementById("password").textContent = pg;

}

let copy = document.querySelector("#select");
copy.addEventListener("click", function () {
  passwordSelect();
});

function passwordSelect() {
  document.getElementById("password").select();
  document.execCommand("select");
  alert("!Password Highlighted!");
}