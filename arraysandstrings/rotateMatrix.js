/* given an image represented by an n x n matrix, returnswhere each
pixxel in the image is represented b y an integer, write a method to 
rotate the image by 90 degrees. can you do this in place?

*/


// rotating a specific layer would just mean swapping the
//values in 4 arrays. if you were asked to swap the values 
//in two arrays, could you do this? can you extend it to 
//four arrays?

//think about it layer by layer can you rotate a specific layer?



/*
I: matrix of N x N 
O: rotated matrix by 90 degrees clockwise
C: rotate matrix in place, optimize
E: empty matrix, even and odd values for n 
*/

//time complexity: O(n*2)

//i is rows
//j is columns
//t is ment to hold on to values while we rotate them
//use first spot as storage so swap 1st and 4th in matrix
// then swap first and 16th 
//then swap first and 12th
//and this continues inwards



/* 
A      B
1 2 3  4
5 6 7  8
91011 12
13141516 
D      C
B => m[row][col]

t = B
B = A
A = t

t = C
C = A
A = t

t = D
D = A
A = t
*/

let rotateMatrix = (m) => {
    //length of the array matrix
    let n = m.length;

    //row 
    // we only need to look at the first half of the rows cause were doing all the sides
    for (let i = 0; i < Math.floor(n / 2); i++) {
      //column
      // first iteration of i is 1 , 2 , 3  i = 0  -> 0 - 0 - 1 
      //second is 2,3  i = 1 
      // third is 3 i = 2
      // so by doing 2 * i you get something like 4 - (2  *  0 ) - 1 = 3
      for (let j = 0; j < n - (2 * i) - 1; j++) {
        
        //-------B
        //this is i + j we are looking at 7 and 11 instead of starting at 3
        //so increment in a row with i 

        //for the column we to start at n-1 but for the next interations
        //n-1 would give us 8 but we want 7 so we look at one less hence n-1-i 
        //this gives us B 
        //[i + j] is = 4 or index 3 
        //[n-1-i] is 4(length) - 1(3) so index 3 - i which is 2 so its m[3][1] so 3rd indexed row and 1st index in column which is = 4 
        let t = m[i + j][n - 1 - i]; // setting B = to temp ex. temp is now 4 


        m[i + j][n - 1 - i] = m[i][i + j]; // setting B = to A ex. B is now 1

        // ------ A
        //this is A we use i + j for column because we start 1 row in
        //so to reference the correct spot in the next column we use i + j
        m[i][i + j] = t; //setting A = to t   ex. so now A is 4  
        
        //---- C
        // rows = 16 15 14, then 11 and 10 for next iteration
        // take last row and subtract an additonal row per iteration of i -> n - 1 - i
        //we add the -i for th ecolumn because if it was just n-1-j it would be 12 and not 11 -> (n-1)(-i to get 11)(-j to get column)
        t = m[n - 1 - i][n - 1 - i - j]; // setting the temp = to C ex. temp is now 16

        m[n - 1 - i][n - 1 - i - j] = m[i][i + j]; // setting C equal to A ex. so C is now 4
        m[i][i + j] = t; // setting A to temp -> A is now 16


        //---- D
        // we are looking at 13 9 and 5 to get to 13 we decrease by each iteration of i
        //and decreasing by 1 for each iteration of j so it goes from 3 - i = 3 
        // i just returns 0 because i hasnt interated more than once yet so 0th column and then 
        t = m[n - 1 - i - j][i]; // setting temp to D 
        m[n - 1 - i - j][i] = m[i][i + j]; // setting D to 16 from A
        m[i][i + j] = t; // setting A to temp so now A is 13
      }
    }
    return m;
  };
  
  //compares arrays of arrays
  //arrays in javascript are objects and cant be compared
  //by using the == operator
  let compareMatrix = (a, b) => {
    if (!Array.isArray(a) || !Array.isArray(b)) {
      return a === b;
    } else {
      let out = true;
      for (let i = 0; i < Math.max(a.length, b.length); i++) {
        if (out) {
          out = compareMatrix(a[i], b[i]);
        } else {
          return false;
        }
      }
      return out;
    }
  };
  
  console.log(
    compareMatrix(rotateMatrix([[1, 2], [3, 4]]), [[3, 1], [4, 2]]),
    compareMatrix(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [[7, 4, 1], [8, 5, 2], [9, 6, 3]]),
    compareMatrix(rotateMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]), 
                            [[13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4]]),
    compareMatrix(rotateMatrix([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), 
                            [[21, 16, 11, 6, 1], [22, 17, 12, 7, 2], [23, 18, 13, 8, 3], [24, 19, 14, 9, 4], [25, 20, 15, 10, 5]]),
    compareMatrix(rotateMatrix([]), []),
    compareMatrix(rotateMatrix([[]]), [[]]),
    compareMatrix(rotateMatrix([[1]]), [[1]])
  );