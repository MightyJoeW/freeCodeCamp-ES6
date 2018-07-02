// Return the lowest index at which a value(second argument) should be inserted into an array(first argument) once it has been sorted.The returned value should be a number.

// For example, getIndexToIns([1, 2, 3, 4], 1.5) should return 1 because it is greater than 1(index 0), but less than 2(index 1).

//     Likewise, getIndexToIns([20, 3, 5], 19) should return 2 because once the array has been sorted it will look like[3, 5, 20] and 19 is less than 20(index 2) and greater than 5(index 1).


// Initial attempt
const getIndexToIns = (arr, num) => {
    let sortedArr = arr.sort();
    let tracker = 0;

    console.log({ sortedArr, num });
    for (let i = 0; i < sortedArr.length; i++) {
        if (num > arr[i]) {
            console.log(arr[i]);
            tracker += 1;
            console.log({ tracker });
        } else if (num <= arr[i]) {
            sortedArr.splice((tracker - 1), 0, num)
        }
    }
    return sortedArr;
}

getIndexToIns([40, 60, 15, 1], 50);