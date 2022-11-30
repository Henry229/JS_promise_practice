function ajaxPromises() {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: 'GET',
      url: 'https://codingapple1.github.io/hello.txt',
    }).done((res) => {
      resolve(res);
    });
  });
}
function ajaxPromises2() {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: 'GET',
      url: 'https://codingapple1.github.io/hello2.txt',
    }).done((result) => {
      resolve(result);
    });
  });
}

ajaxPromises()
  .then((res) => {
    console.log(res);
    const title = document.querySelector('h1');
    title.innerText = `${res}`;
  })
  .then(() =>
    ajaxPromises2().then((result) => {
      console.log(result);
      const smallTitle = document.querySelector('h2');
      smallTitle.innerText = `${result}`;
    })
  );
