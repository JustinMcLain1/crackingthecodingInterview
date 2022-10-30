/* there are threetypes of edits that can be performed onstrings: insert a character,
remove a character, or replace a character given two strings, write a function to check 
if they are one edit or zero edits away. 

example: pale, ple -> true
         pales, pale -> true
         pale, bale -> true
         pale, bake -> false;

I: two strings
O: Boolean
C: empty string or zero edits away 
E: see above.

*/

//have a hash map and count the amount of characters in the first string 
// the first string is the string we are comparing it to
// if the second string is 1 letter or 0 letters off then return true
// otherwise return false

function oneAway(compareStr, strInput) {

    const hash = {};
    
    for(let i = 0; i < compareStr.length; i++) {
        //hash is provided the index of compareStr and initalized to 0 and incremented by 1
        hash[compareStr[i]] = (hash[compareStr[i]] || 0) + 1;    
    }

    //used to increment through the string input
    let increment = 0;
    //length of the substring for strInput
    let requiredLength = compareStr.length;

    //while right is less then the length of strInput
    while (increment < strInput.length) {
        //if the hash has the value same as what is in the str input on the right
        //take away from the required length
        if(hash[strInput[increment]] > 0) {
            requiredLength--;
        }
        increment++; // increment by 1

        if(requiredLength <=1) {
            return true;
        } 
    }
    
    return false;
}

console.log(oneAway("pale", "bale")); //true
console.log(oneAway("pale", "bake")); // false
console.log(oneAway("pales", "pale")); // true
console.log(oneAway("pale", "pales")); // true
console.log(oneAway("pale", "bae")); // false
console.log(oneAway("pale", "bane")); // false