export { }

// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.


function xReplaceY(inputString: string, letterX: string, letterY: string): string {
  if (inputString.indexOf(letterX) === -1) {
    return inputString;
  } else {
    inputString = inputString.replace(letterX, letterY)
    return xReplaceY(inputString, letterX, letterY);
  }
}

console.log(xReplaceY("yanayxxx", "x", "y"));