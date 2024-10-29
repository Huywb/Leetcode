

{/*
    
    LEETCODE 268.Missing Number
    Give an array nums containing n distinct in the range [0,n],
    return the only number in the range that is missing from the array    
    
    Example 1 :
        Input : nums = [3,0,1] n = 3
        Output: 2
    
    Example 2 : 
        Input : nums = [0,1] n = 2 
        Output: 2
*/}

const handleMissing = (nums,n) =>{
    const numsTotal = nums.reduce((num,total)=>{
        return total+num
    },0)

    const SumToN = (n * (n + 1)) / 2

    return SumToN-numsTotal
}

console.log(handleMissing([3,0,1,4],4))