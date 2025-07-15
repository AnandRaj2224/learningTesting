 export function caesarCipher(string, shiftFactor) {
  let currCode, newChar;
  let length = string.length;
  let newString = "";
  let newCode;

  for (let i = 0; i < length; i++) {
    currCode = string.charCodeAt(i);
    if(currCode >= 65 && currCode <= 90) {
      newCode = ((currCode - 65 + shiftFactor) % 26 + 26) % 26 + 65;
    }
    else if(currCode >= 97 && currCode <= 122) {
      newCode = ((currCode - 97 + shiftFactor) % 26 + 26) % 26 + 97;
    } 
    else {
      newCode = currCode;
    }
    newChar = String.fromCharCode(newCode);
    newString += newChar;
  }
  return newString;
}

