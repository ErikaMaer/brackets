module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) return false;
    let arrayBrackets = bracketsConfig.map(a => a[0] + a[1]);
    let strLen = 0;
    while (str.length !== strLen) {
        strLen = str.length;
        arrayBrackets.forEach(brackets => {
            str = str.replace(brackets, '');
        });
    }
    return str.length === 0;
}

