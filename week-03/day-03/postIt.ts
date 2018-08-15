class postIt {
  private text: string;
  private backgroundColor: string;
  private textcolor: string;
  constructor(text: string, backgroundColor: string, textcolor: string) {
    this.text = text;
    this.backgroundColor = backgroundColor;
    this.textcolor = textcolor;
  }
}

let postIt1: postIt = new postIt('Idea', 'orange', 'blue');
let postIt2: postIt = new postIt('Awosome', 'pink', 'text');
let postIt3: postIt = new postIt('Superb', 'yellow', 'green');

console.log(postIt1);
console.log(postIt2);
console.log(postIt3);