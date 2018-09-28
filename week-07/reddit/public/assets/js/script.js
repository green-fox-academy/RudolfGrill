'use strict'

window.onload = () => {
  const http = 'http://localhost:8080';
  const http = new XMLHttpRequest();
  const pageParent = document.querySelector('#postcontainer');
  const pageMainChild = document.querySelector('#content');
  const submitButton = document.querySelector("button[type=submit]")

  http.open('GET', `${host}/posts`, true);

  //console.log(myRequest);

  http.onload = () => {
    if (myRequest.status === 200) {
      const postsList = JSON.parse(myRequest.response).posts;

      postsList.forEach(post => {
        let separateContainers = document.createElement("div");
        separateContainers.className = "container";

        let separatePost = document.createElement("div");
        separatePost.className = "post";

        let separatePostContent = document.createElement("div");
        separatePostContent.className = "postcontent";



        
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

