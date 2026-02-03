/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
    let cnt = 0;
    for(let num of nums){
        if(num !== val){
            nums[cnt] = num;
            cnt++;
        }
    }
    return cnt;
    
};
// @lc code=end

