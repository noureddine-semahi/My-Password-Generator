// Assignment Code
document.querySelector("#generate").addEventListener("click", writePassword);
var generatePasswordBtnEl = document.querySelector("#generate");
var confirmPasswordLength = 0;
var confirmNumber = "false";
var confirmUpper = "false";
var confirmLowerCase = "false";
var confirmSymbols = "false";
var newPassword = [];


//My Arrays
var symbols = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//My variables
var confirmPasswordLength = "";
var confirmSymbol;
var confirmNumber;
var confirmUpperCase;
var confirmLowerCase;

//Greetings alert
alert("hello! welcome to Password Generator!");
alert("Please press the buttom to begin");

generatePasswordBtnEl.addEventListener("click", function () {
    event.preventDefault();
    getUserInput();
    generateChoicesArray();
    generateNewPassword();
    choicesArray = [];

});

//Setting password Length criteria prompt
function getUserInput() {
    confirmPasswordLength = prompt("Select the Password length between 8-128 characters: "); {
    }
    while(confirmPasswordLength <= 7 || confirmPasswordLength >= 129) {
        alert("Password length must be between 8-128 characters Try again");
        var confirmPasswordLength = (prompt("How many characters would you like your password to contain?"));
        } 
  
       alert(`Your password will have ${confirmPasswordLength} characters`);
    var confirmSymbol = confirm("Would you like to include Symbols in your password?");
    var confirmNumber = confirm("Would you like to include Numbers in your password?");
    var confirmUpperCase = confirm("Would you like to include Uppercase letters in your password?");    
    var confirmLowerCase = confirm("Would you like to include lowercase letters in your password?");

    while(confirmUpperCase === false && confirmLowerCase === false && confirmSymbol === false && confirmNumber === false) {
        alert("You must choose at least one parameter");
        var confirmSymbol = confirm("Click OK to confirm if you would like to include special characters");
        var confirmNumber = confirm("Click OK to confirm if you would like to include numeric characters");    
        var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase letters");
        var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase letters");   
    }
};

var choicesArray = [];

function generateChoicesArray() {
    if (confirmUpperCase == true)
        choicesArray = choicesArray.concat(upperCase);
    if (confirmLowerCase == true)
        choicesArray = choicesArray.concat(lowerCase);
    if (confirmNumber == true)
        choicesArray = choicesArray.concat(numbers);
    if (confirmSymbol == true)
        choicesArray = choicesArray.concat(symbols);
};

function generateNewPassword() {
    if (choicesArray.length < numbers.length || getLength < 8) {
        alert("You did not meet the minimum standard ")
    } else {

        for (var i = 0; i < confirmPasswordLength; i++) {
            newPassword = newPassword + choicesArray[Math.floor(Math.random() * choicesArray.length)];
            console.log(newPassword)
        }
        writePassword.textContent = newPassword;
});