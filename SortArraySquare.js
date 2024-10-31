{/*

    LEETCODE : 977 Squares of a Sorted Array

    Given an integer array nums sorted in non-decreasing order, return an
    array of the squares of each number sorted in non-decreasing order

    Example: 1
        Input : nums = [-4,-1,0,3,10]
        Output : [0,1,9,16,100]
    
    Example: 2
        Input : nums = [-7,-3,2,3,11]
        Output : [4,9,9,49,121]
    
*/}

const handleSortArraySquare = (nums)=>{
    let n = nums.length
    let result = new Array(n)
    let right = n-1
    let left = 0
    let index = n-1
    while(left <= right){
        const squareLeft = nums[left] ** 2
        const squareRight = nums[right] ** 2

        if(squareLeft > squareRight){
            result[index] = squareLeft
            left++
        }else{
            result[index] = squareRight
            right--
        }
        index--
    }

    return result
}

console.log(handleSortArraySquare([-4,-1,0,3,10]))