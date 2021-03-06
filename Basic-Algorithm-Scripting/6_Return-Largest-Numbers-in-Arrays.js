// Return an array consisting of the largest number from each provided sub - array.For simplicity, the provided array will contain exactly 4 sub - arrays.

//     Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

//My latest solution that accounts for negative numbers too (up to negative 1000)
const largestOfFour = arr => {
    const largestNum = [-1000, -1000, -1000, -1000]
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > 0 && arr[i][j] > largestNum[i]) {
                largestNum[i] = arr[i][j];
            } else if (arr[i][j] < 0 && arr[i][j] > largestNum[i]) {
                largestNum[i] = arr[i][j];
                console.log(`largestNum ${largestNum}`);
            }
        }
    }
    return largestNum;
}


// const largestOfFour = arr => {
//     let finalArr = [];
//     let largestNum0 = 0;
//     let largestNum1 = 0;
//     let largestNum2 = 0;
//     let largestNum3 = -100;

//     const arr0 = arr[0]
//     const arr1 = arr[1]
//     const arr2 = arr[2]
//     const arr3 = arr[3]
//     console.log(`arr0: ${arr[0]}`);

//     arr0.map(num => num > largestNum0 ? largestNum0 = num : num); //5
//     console.log(`largestNum0: ${largestNum0}`); //5

//     arr1.map(num => num > largestNum1 ? largestNum1 = num : num); //27
//     console.log(`largestNum1: ${largestNum1}`); //27

//     arr2.map(num => num > largestNum2 ? largestNum2 = num : num); //39
//     console.log(`largestNum2: ${largestNum2}`); //39

//     arr3.map(num => num > largestNum3 ? largestNum3 = num : num); //1001
//     console.log(`largestNum3: ${largestNum3}`); //1001

//     // Push largestNum onto finalArr
//     finalArr.push(largestNum0);
//     finalArr.push(largestNum1);
//     finalArr.push(largestNum2);
//     finalArr.push(largestNum3);
//     console.log(finalArr);
//     return finalArr;

    // For loop solution https://medium.freecodecamp.org/three-ways-to-return-largest-numbers-in-arrays-in-javascript-5d977baa80a1
    // const largestOfFour = arr => {
    //     let largestNumber = [0, 0, 0, 0];
    //     for (let i = 0; i < arr.length; i++) {
    //         for (let j = 0; j < arr[i].length; j++) {
    //             if (arr[i][j] > largestNumber[i]) {
    //                 largestNumber[i] = arr[i][j]
    //             }
    //         }
    //     }
    //     return largestNumber;
    // }

}

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.
// largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27, 5, 39, 1001].
// largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].
largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]) //[25, 48, 21, -3]