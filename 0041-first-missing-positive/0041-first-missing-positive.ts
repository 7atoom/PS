function firstMissingPositive(nums: number[]): number {
    let cnt = 1;
    nums.sort((a ,b) => a - b);
    for(let i = 0; i < nums.length; i++){
        if(cnt === nums[i])cnt++;
    }

    return cnt;
};