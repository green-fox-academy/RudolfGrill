window.onload = () => {
  const svajc = () => {
    return setTimeout(() => {
      console.log('💣 BUMMM. 💣');
    }, 3000);
  }

  const logMessage = () => {
    console.log('Click');
  }

  const createDateContainer = (contentBody) => {
    const p = document.createElement('p');
    p.innerText = new Date(Date.now()).toLocaleString();
    contentBody.appendChild(p);
  }

  const intervalSet = (contentBody) => {
    return setInterval(() => {
      createDateContainer(contentBody);
    }, 1000);
  }

  let content = document.querySelector('#content');
  let timerButton = document.querySelector('#timer-button');
  let saveButton = document.querySelector('#stop-bummm');
  let timer = null;
  let brusszel = null;
  let isClicked = false;

  saveButton.addEventListener('click', () => {
    clearTimeout(brusszel);
  });

  timerButton.addEventListener('click', () => {
    if (!isClicked) {
      brusszel = svajc();
      timer = intervalSet(content);
      timerButton.innerText = 'STOP';
    } else {
      clearInterval(timer);
      timerButton.innerText = 'START';
    }

    isClicked = !isClicked;
  });

  /*
  timerButton.addEventListener('click', () => {
    console.log(timer);
    clearInterval(timer);
  });
  */
}