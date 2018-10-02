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

        let upvotebtn = document.createElement('button');
        scorediv.appendChild(upvotebtn);
        upvotebtn.classList.add('upvotebtn');

        let upvoteimg = document.createElement('img');
        upvotebtn.appendChild(upvoteimg);
        upvoteimg.classList.add('upvoteimg');
        upvoteimg.setAttribute("src", "./assets/css/imgs/upvote.png");

        let score = document.createElement('div');
        scorediv.appendChild(score);
        score.classList.add('score');
        score.innerText = element.score;

        let downvotebtn = document.createElement('button');
        scorediv.appendChild(downvotebtn);
        downvotebtn.classList.add('downvotebtn');

        let downvoteimg = document.createElement('img');
        downvotebtn.appendChild(downvoteimg);
        downvoteimg.classList.add('downvoteimg');
        downvoteimg.setAttribute("src", "./assets/css/imgs/downvote.png");

        
      })
    }
  }
  postrequest.send();

}