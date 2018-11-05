window.onload = (event) => {
  let loadMoment = event.timeStamp;
  console.log(loadMoment);

  const button = document.querySelector('button');
  const text = document.querySelector('ul');

  let clickCounter = 0;

  button.addEventListener('click', (clickEvent) => {
    let clickMoment = clickEvent.timeStamp;
    console.log(clickMoment);
    clickCounter++;
    console.log(clickCounter);

    if (clickCounter === 3 && (clickMoment - loadMoment) > 3) {
      button.disabled = true
      text.innerHTML = `${Math.floor((clickMoment - loadMoment) / 1000)} second elapsed and you clicked ${clickCounter} times`
    }
  });
};