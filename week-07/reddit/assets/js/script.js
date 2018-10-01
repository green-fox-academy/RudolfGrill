'use strict'

window.onload = () => {

  const host = 'http://localhost:8080';
  const postrequest = new XMLHttpRequest();
  const pageParent = document.querySelector('#postcontainer');
  const rightcontainerParent = document.querySelector('#rightcontainer');

  postrequest.open('GET', `${host}/posts`, true);

  console.log(postrequest);

  postrequest.onload = () => {
    if (postrequest.status === 200) {
      const postList = JSON.parse(postrequest.response).posts;
      console.log(postList);
      postList.forEach(element => {

        let postitem = document.createElement('div');
        pageParent.appendChild(postitem);
        postitem.id = element.id;
        postitem.classList.add('postitem');

        let scorediv = document.createElement('div');
        postitem.appendChild(scorediv);
        scorediv.classList.add('scorediv');

        let postcontent = document.createElement('div');
        postitem.appendChild(postcontent);
        postcontent .classList.add('postcontent');

        let title = document.createElement('div');
        postcontent.appendChild(title);
        title.innerText = element.title;
        title.classList.add('title');

        let interaction = document.createElement('div');
        postcontent.appendChild(interaction);
        interaction.classList.add('interaction');

        let date = document.createElement('div');
        interaction.appendChild(date);
        date.innerText = element.timestamp;

        let deleteButton = document.createElement('button');
        interaction.appendChild(deleteButton);
        deleteButton.classList.add('deleteButton');
        deleteButton.innerText = 'DELETE';

        let modify = document.createElement('button');
        interaction.appendChild(modify);
        modify.classList.add('modify');
        modify.innerText = 'MODIFY';

        let upvote = document.createElement('img');
        scorediv.appendChild(upvote);
        upvote.classList.add('upvote');
        upvote.setAttribute("src", "./assets/css/imgs/upvote.png");

        let score = document.createElement('div');
        scorediv.appendChild(score);
        score.classList.add('score');
        score.innerText = element.score;

        let downvote = document.createElement('img');
        scorediv.appendChild(downvote);
        downvote.classList.add('downvote');
        downvote.setAttribute("src", "./assets/css/imgs/downvote.png");

        

      })
    }
  }
  postrequest.send();

}