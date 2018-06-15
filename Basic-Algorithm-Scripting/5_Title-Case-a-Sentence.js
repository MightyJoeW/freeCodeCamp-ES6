// Return the provided string with the first letter of each word capitalized.Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

const titleCase = str => {
    // make each word lowercase and split str into an array
    const arr = str.toLowerCase().split(' ');
    console.log(`arr: ${arr}`);

    // loop through and make 0 index toUpperCase()
    const newArr = arr.map(word => word[0].toUpperCase() + word.slice(1));
    return newArr.join(' ');
}
titleCase('makE suRe the Rest of the WorD is in lower Case.')