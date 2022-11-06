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

const mat = [[2,4,3],[2,-4,0],[1,3,2]];

var setZeros = function(matrix) { 
    let firstZeroRow; 
    let firstColZero;

    for(let row = 0; row < matrix.length; row++) {
        for(let column=0; column < matrix[0].length; column++){
            if(matrix[row][column]===0){
                if(row===0) firstZeroRow =true;
                if(column===0) firstColZero =true;
                matrix[row][0] = 0;
                matrix[0][column] = 0;
            }
        }
    }
    for(let row=1;row< matrix.length;row++){
        for(let column=1;column<matrix[0].length;column++){
            if(matrix[row][0]===0 || matrix[0][column]===0){
                matrix[row][column]=0;
            }
        }
    }
    if(firstZeroRow){
        matrix[0].fill(0);
    }
    if(firstColZero){
        for(let i =0; i < matrix.length; i++){
            matrix[i][0]=0;
        }
    }
};

//space O(1) because were changing in place
//time O(M*n) its this because of how we do the iteration two layouts of row and column

console.log(setZeros(mat))

//track through and trace where the location of 0 is in the arrays
//store it in the result matrix 
//do another iteration setting those values next to it and above it = 0


//helper function
//keeps rows and columns fixed sets i values to 0
const setZerosHelper = (row, col, matrix) => {
    for(let i =0; i < matrix.length; i++){
        matrix[i][col] = 0;
    }
    for(let i =0; i < matrix[0].length; i++) {
        matrix[row][i] = 0;
    }
}

let setZerosTwo = function(matrix) {
    const zerosA = [];

    for(let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[0].length; col++){
            if(matrix[row][col] === 0) zerosA.push([row,col]) 
        }
    }
    //iterate over 0th address
    for(let address of zerosA) {
        let row = address[0];
        let col = address[1];
        setZerosHelper(row,col,matrix);
    }
};

console.log(setZerosTwo(3, 3,  _matrix));