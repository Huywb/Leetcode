{/*

    LEETCODE : 1 TWO SUM
    Given an array of integers nums and an integer target, return indices of 
    the two numbers such that they add up to target.

    You may assume that each input would have exactly one solution, and you
    may not use the same element twice

    You can return the answer in array order

    Example: 1
        Input: nums = [2,7,11,15] , target =9
        Output: [0,1]

    Example: 2
        Input : nums = [3,2,4] , target =6
        Output : [1,2] 

*/}

const handleTwoSum = (nums,target)=>{
    const result = new Map()

    for(let i = 0 ;i < nums.length; i++){
        const value = target-nums[i]
        if(result.has(value)){
            return [result.get(value),i]
        }

        result.set(nums[i],i)
        
    }

    return []
}

console.log(handleTwoSum([2, 7, 11, 15],9))