/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    let x = nums[0], cnt = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== x) {
            x = nums[i];
            nums[cnt] = x;
            cnt++;
        }
    }
    return cnt;
};
// @lc code=end

