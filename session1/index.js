// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  // var to hold str after it is split into an array
  // then the array is reversed and joined back together
  // Solution by Peter Cruckshank @Github - PeterCr
  let revString = str
    .split("")
    .reverse()
    .join("");
  return revString;
}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  // I thought it would be fun to just invoke the function we just made
  // originally used a if/then statement, but it's unnecessary
  let revStr = reverseString(str);

  return str === revStr;
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  let revString = int
    .toString()
    .split("")
    .reverse()
    .join("");

  return parseInt(revString) * Math.sign(int);
}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  let words = str.toLowerCase().split(" ");
  for (var i in words) {
    words[i] = words[i].substring(0, 1).toUpperCase() + words[i].substring(1);
  }
  return words.join(" ");
}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  let charMap = {};
  let maxNum = 0;
  let maxChar = '';

  str.split('').forEach(function (char) {
    if (charMap[char]) {
      charMap[char]++;
    } 
    else {
      charMap[char] = 1;
    }
  });

  for (let char in charMap) {
    if (charMap[char] > maxNum){
      maxNum = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {

  for (let i = 1; i <= 100; i++){
    if (i % 15 == 0){
      console.log('FizzBuzz');
    }
    else if (i % 5 == 0){
      console.log('Buzz');
    }
    else if (i % 3 == 0){
      console.log('Fizz');
    }
    else {
      console.log(i);
    }
  }

}

// Call Function
// const output = maxCharacter("javascriptttt");

console.log(fizzBuzz());
