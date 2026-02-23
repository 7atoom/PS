function strStr(haystack: string, needle: string): number {
    let h = haystack.length;
    let n = needle.length;
    let idx = 0;
    for(let i = 0; i < h; i++){
        if(haystack[i] == needle[idx]){
            idx++;
        }else {
            i = i - idx;
            idx = 0;
        }

        if(idx == n){
            return i - n + 1;
        }
    }

    return -1;
};