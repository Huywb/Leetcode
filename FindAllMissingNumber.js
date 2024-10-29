{/*
    
    
    LEETCODE : 448 Find All Numbers Disappeared in Array

    Give an array nums of n intergers where nums[i] is in the range
    [1,n] retun an array of all the intergers in the range [1,n] that 
    do not appear in nums

    Example 1 : 
        Input : [4,3,2,7,8,2,3,1]
        OutPut: [5,6]
        
    Example 2: 
        Input : [1,1]
        Output: [2]

*/}

const handleAllMissing = (nums)=>{
    const n = nums.length
    const result = []
    const newNums =new Set(nums)

    for(let i = 1; i <n;i++){
        if(!newNums.has(i)){
            result.push(i)
        }
    }

    return result
}

console.log(handleAllMissing([4, 3, 2, 7, 8, 2, 3, 1]))