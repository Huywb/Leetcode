{/*
    

   LEETCODE : 1365 How many number are smaller than current number
   
   Given the array nums for each nums[i] find out how many numbers in the
   array are samller than it. That it, for each nums[i] you have to count the 
   number of valid j's such that  j!= i and nums[j] < nums[i]


   Example: 1 
        Input : nums = [8,1,2,2,3]
        Output : [4,0,1,1,3]
    Example: 2
        Input : nums = [6,5,4,8]
        Output : [2,1,0,3]
*/}

const handleSmallerThanCurrent = (nums)=>{
    const result = []

    for(let i = 0 ;i<nums.length;i++){
        let count = 0
        for(let j = 0;j<nums.length;j++){
            if(nums[j]<nums[i]){
                count++
            }
        }
        result.push(count)
    }

 

    return result
}

console.log(handleSmallerThanCurrent([6,5,4,8]))