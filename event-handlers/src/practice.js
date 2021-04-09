// // function binding

// let user = {
//   name: "AbdulSamad",
//   sayHi() {
//     console.log(this.name);
//   },
// };
// // create an wrapper function to evaluate this
// //setTimeout(() => user.sayHi()); // output: AbdulSamad

// function showDisplay(reference) {
//   reference();
// }
// let reference = user.sayHi.bind(user); // bind the user to sayHi now this inside sayHi always
// // reference to user
// //showDisplay(reference); // output: AbdulSamad

// // partial functions
// function mul(a, b) {
//   return a * b;
// }
// let triple = mul.bind(null, 3);

// console.log(triple(3));

// // CALLBACKS
// // what are callback functions: fuction that take another function as arguement for later
// // use a/c to requirement of our programs the arguement is callback function

// // let students = [
// //   { name: "Ronald", subject: "react" },
// //   { name: "navid", subject: "python" },
// // ];

// // function enrollStudents(student, callback) {
// //   // data loading taking time
// //   setTimeout(function () {
// //     students.push(student);
// //     callback(); // this callback waits until the student getEnrolled
// //   }, 8000);
// // }

// // function getStudents() {
// //   setTimeout(function () {
// //     students.forEach(function (student) {
// //       console.log(student.name);
// //     });
// //   }, 1000);
// // }

// // let newStudent = { name: "Asad", subject: "BBA" };
// // enrollStudents(newStudent, getStudents);

// // Convert this example into promises

// let students = [
//   { name: "Ronald", subject: "react" },
//   { name: "navid", subject: "python" },
// ];

// function enrollStudents(student) {
//   // data loading taking time

//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       let error = false;
//       if (!error) {
//         students.push(student);
//         resolve("Student has been Enrolled");
//       } else {
//         reject("There is an error");
//       }
//       // callback(); // this callback waits until the student getEnrolled
//     }, 8000);
//   });
// }

// function getStudents() {
//   setTimeout(function () {
//     students.forEach(function (student) {
//       console.log(student.name);
//     });
//   }, 1000);
// }

// let newStudent = { name: "Asad", subject: "BBA" };
// enrollStudents(newStudent)
//   .then((result) => {
//     getStudents();
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // PROMISES IN JAVASCRIPT

// let promise = new Promise(function (resolve, reject) {
//   // executar function
//   let error = true;
//   setTimeout(() => {
//     if (!error) {
//       resolve("No errors");
//     } else {
//       reject("Erros");
//     }
//   }, 3000);
// });

// promise
//   .then((result) => console.log(result))
//   .catch((error) => {
//     console.log(error);
//   });

// // promises in javascript

// let newPromise = new Promise((resolve, reject) => {
//   let error = true;
//   if (!error) {
//     resolve("Request handled sucessfully");
//   } else {
//     reject("there is an network request error");
//   }
// });
// newPromise
//   .then((sucess) => {
//     console.log(sucess);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // More elegant way to write an promise

// const handleRequest = async () => {
//   let promise = new Promise((resolve, reject) => {
//     let error = false;
//     if (!error) {
//       resolve("Request handled sucessfully by async/await");
//     } else {
//       reject("there is an network request by async/wait");
//     }
//   });
//   let result = await promise;
//   console.log(result);
// };
// handleRequest();

// The word “async” before a function means one simple thing: a function always returns a promise.
//  Other values are wrapped in a resolved promise automatically.
// Async and Await  in javascript

const handleRequest = async () => {
  let promise = new Promise(function (resolve, reject) {
    resolve("This has been Done!");
  });

  let result = await promise;
  console.log(result);
};
handleRequest();

// Destructuring of objects

let portalFreeze = {
  name: "Abdul Samad",
  id: "Sp18-bsse-0033",
  year: "4th",
};

let { name, year } = portalFreeze;

console.log(`My name is ${name} and I am in ${year} year`);

// Destruturing of array

let cars = ["Sportage", "MG v8", "Land Cruiser", "Audi"];

let [fav1, fav2, ...rest] = cars;

console.log(fav1, fav2, ...rest);
