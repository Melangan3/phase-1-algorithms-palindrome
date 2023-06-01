//create a function that receives one argument, a string, and returns true if string is palindrome and false if not. 

function isPalindrome(word) {
  const len = word.length;
  for (let i=0; i<len/2; i++){
    if (word[i] !== word[len-1-i]){
      return false
    } else {
      return true}
  }

}



/* 
  //find the length of a string
  //loop through half of the string 
  //check if the first and last string are the same
*/

/*
 You find the length of the string using the length property. The for loop iterates up to have of the inputted string, while the if condition is used to check if the first and the last characters are the same. 
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
