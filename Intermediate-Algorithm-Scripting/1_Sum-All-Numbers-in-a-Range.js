// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

// The lowest number will not always come first.

function sumAll(arr) {
    const reducer = (acc, cur) => acc + cur;
    console.log(arr.reduce(reducer));
}

sumAll([1, 4]);