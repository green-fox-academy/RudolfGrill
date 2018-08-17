'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

//ctx.clearRect(0, 0, canvas.width, canvas.height);


//ctx.translate(1,125);
//ctx.rotate(40 * Math.PI / 180);
//ctx.strokeRect(100, 100, 50, 50);

//ctx.strokeRect(160, 160, 50, 50);
//ctx.save();
//ctx.rotate(40);
//ctx.restore();

let angle: number = 0;

ctx.rotate(angle * Math.PI / 180);

ctx.translate(canvas.width / 2, canvas.height / 2);

let goaPartyGenerator = (angle) => {
  setTimeout(function () {
    ctx.rotate(angle * Math.PI / 180);
    ctx.strokeRect(angle + Math.random() * 12, Math.random() * 12, 100 + Math.random() * 12, 100 + Math.random() * 12);
    angle += Math.random();
//    ctx.lineWidth = Math.random() * 5;
    ctx.strokeStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},${Math.random()})`;
    goaPartyGenerator(angle);
  }, 50);
};

goaPartyGenerator(angle);