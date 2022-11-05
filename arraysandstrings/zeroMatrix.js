/* write an algorithm such that if an element of M x N matrix is 0
its entire row and column are set to 0


I: matrix of M x N
O: a zero matrix where the column and row with zero sets everything else to zero
C: there is no zero so just return the matrix
E: 0 2 
   0 0

*/


let zeroMatrix = (mat) => {

    
    let firstZeroRow;
    let firstZeroColumn;

    for(let i = 0; i < mat.length; i++) {
        for(let j = 0; j < mat[0].length; j++) {
            if(mat[i][j] === 0) {
                if(i===0) firstZeroRow = true;
                if(j===0) firstZeroColumn = true;
                mat[i][0] = 0;
                mat[0][j] = 0;
            }

        }

    }
    for(let i = 1; i < mat.length; i++){
        for(let j=1; j < mat.length; j++) {
            if(mat[i][0] === 0 || mat[0][j] === 0) {
                mat[i][j] = 0;
            }
        }
    }
    if(firstZeroRow) {
        mat[0].fill(0);
    }
    if(firstZeroColumn) {
        for(let i = 0; i < mat.length; i++) {
            mat[i][0]=0;
        }
    }

    return console.log(zeroMatrix(mat));
};

console.log(zeroMatrix([1,2] , [3,4]));
