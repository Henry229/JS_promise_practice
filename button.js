function buttonPromise() {
  return new Promise((resolve, reject) => {
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
      resolve();
    });
  });
}

buttonPromise().then(() => console.log('Success!'));
