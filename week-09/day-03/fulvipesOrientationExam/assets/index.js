'use strict';

window.onload = () => {
  const server = 'http://localhost:3000';

  const submitButton = document.querySelector('button');
  const result = document.querySelector('h3');
  const inputMatrix = document.querySelector('#matrixChecker');

  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    fetch(`${server}/matrix`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({ matrix: inputMatrix.value })
    }).then(response => response.json()
      .then(respBody => {
        result.textContent = respBody.status;
        result.style.color = "red";
      }));
  })
}