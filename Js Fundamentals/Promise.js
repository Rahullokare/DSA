const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    return resolve("hello world");
  }, 3000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    return reject("OOps Something Went Wrong!!");
  }, 2000);
});
const chainpromises = new Promise((resolve, reject) => {
  setTimeout(() => {
    return resolve(2);
  }, 2000);
});
const chainpromises2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    return resolve(4);
  }, 2000);
});
const chainpromises4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    return resolve(5);
  }, 2000);
});
const randromPromise = new Promise((res, rej) => {
  setTimeout(() => {
    const number = Math.floor(Math.random() * 2);
    console.log(number);

    if (number === 2) {
      return res(number);
    } else {
      return rej("Opps something went wrong RAndom!");
    }
  });
});
Promise.all([chainpromises2, chainpromises, randromPromise])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
randromPromise.then((res) => console.log(res)).catch((err) => console.log(err));
chainpromises
  .then((res) => res * 2)
  .then((res) => res + 5)
  .then((res) => console.log(res));
promise2.catch((errr) => console.log(errr));
promise.then((res) => console.log(res));
