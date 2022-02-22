// variables that will be referenced, the user options that are available
let charLength;
let verNum;
let verChar;
let verUpper;
let verLower;
let userOptions;
let usedBefore;

// The arrays from which the password will be created
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
character = ["'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "!", "#", "$", "%", "&",];

// placeholder for letters that are turned uppercase
holderUpper = [];

// converts lowercase to uppercase if option is selected by user
let toUpper = (x) => x.toUpperCase();

alphaUpper = alpha.map(toUpper);

let get = document.querySelector("#generate");

// starts the process when the #generate button is clicked
get.addEventListener("click", () => {
    pg = passwordGen();
    document.getElementById("password").placeholder = pg;
  });

function passwordGen() {

  //if the user does not chose an option for length, they will be told the input is invalid, if they chose a number out of the given range they will be told it is out of range
  charLength = parseInt(prompt("Choose password length, between 8 and 128 characters"));

  if (!charLength) {
    alert("Invalid Input");
  } else if (charLength < 8 || charLength > 128) {

    charLength = parseInt(prompt("Invalid Input: length must be between 8 - 128 characters"));

  } else {
    // the options for criteria that are given to the user
    verNum = confirm("Contain numbers?");
    verChar = confirm("Contain special characters?");
    verUpper = confirm("Contain uppercase characters?");
    verLower = confirm("Contain lowercase characters");
  };

  switch (userOptions = true) {
    // prompts the user to pick atleast one option, if they have picked none
    case userOptions = (!verChar && !verNum && !verUpper && !verLower):
      userOptions = alert("You must choose atleast one criteria")
      break;
      // case for all options chosen
    case userOptions = verChar && verNum && verUpper && verLower:
      userOptions = character.concat(number, alpha, alphaUpper);
      break;
      // case for special characters, numbers, and uppercase letters
    case userOptions = verChar && verNum && verUpper: 
      userOptions = character.concat(number, alphaUpper);
      break;
      // case for special characters, numbers, lowercase letters
    case userOptions = verChar && verNum && verLower:
      userOptions = character.concat(number, alpha);
      break;
      // case for special characters, lowercase and uppercase
    case userOptions = verChar && verLower && verUpper:
      userOptions = character.concat(alpha, alphaUpper);
      break;
      // case for numbers, lowercase and uppercase
    case userOptions = verNum && verLower && verUpper:
      userOptions = number.concat(alpha, alphaUpper);
      break;
      // case for special characters and numbers
    case userOptions = verChar && verNum:
      userOptions = character.concat(number);
      break;
      // case for special characters and lowercase letters
    case userOptions = verChar && verLower:
      userOptions = character.concat(alpha);
      break;
      // case for special characters and uppercase letters
    case userOptions = verChar && verUpper:
      userOptions = character.concat(alphaUpper);
      break;
      // case for lowercase letters and numbers
    case userOptions = verLower && verNum:
      userOptions = alpha.concat(number);
      break;
      //case for lowercase and uppercase letters
    case userOptions = verLower && verUpper:
      userOptions = alpha.concat(alphaUpper);
      break;
      // case for numbers and uppercase letters
    case userOptions = verNum && verUpper:
      userOptions = number.concat(alphaUpper);
      break;
      // case for only special characters
    case userOptions = verChar:
      userOptions = character;
      break;
      // case for only numbers
    case userOptions = verNum:
      userOptions = number;
      break;
      // case for only lowercase letters
    case userOptions = verLower:
      userOptions = alpha;
      break;
      //case for only uppercase letters
    case userOptions = verUpper:
      userOptions = holderUpper.concat(alphaUpper);
      break;
  };
  
  let password = [];

// picks randomly from all available selection
  for (let i = 0; i < charLength; i++) {
    let pickuserOptions = userOptions[Math.floor(Math.random() * userOptions.length)];
    password.push(pickuserOptions);
  }

  // forms into string (.join concats everyting in the array)
  let pg = password.join("");
  userInput(pg);
  return pg;
}

// puts the password into viewable text for the user. Also console logs each password, and each password is saved to local storage. If the password is new, an x will be displayed after the question, if it has been generated before then a green check will appear.

// keys are made using the local devices time, every password that is generated is stored in local data, then compared with the most recent generation.
function userInput(pg) {
  document.getElementById("password").textContent = pg;
  console.log(pg)
  let key = Date.now();
  localStorage.setItem(key, pg)
  if (pg != localStorage.getItem.key) {
    document.getElementById("used").innerHTML = '&#x274C;';
} else {
    document.getElementById("used").innerHTML = '&#x2705;';
}
}


// lets the user press the button to copy the password
let copy = document.querySelector("#select");
copy.addEventListener("click", () => {
    passwordSelect();
  });

  // tells the user that their password has been
function passwordSelect() {
  document.getElementById("password").select();
  document.execCommand("select");
  alert("!Password Highlighted!");
}