'use strict';

window.onload = () => {

  const server = 'http://localhost:8080';

  const getgame = `${server}/game`;

  fetch(getgame)
    .then(res => res.json())
    .then(respBody => {
      const questionBox = document.querySelector('#question');
      const answersDiv = document.querySelector('#answer');
      console.log(questionBox);

      const source = respBody;
      /*console.log(source);
      console.log(source.question);
      console.log(source.answers[0].answer);
      console.log(source.answers[1].answer);
      console.log(source.answers[2].answer);
      console.log(source.answers[3].answer);
      console.log(source.answers[3].id);*/


      questionBox.innerHTML = source.question;
      const sourceAnswers = respBody.answers;

      sourceAnswers.forEach(element => {
        let answerbutton = document.createElement('button');
        answersDiv.appendChild(answerbutton);
        answerbutton.innerText = element.answer;
        answerbutton.id = element.id;
        console.log(element.id);

        answerbutton.addEventListener('click', () => {
          if (element.is_correct === 0) {
            answerbutton.style.backgroundColor = "red";
            answerbutton.disabled = true;
          } else {
            answerbutton.style.backgroundColor = "green";
            answerbutton.disabled = true;
            setTimeout(() => {
              window.location.reload();
            }, 3000);
          }
        });

      });


    })
};