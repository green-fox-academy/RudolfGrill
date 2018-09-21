'use strict'

window.onload = () => {
  const host = 'http://localhost:8080/';
  const myRequest = new XMLHttpRequest();
  const PostParent = document.querySelector('#postContainer');

  myRequest.open('GET', `${host}posts`, true);

  console.log(myRequest);

  myRequest.onload = () => {
    if (myRequest.status === 200) {
      const postsList = JSON.parse(myRequest.response).posts;
      postsList.forEach(post => {
        let newRow = document.createElement('tr');
        PostParent.appendChild(newRow);
      });
    }






  }

  myRequest.send();

  fetch(`${host}posts`)
  .then((resp) => (resp.json()))
  .then(response => {
    console.log(response);
  });

}

