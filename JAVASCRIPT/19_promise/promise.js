// console.log("promise example");

// let p1 = new Promise((resolve, reject) => {});
// console.log(p1);

// let p2 = new Promise((resolve, reject) => {
//   resolve("this promise is resolved");
// });
// console.log(p2);

// let p3 = new Promise((resolve, reject) => {
//   reject("sorry, this is rejected");
// });
// console.log(p3);

// p2.then((data) => {
//   console.log(data);
// })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(console.log("promise is present"));

// p3.then((data) => {
//   console.log(data);
// })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(console.log("promise is present"));

// p1.then((data) => {
//   console.log(data);
// })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(console.log("promise is present"));

// console.log("end");


// let myPromise = new Promise((resolve, reject) => {
//   let study = false;

//   if (study) resolve("I will start your react batch");
//   else reject("I will not start your react batch 😡🤬");
// });

// myPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const promise = new Promise((resolve,reject)=>{
  setTimeout(()=>{ let user = {user:'lokesh'};resolve('completed')},5000);
});
promise.then((result)=>{console.log('Result:', result)})  // after 5 second  > Result: completed

