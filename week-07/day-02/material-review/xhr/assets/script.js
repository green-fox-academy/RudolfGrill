window.onload = () => {
  const host = 'http://localhost:3000/api';
  const http = new XMLHttpRequest();
  const cocktailParent = document.querySelector('#cocktail-list');
  http.open('GET', `${host}/cocktails`, true);
  console.log(http);
  /*
  http.onreadystatechange = () => {
    console.log(http);
    if (http.readyState === 4 && http.status === 200) {
      console.log('resp: ', http.response);
    }
  }
  */
  http.onload = () => {
    if (http.status === 200) {
      const cocktails = JSON.parse(http.response);
      cocktails.forEach((elem) => {
        const cocktailDiv = document.createElement('div');
        cocktailDiv.classList.add('jumbotron');

        const title = document.createElement('h1');
        title.innerText = elem.name;
        title.classList.add('display-4');

        const alcohol = document.createElement('p');
        alcohol.innerText = elem.contains.join(', ');

        cocktailDiv.appendChild(title);
        cocktailDiv.appendChild(alcohol);
        cocktailParent.appendChild(cocktailDiv);
      });
    }
  }
  http.send();

  fetch(`${host}/nytimes/tesla`)
  .then((resp) => (resp.json()))
  .then(response => {
    console.log(response);
  });
