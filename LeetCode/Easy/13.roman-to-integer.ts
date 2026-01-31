/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
type  RomanMap = {
    [key: string]: number
};

function romanToInt(s: string): number {
    const romanMap: RomanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    for(let i = 0; i < s.length; i++){
        if(romanMap[s[i + 1]] > romanMap[s[i]]){
            total += romanMap[s[i + 1]] - romanMap[s[i]];
            i++;
        } 
        else {
            total += romanMap[s[i]];
        }
    }

    return total;
};
// @lc code=end

