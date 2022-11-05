/* write an algorithm such that if an element of M x N matrix is 0
its entire row and column are set to 0


I: matrix of M x N
O: a zero matrix where the column and row with zero sets everything else to zero
C: there is no zero so just return the matrix
E: 0 2 
   0 0

*/

const _matrix = [[4,1,3],[2,-4,0],[5,9,2]];


const zeroingMat = (matrix, n)=> {
    //O(n^2)
    for(let r=0; r < n; r++){
        for(let c=0; c < n; c++){
            if(matrix[r][c]===0) {
                matrix[r][c] = true;
            }
        }
    }
    //find locations we made true and zero them
    //O(n^3)
    for(let r=0; r < n; r++){
        for(let c=0; c < n; c++){
            if(matrix[r][c]===true) {
                //zero the rows
                for(let i=0; i < n; i++){
                    //change the number of the row and setting the column to zero
                    matrix[r][i] = 0
                }
                //zero the column
                for(let i=0; i < n; i++){
                    //change the number of the column and setting the row to zero
                    matrix[i][c] = 0
                }
            }
        }
    }
    return matrix;
}

console.log(zeroingMat(_matrix,3));

// const mat = [[2,4,3],[2,-4,0],[1,3,2]];

// //O(n^2)
// const zeroMatrix = (mat,n) => {

    
//     let firstZeroRow;
//     let firstZeroColumn;

//     for(let i = 0; i < n.length; i++) {
//         for(let j = 0; j < n[0].length; j++) {
//             if(mat[i][j] === 0) {
//                 if(i===0) firstZeroRow = true;
//                 if(j===0) firstZeroColumn = true;
//                 mat[i][0] = 0;
//                 mat[0][j] = 0;
//             }

//         }

//     }
//     for(let i = 1; i < n.length; i++){
//         for(let j=1; j < n.length; j++) {
//             if(mat[i][0] === 0 || mat[0][j] === 0) {
//                 mat[i][j] = 0;
//             }
//         }
//     }
//     if(firstZeroRow) {
//         mat[0].fill(0);
//     }
//     if(firstZeroColumn) {
//         for(let i = 0; i < n.length; i++) {
//             mat[i][0]=0;
//         }
//     }

// };
// return console.log(zeroMatrix(mat,3));
