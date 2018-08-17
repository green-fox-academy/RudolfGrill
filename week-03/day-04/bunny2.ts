export { }
// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
// (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say
// have 3 ears, because they each have a raised foot. Recursively return the
// number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

function funnyBunnies(bunny: number): number {
  if (bunny == 0) {
    return 0;
  } else if (bunny % 2 !== 0) {
    return 2 + funnyBunnies(bunny - 1);
  } else if (bunny % 2 == 0) {
    return 3 + funnyBunnies(bunny - 1);
  }
}
console.log(funnyBunnies(2));
console.log(funnyBunnies(4));
console.log(funnyBunnies(10));
console.log(funnyBunnies(40));

