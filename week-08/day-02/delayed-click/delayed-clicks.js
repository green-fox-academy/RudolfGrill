//Create a simple HTML document with one button. 
//If the user clicks the button it should wait 2 seconds and
//it should show a text under the button: 2 seconds ellapsed

const button = document.querySelector('button');
const text = document.querySelector('ul');

const callback = (event) => {

  setTimeout(() => {
    text.innerText = `2 seconds ellapsed!  Mr. GiGiWiPi`;
  }, 2000);


}


button.addEventListener('click', callback);