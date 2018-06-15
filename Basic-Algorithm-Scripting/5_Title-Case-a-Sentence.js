// Return the provided string with the first letter of each word capitalized.Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

const palindrome = word => {
    const regWord = /[^A-Za-z0-9]/g;
    const lwrCase = word.toLowerCase().replace(regWord, '');
    const reversed = lwrCase.split('').reverse().join('')

    return reversed === lwrCase;
}
palindrome('Racecar');