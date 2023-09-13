const LOWERCASE_A_CODE = 97;
const LOWERCASE_Z_CODE = 122;

function isPalindrome(word) {
  /*
  Formats the word by converting it to an array of lowercase
  letters, and filtering out non-letters.
  */
  let processedWord = word.toLowerCase().split('').filter((char) => {
    const charCode = char.charCodeAt(0);
    return (charCode >= LOWERCASE_A_CODE && charCode <= LOWERCASE_Z_CODE);
  });
  let left = 0, right = processedWord.length - 1;
  // Median index; note: value may be a decimal
  const center = (processedWord.length - 1) / 2;
  while (center > left && center < right) {
    if (processedWord[left] !== processedWord[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

/* 
  Add your pseudocode here
  function isPalindrome(string)
    string.toLowercase()
    string.filterToLetters()

    let left = 0;
    let right = string.length - 1;
    const center = ((string + 1) / 2) - 1 = (s - 1) / 2
    while (left < center < right) {
      if (string[left] !== string[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
*/

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
