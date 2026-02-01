/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    let l = 0, r = 0, maxLen = 0;
    const set = new Set<string>(); 

    while(r < s.length){
        if(!set.has(s[r])){
            set.add(s[r]);
            r++;
            maxLen = Math.max(maxLen, set.size);
        } else {
            set.delete(s[l]);
            l++;
        }
    }
    return maxLen;
};

// @lc code-end
