function reverse(word) {
  // to get 'abc' to turn into 'cba' (reverse implementation)
const wordArray = word.split('')
const reversedWordArray = wordArray.reverse()
const reversedWord = reversedWordArray.join('')
return reversedWord

}

function isPalindrome(word) {

  // Write your algorithm here
  // reverse the input string 
  const reversedWord = reverse(word)

  // if the input is the same as the reversed input

  if (word === reversedWord) {
    return true
  } else {
    return false 
  }
}
  //  return true
  //  else
  //  return false 



/* 
  Add your pseudocode here
  if the word is the same in reverse it should return true
   

   

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
