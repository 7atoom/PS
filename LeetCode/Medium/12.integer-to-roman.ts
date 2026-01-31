/*
 * @lc app=leetcode id=12 lang=typescript
 *
 * [12] Integer to Roman
 */


// @lc code=start
function intToRoman(num: number): string {
    const romanMap: { [key: number]: string } = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I'
    };
    
    const keys = Object.keys(romanMap).map(Number).sort((a, b) => b - a);

    let res = '';
    let x = 0;
    for(let i = 0; i < keys.length; i++){
        x = keys[i];
        if(!romanMap[x]){
            let j = i;
            while(j > 0){
                x -= keys[i];
                if(romanMap[x]){
                    res += romanMap[keys[i]] + romanMap[x];
                    break;
                }
                j--;
            }
        } else {
            while(num >= x){
                res += romanMap[x];
                num -= x;
            }
        }
    }

    return res;
    
    
};
// @lc code=end

