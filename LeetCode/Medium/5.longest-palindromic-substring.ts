/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
function longestPalindrome(s: string): string {
    const db : boolean[][] = Array.from({ length: s.length }, () => Array(s.length).fill(true));
    let start = 0;
    let maxLength = 1;


    for (let length = 2; length <= s.length; length++) {
        for (let i = 0; i <= s.length - length; i++) {
            const j = i + length - 1;

            if (s[i] === s[j]) {
                if (length === 2) {
                    db[i][j] = true;
                } else {
                    db[i][j] = db[i + 1][j - 1];
                }
            } else {
                db[i][j] = false;
            }

            if (db[i][j] && length > maxLength) {
                start = i;
                maxLength = length;
            }
        }
    }

    return s.substring(start, start + maxLength);
};
// @lc code=end

