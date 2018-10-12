window.onload = () => {

  const host = 'http://localhost:3000';

  //game fetch
  const urlgame = `${host}/game`;
  const scorevalue = document.querySelector('#scorevalue');
  const questionDIV = document.querySelector('#questions');
  const questiontext = document.querySelector('#currentquest');
  let currentscore = undefined;
  scorevalue.innerHTML = currentscore;

  fetch(urlgame)
    .then(res => res.json())
    .then(myJson => {
      const source = myJson;
      console.log(source);

      questiontext.innerHTML = `"${source.question}"`
      let currentscore = localStorage.getItem('actualscore')
      scorevalue.innerHTML = currentscore;

      for (let i = 0; i < 4; i++) {
        let newAns = document.createElement('button');
        questionDIV.appendChild(newAns);
        newAns.classList.add('answer')
        newAns.innerHTML = `"${source.answers[i].answer}"`

        newAns.addEventListener('click', (event) => {
          console.log(event);
          if (source.answers[i].is_correct === 1) {
            newAns.style.background = '#00b894';
            newAns.style.color = 'white'
            let currentscore = localStorage.getItem('actualscore')
            currentscore = Number(currentscore) + 1;
            scorevalue.innerHTML = currentscore;
            localStorage.setItem('actualscore', currentscore);


            // scorevalue.innerText = `${ Number(scorevalue.innerText) + 1 } `;
            console.log(scorevalue.innerText)
            newAns.disabled = true;
            setTimeout((function () {
              window.location.reload();
            }), 2000);
          } else {
            newAns.style.background = '#e17055';
            newAns.disabled = true;
          }
        })
      }
    })
}