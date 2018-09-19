'use strict'

window.onload = () => {
  const host = 'http://localhost:8080/api';
  const myRequest = new XMLHttpRequest();
  const bookParent = document.querySelector('#bookTableRow');

  myRequest.open('GET', `${host}/books`, true);

  console.log(myRequest)

  myRequest.onload = () => {
    if (myRequest.status === 200) {
      const bookList = JSON.parse(myRequest.response);
      console.log(bookList);
      bookList.forEach(book => {
        let newTitle = document.createElement('th');
        bookParent.appendChild(newTitle);
        newTitle.innerText = book.book_name;
        let newTitle = document.createElement('th');
        bookParent.appendChild(newTitle);
        newTitle.innerText = book.aut_name;
      });
    }
  }
  myRequest.send();
}

