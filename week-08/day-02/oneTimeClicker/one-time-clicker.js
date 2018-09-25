//Create an event listener which logs the current timestamp to the console once the button is clicked.
//When the button is clicked for the second or any other times no event listener should be called.
//Try to solve this two different ways.

const button = document.querySelector('button');

const callback = (event) => {

  console.log(new Date);
  button.disabled = true;

};

button.addEventListener('click', (callback));