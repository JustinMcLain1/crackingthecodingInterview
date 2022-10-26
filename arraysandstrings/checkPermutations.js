//given two strings write a method to decide if one
//is a permutation of the other

/*
 * Inputs: string
 * Outputs: boolean
 * Constrains/complexities: no conditional
 * Example/edge cases: empty string
 *
 * Time complexity: it can be as high as o(n^2) or as low as O(nlogn) depending on the sorting algorithm like if we used merge sort.
 * Space complexity: o(1) just the size of strings
 */

//function that takes two strings, we put them into an array 
//and then we sort them to 
//if the strings arnt he same size we can immediately say no
// after they're sorted if the value at index i doesnt equal the value
//at the other index then we can return false

function permuation(str, str2) {
  if (str.length != str2.length) {
    return false;
  }


  let ch1 = str.split(' ');
  let ch2 = str2.split(' ');


  ch1.sort();
  ch2.sort();

  for(let i = 0; i < str.length; i++){
    if(ch1[i] != ch2[i]) {
        return false;
    }
    return true;
  }
};

/*
1. Iterate through s2 and keep expanding window until all characters in s1 occur in
the window.
2. If we encounter a point where all characters occur in the window, we check
if window's length is equal to s1.length. If so, we return true. Else, we advance `start` and reduce size of window.
3. As we reduce size of window, our window may no longer contain all characters of s1.
Then, we go back to step(1) and repeat the process. We do this until the end of array.
*/
var checkInclusion = function(s1, s2) {
    if (s1 === "" || s2 === "") {
        return false;
    }
    let m = new Map();
    // Record every character of s1 to Hash table with entry being
    // (character, number of occurrences)
    for (let i = 0; i < s1.length; i++) {
        m.set(s1[i], m.get(s1[i]) + 1 || 1);
    }
    let start = 0, windowSize = s1.length;
    // number of unique characters to collect
    let counter = m.size;
    for (let end = 0; end < s2.length; end++) {
        let char = s2[end];
        if (m.has(char)) m.set(char, m.get(char) - 1);
        if (m.get(char) === 0) counter--; // we collected all occurrences of this char
        // we collected all occurrences of every character in s1
        while (counter === 0) {
            if (end-start+1 === windowSize) return true;
            if (m.has(s2[start])) m.set(s2[start], m.get(s2[start]) + 1);
            if (m.get(s2[start]) === 1) counter++; // we should collect one more unique char
            start++;
        }
    }
    return false;
    // T.C: O(M+N), M = length of s1, N = length of s2
    // S.C: O(M)
};

console.log(checkInclusion("yahi", "hiya")); //true
console.log(checkInclusion("hello", "hello")); //true
console.log(checkInclusion("hello", "hi")); // false
console.log(checkInclusion("dog", "yup")); // false
