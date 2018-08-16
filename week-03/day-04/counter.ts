export { }

// Write a recursive function that takes one parameter: n and counts down from n.

function counter(n: number): void {
  if (n == 0) {
    console.log(0);
  } else {
    console.log(n);
    counter(n - 1);
  }

}

counter(5);