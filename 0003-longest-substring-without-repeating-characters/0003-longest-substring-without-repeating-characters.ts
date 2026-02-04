function lengthOfLongestSubstring(s: string): number {
    let l = 0 , r = 0 , mxLen = 0;
    let set = new Set<string>();
    while(r < s.length){
        if(!set.has(s[r])){
            set.add(s[r]);
            r++;
            mxLen = Math.max(mxLen, set.size);
        }else {
            set.delete(s[l]);
            l++;
        }
    }

    return mxLen;
};