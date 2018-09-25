'use strict'
/*You can work in the html or in a separate js file. Like:
  <script>
    On the click of the button,
    Count the items in the list
    And display the result in the result element.
  </script>
*/


const ul = document.querySelector('ul')
const button = document.querySelector('button');
const result = document.querySelector('.result');

button.addEventListener('click', () => {
  return result.textContent = ul.childElementCount;
})