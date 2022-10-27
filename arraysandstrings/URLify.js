/*Write a method to replace all sapceds in a string with '%20'. 
you may wnt top assume that thestring has sufficient space at 
the end to hold the additional characters, and that you are given
the "true" length of the string. If you
(if implementing in java use a character array so  that you can 
    perform this operation in place
    
*/


/*

I: string
0: string with all the spaces except the end of the word with %20
C: assume the string is long enough to hold the additional characters
E: "Mr John  Smith    " -> "Mr%20John%20Smith"
*/

function whiteSpaceToURL(str) {
    let replacement = "%20"
    let whitespace = ' ';
    str = str.trim();
    for(let i=0; i<str.length; i++) {
        if(str[i] == whitespace){
            str = str.replace(str[i],replacement)
        }
    }
    console.log(str);
    
   //return str;
}

whiteSpaceToURL("Mr John Smith    ");


var str2 = "Mr John Smith ";

function urlify(str2) {
          // Instantiate the string
 
          // Trim the given string
          str2 = str2.trim();
     
          // Replace All space (unicode is \\s) to %20
          str2 = str2.replaceAll(" ", "%20");
     
          // Display the result
          console.log(str2)
}

urlify(str2);