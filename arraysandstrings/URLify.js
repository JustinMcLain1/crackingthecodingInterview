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


Time complexity: O(N2) where N is the length of the string. because it is using replace method inside for loop
Space complexity: O(1). 
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


/*
Time complexity: O(N) where N is the length of the string.
Space complexity: O(1). 
*/

var str2 = "Mr John Smith ";

function urlify(str2) {
 
          // Trim the given string
          str2 = str2.trim();
     
          // Replace All space (unicode is \\s) to %20
          str2 = str2.replaceAll(" ", "%20");
     
          // Display the result
          console.log(str2)
}

urlify(str2);



function romanize(num) {
    var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
        roman = '',
        i;
    for ( i in lookup ) {
      while ( num >= lookup[i] ) {
        roman += i;
        num -= lookup[i];
      }
    }
    console.log(roman);
    return roman;
  }

romanize(3);  