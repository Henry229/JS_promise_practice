function buttonPromise() {
  return new Promise((resolve, reject) => {
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
      resolve(console.log('Success!'));
    });
  });
}

// buttonPromise().then(() => console.log('Success!'));

async function clickButton() {
  try {
    const clickBtn = await buttonPromise();
  } catch {
    (err) => console.log(err);
  }
  // return clickBtn;
}

clickButton().then((btn) => console.log(btn));
