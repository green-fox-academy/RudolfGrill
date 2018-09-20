'use strict'

window.onload = () => {
  const host = 'http://localhost:8080/api';
  const myRequest = new XMLHttpRequest();
  const bookParent = document.querySelector('#bookContainer');

  myRequest.open('GET', `${host}/books`, true);

  console.log(myRequest)

  myRequest.onload = () => {
    if (myRequest.status === 200) {
      const bookList = JSON.parse(myRequest.response);
      bookList.forEach(book => {
        let newRow = document.createElement('tr');
        bookParent.appendChild(newRow);
        let newTitle = document.createElement('td');
        newRow.appendChild(newTitle);
        newTitle.innerText = book.book_name;
        let newAuthor = document.createElement('td');
        newRow.appendChild(newAuthor);
        newAuthor.innerText = book.aut_name;
        let newCategory = document.createElement('td');
        newRow.appendChild(newCategory);
        newCategory.innerText = book.cate_descrip;
        let newPublisher = document.createElement('td');
        newRow.appendChild(newPublisher);
        newPublisher.innerText = book.pub_name
        let newPrice = document.createElement('td');
        newRow.appendChild(newPrice);
        newPrice.innerText = book.book_price;
      });
    }
  }

  myRequest.send();

}