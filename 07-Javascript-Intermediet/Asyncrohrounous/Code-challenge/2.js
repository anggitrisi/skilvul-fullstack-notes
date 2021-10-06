const thePromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout( () => resolve('success'), 3000);
    } else {
      setTimeout( () => resolve('failed'), 5000);
    }
  });
};

/*
What state will this promise be in after 0 seconds?

pending - karene baru fullfiled di detik ke-3
*/