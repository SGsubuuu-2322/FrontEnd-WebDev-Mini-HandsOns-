const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 2000);
});

promise.then(() => {
  console.log("Promise resolved...");
});
