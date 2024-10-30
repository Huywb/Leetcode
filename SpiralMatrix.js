{/*
    
    LEETCODE: 54 Spiral Matrix

    Given an N x M matrix return all elements of the matrix in spiral order
    
    Example 1 : 
        Input : matrix = [[1,2,3],[4,5,6],[7,8,9]]
        Output: [1,2,3,6,9,8,7,4,5]
    
    Example 2 :
        Input : matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
        Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/}


const handleSpiralMatrix = (matrix) => {
    let result = [];
    let MatrixText = matrix;
    
    while (MatrixText.length > 0) {
        result.push(...MatrixText.shift()); 

        for (let x in MatrixText) {
            result.push(MatrixText[x].pop());
        }

        if (MatrixText.length > 0) {
            result.push(...(MatrixText.pop().reverse()));
        }

        for (let i = MatrixText.length - 1; i >= 0; i--) {
            result.push(MatrixText[i].shift());
        }
    }

    return result;
};


console.log(handleSpiralMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]))