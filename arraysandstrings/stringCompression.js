/* implement a method to perform basic string compression using teh counts
of repeated characters. for example the string "aabcccccaaa" would become
a2b1c5a3. if the compressed string would not become smaller than the original
string, your method should return the original string. you can assume the string 
has only uppercase and lowercase letters

I: string of letters 
O: string of numbers and letters
E: a string thats less in size the new string
C: has only upercase and lowercase letters


*/


//this is a brute force method which has a run time of O(p + k^2)
//where p is the original size of the string and
// and k is the number of character sequences. 
///this is slow because the string concatenation operation is O(n^2);

function stringCompress(str) {

    let compressed = "";
    let countConsecutive = 0;

    for(let i = 0; i < str.length; i++) {
        countConsecutive++;

        if(i + 1 >= str.length || str.charAt(i) != str.charAt(i + 1)){
            compressed += "" + str.charAt(i) + countConsecutive;
            countConsecutive = 0;
        }
    }
    return compressed.length < str.length ? compressed : str;
}

console.log(stringCompress("aabcccccaaa")); // a2b1c5a3


//this method is a bit better because be initallizing 
// the length of the compresed string in advance we can determine
//if we need to return the value before doing all the work
//but also causes a second loop through characters
function compressVersionTwo(str) {
    //first check the final length and return the input if the string would be longer
    let finalLength = countCompression(str);
    if(finalLength >= str.length) {
        return str;
    }


    let compressed = "";
    compressed += finalLength;


    let countConsecutive = 0;
    for(let i = 0; i < str.length; i++) {
        countConsecutive++;

        //if the next character is different than current append this to results
        if(i + 1 >= str.length || str.charAt(i) != str.charAt(i + 1)) {
            compressed += str.charAt(i);
            compressed += countConsecutive;
            countConsecutive = 0;
        }
    }
    return compressed.toString();
}

//this determines the length of the new string ahead of time so 
// that we can save processing power if the new string would 
//be longer than the old one
function countCompression(str) {
    let compressedLength = 0;
    let countConsecutive = 0;

    for(let i = 0; i < str.length; i++) {
        countConsecutive++;

        //if next character is different than current increase the length \
        if(i + 1 >= str.length || str.charAt(i) != str.charAt(i + 1)) {
            compressedLength += 1 + String.valueOf(countConsecutive).length;
            countConsecutive = 0;
        }
    }
    return compressedLength + " ";
}

console.log(compressVersionTwo("aabcccccaaa"))












