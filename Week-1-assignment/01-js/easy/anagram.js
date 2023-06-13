/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  // Remove any non-alphanumeric characters and convert to lowercase
  const cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Check if the lengths are different
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  // Create character frequency maps for both strings
  const charMap1 = {};
  const charMap2 = {};

  // Populate the character frequency maps
  for (let char of cleanStr1) {
    charMap1[char] = charMap1[char] + 1 || 1;
  }

  for (let char of cleanStr2) {
    charMap2[char] = charMap2[char] + 1 || 1;
  }

  // Compare the character frequency maps
  for (let char in charMap1) {
    if (charMap1[char] !== charMap2[char]) {
      return false;
    }
  }

  return true;
}

const string1 = "rail safety";
const string2 = "fairy tales";

console.log(isAnagram(string1, string2)); // Output: true

// module.exports = isAnagram;
