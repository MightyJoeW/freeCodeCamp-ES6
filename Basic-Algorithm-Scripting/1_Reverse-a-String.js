// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.

const reverse = str =>
  str
    .split("")
    .reverse()
    .join("");

reverse("MightyJoeW");


// without prototypes

// const reverseString = str => {
//   let newStr = '';

//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i];
//   }
//   return newStr;
// }

// reverseString("hello");