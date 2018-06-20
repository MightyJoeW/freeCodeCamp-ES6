// Repeat a given string str(first argument) for num times(second argument).Return an empty string if num is not a positive number.

const repeatStringNumTimes = (str, num) => {
    return num > 0 ? str.repeat(num) : '';
}
repeatStringNumTimes("abc", 3);

// ES5 Solution
// const repeatStringNumTimes = (str, num) => {
//     let repeatedStr = '';
//     while (num > 0) {
//         repeatedStr += str;
//         num--
//     }
//     return repeatedStr;
// }

// repeatStringNumTimes("abc", 3);