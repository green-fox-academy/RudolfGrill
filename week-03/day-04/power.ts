export{}

// Given base and n that are both 1 or more, compute recursively (no loops)
// the of base to the n power, so powerN(3, 2) is 9 (3 squared).

//power(3,2)-->    3*3
//power(4,3)-->    4*4*4

function power(base: number, exponent: number): number {
  if (exponent == 1) {
    return base;
  } else {
    console.log(base, exponent);
    return base * power(base, exponent - 1);
  }
}

console.log(power(2,4));
