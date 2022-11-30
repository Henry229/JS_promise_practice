function imagePromises() {
  return new Promise((resolve, reject) => {
    const image = document.querySelector('img');
    console.log(image);
    image.addEventListener('load', () => {
      resolve();
    });
    image.addEventListener('error', () => {
      reject();
    });
  });
}

imagePromises()
  .then(() => console.log('Image loaded successfully'))
  .catch(() => console.log('Image failed to load'));
