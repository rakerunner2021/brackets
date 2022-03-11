const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];
module.exports = function check(str, bracketsConfig) {
    let c = [];
    if (str.length % 2 !== 0) {
        return false;
    } else {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '[' || str[i] === "{" || (str[i] === '|' && c[c.length - 1] !== '|') || str[i] === '1' || str[i] === '3' || str[i] === '5' || (str[i] === '7' && c[c.length - 1] !== '7') || (str[i] === '8' && c[c.length - 1] !== '8')) {
            c.push(str[i]);
        } else if ((str[i] === ')' && c.length > 0 && '(' === c[c.length - 1]) || (str[i] === ']' && c.length > 0 && '[' === c[c.length - 1]) || (str[i] === '}' && c.length > 0 && '{' === c[c.length - 1]) || (str[i] === '|' && c.length > 0 && '|' === c[c.length - 1]) || (str[i] === '2' && c.length > 0 && '1' === c[c.length - 1]) || (str[i] === '4' && c.length > 0 && '3' === c[c.length - 1]) || (str[i] === '6' && c.length > 0 && '5' === c[c.length - 1]) || (str[i] === '7' && c.length > 0 && '7' === c[c.length - 1]) || (str[i] === '8' && c.length > 0 && '8' === c[c.length - 1])) {
            c.pop();
        } 
        
    }
    
    if (c.length) {
        return false;
    } else {
        return true;
    }
    }
}
