function searchInsert(nums: number[], target: number): number {
    let left = 0; 
    let right = nums.length; 

    while (left < right) {
        let midIdx = Math.floor((left + right) / 2);   
        let mid = nums[midIdx]

        if (mid < target) {
            left = midIdx + 1; 
        } else if (mid > target) {
            right = midIdx; 
        } else {
            return midIdx; 
        }
    }

    return left
};