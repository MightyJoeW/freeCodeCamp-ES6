// Basic Algorithm Scripting: Slice and Splice
// You are given two arrays and an index.
// Use the array methods slice and splice to copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs

const frankenSplice = (arr1, arr2, n) => {
    let newArr = arr2.slice(0, n);
    console.log({ newArr });

    let newArr2 = arr2.slice();
    console.log({ newArr2 });

    newArr2.splice(0, n)

    let subArray = newArr.concat(arr1).concat(newArr2);
    console.log({ subArray });

    return subArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
//  should return [4, 1, 2, 3, 5, 6]




// My Initial attempt
// const frankenSplice = (arr1, arr2, n) => {
//   arr2.splice(n, 0, arr1)
//   console.log({arr2});
//   const newArr = arr2.flat(); //.flat() is not working
//   return newArr;
// }

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
// frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
// frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].