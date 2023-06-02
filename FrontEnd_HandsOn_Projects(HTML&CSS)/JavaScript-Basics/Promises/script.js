var userLoggedIn = false;

function checkUserLoggedIn() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userLoggedIn) {
        resolve("Promise resolved...");
      } else {
        reject("Promise Rejected...");
      }
    }, 2000);
  });
  return promise;
}

setTimeout(() => {
  userLoggedIn = !userLoggedIn;
}, 500);

checkUserLoggedIn()
  .then((successmsg) => {
    console.log(successmsg);
  })
  .catch((failuremsg) => {
    console.log(failuremsg);
  });
