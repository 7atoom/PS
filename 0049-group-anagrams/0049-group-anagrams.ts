function groupAnagrams(strs: string[]): string[][] {
    let AnagramMap: Map<string , string[]> = new Map();
    for(let str of strs){
        let sortedStr = str.split('').sort().join('');
        if(AnagramMap.has(sortedStr)){
            AnagramMap.get(sortedStr).push(str);
        }else {
            AnagramMap.set(sortedStr, [str]);
        }
    }

    return Array.from(AnagramMap.values());

};