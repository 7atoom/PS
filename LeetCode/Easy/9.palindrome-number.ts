/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
    let str = x.toString();
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if(str[left] !== str[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
};
// @lc code=end

