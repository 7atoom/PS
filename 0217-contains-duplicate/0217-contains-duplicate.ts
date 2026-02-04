function containsDuplicate(nums: number[]): boolean {
    let numsMap = new Map<number, number>();
    let f:boolean = false;
    for(let num of nums){
        const count = (numsMap.get(num) ?? 0) + 1;
        numsMap.set(num, count);
        if(count === 2)f = true;
    }

    return f;

};