'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


//ctx.strokeRect(200, 0, 200, 200);
//ctx.strokeRect(0, 200, 200, 200);
//ctx.strokeRect(400, 200, 200, 200);
//ctx.strokeRect(200, 400, 200, 200);

function sierpinskiCarpet(a: number) {
  if (a>10) {
    ctx.strokeRect(a, a / a, a, a);
    ctx.strokeRect(a / a, a, a, a);
    ctx.strokeRect(2 * a, a, a, a);
    ctx.strokeRect(a, a * 2, a, a);
    a -= 30;
    sierpinskiCarpet(a);
  } else {
    return 10;
  }
}

sierpinskiCarpet(200);