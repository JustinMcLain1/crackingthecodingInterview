/*This is solution to problem 1.1 from Cracking the Coding Interview book.
 * Question: Implement an algorithm to determine if a string has all unique characters. 
 * What if you can not use additional data structures?
 * 
 * I: string
 * O: boolean
 * C: no additional data structures
 * E: empty string
 * 
 * time complexity
 * spac complexity
 */

let isUnqiue = (stringValue) => {
    //check each character and store in hash tables
    // if we find that character return false
    //when done return true;

// O(n*2) time complexity
    // for(let i = 0; i < stringValue.length -1; i++) {
    //     for(let j = i+1; j < stringValue.length-1; j++) {
    //         if(stringValue.charAt(i) == stringValue.charAt(j)) {
    //             return false;
    //         }
    //     }
    //     return true;
    // }

    let hash = {};

    for(let i = 0; i < stringValue.length; i++) {
        let c = stringValue[i];
        if(hash[c]) {
            //duplicates return false
            return false;
        }
        hash[c] = true;
    }
    //no duplicates return true
    return true;
};


console.log(isUnqiue('s')) //trie
console.log(isUnqiue('')) //true
console.log(isUnqiue('ss')) //false
console.log(isUnqiue('stories')) //false
console.log(isUnqiue('rainbow')) //true
console.log(isUnqiue('chirpingmermaid')) //false 