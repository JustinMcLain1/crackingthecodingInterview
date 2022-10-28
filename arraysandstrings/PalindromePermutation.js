/* given a string, write a function to check if it is a 
permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards
a permutations is a rearrangement of letters. The palindrome does not need to be limited to just
dicontary words. The

you can ignore casing and non-letter character.

I: a single string
O: boolean
C: lower case all and remove letter characters
E: empty string could be an edge case, also 
*/

// we need to check the size of the string for permutation
// and sort the string and then determine if the characters are equal in both

function PermutationPalindrome(str) {
  //map to add characters to map and remove as found
  const charMap = {};
  //part of the edge cases and
  const normStr = str.toLowerCase();

  //loop through new lowercase string
  for (let i = 0; i < normStr.length; i++) {
    //assign char to the index in the string
    const char = normStr[i];

    //if the character isnt a space then add it to the map or initalize to one
    //if it hasnt been added yet
    if (char !== " ") {
      charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
    }
  }

  //check if the characters are odd initalize to false
  let hasFoundOddFreq = false;

  //assign the value of the char map to the frequency
  for (let char in charMap) {
    const freq = charMap[char];

    //if checking for a remainder is not equal to 0 (not even)
    //return false because then it cant be a palindrome
    if (freq % 2 !== 0) {
      if (hasFoundOddFreq) {
        return false;
      } else {
        //if it is even then set it to true
        hasFoundOddFreq = true;
      }
    }
  }

  return true;
}

str = "Tact Cao";

console.log(PermutationPalindrome(str));
