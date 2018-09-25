const button = document.querySelector('nav');
const image = document.querySelector('.img-inspector');
console.log(button);
console.log(image);


button.addEventListener('click', (event) => {
  if (event.target.dataset.direction === 'in') {
    image.style.backgroundSize = "140%";
  } else if (event.target.dataset.direction === 'out') {
    image.style.backgroundSize = "60%";
  }
});
