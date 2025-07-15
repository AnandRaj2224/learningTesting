function caesarCipher(string, shiftFactor) {
  let currCode, newChar;
  let length = string.length;
  let newString = "";
  let big = 64;
  let small = 96;

  for (let i = 0; i < length; i++) {
    currCode = string.charCodeAt(i);
    if (
      (currCode >= 65 && currCode <= 90) ||
      (currCode >= 97 && currCode <= 122)
    ) {
      newCode = currCode + shiftFactor;

      if (newCode > 90 && newCode < 97) {
        newCode = big + (currCode - 90) + shiftFactor;
      }
      if (newCode > 122) {
        newCode = small + (currCode - 122) + shiftFactor;
      }
    } else {
      newCode = currCode;
    }
    newChar = String.fromCharCode(newCode);
    newString += newChar;
  }
  return newString;
}

console.log(caesarCipher("Hello, World!", 3));
