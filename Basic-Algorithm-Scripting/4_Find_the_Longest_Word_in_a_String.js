// Return the length of the longest word in the provided sentence.
// Your response should be a number.

const findLongestWordLength = str => {
    // turn string into array
    const arr = str.split(' ');
    console.log(`arr: ${arr}`);

    //create variable for longest word
    let longestWord = 0;

    //map through array and reassign longestWord to the longest word
    arr.map(word => word.length > longestWord ? longestWord = word.length : longestWord);

    //return length of longest word
    return longestWord
}

findLongestWordLength("What is the average airspeed velocity of an unladen swallow");