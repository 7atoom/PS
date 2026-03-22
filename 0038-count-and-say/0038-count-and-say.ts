const encode = (s) => {
    const n = s.length;
    let prev = s[0];
    let count = 1;
    let r = '';
    for (let i = 1; i < n; ++i) {
        if (prev === s[i]) ++count;
        else {
            r += `${count}${prev}`;
            prev = s[i];
            count = 1;
        }
    }
    r += `${count}${prev}`;
    return r;
};

const countAndSay = (n) => {
    let s = '1';
    for (let i = 1; i < n; ++i) s = encode(s);
    return s;
};