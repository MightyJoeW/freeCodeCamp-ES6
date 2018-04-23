// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.

const reverse = str =>
  str
    .split("")
    .reverse()
    .join("");

reverse("MightyJoeW");
