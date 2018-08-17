export { }


// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).


function bunniesEars(bunny: number): number {
  if (bunny > 0) {
    return 2 + bunniesEars(bunny - 1);
  } else {
    return 0;
  }
}

console.log(bunniesEars(10));
console.log(bunniesEars(15));
console.log(bunniesEars(600));