// const stu = [{name:"Shamim", ID: 49, Batch: 'CSE 13th'}] /
/*

// Create and display an array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;

//First sort the array
fruits.sort();

//Then reverse it:
fruits.reverse();

document.getElementById("demo2").innerHTML = fruits;

*/
// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

//const myChildren = myGirls.concat(myBoys);
//console.log(myChildren);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const result = fruits.splice(2, 2, "Lemon", "Kiwi");
// console.log(result);



// 1. how to get random number between 1 to 6 in ludo Game. 
// const ludo = () => {
//    Math.floor(Math.random() * 6);
// }
// console.log(ludo);



//------------------ SORT-------------------

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.sort());

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.sort());
// console.log(fruits.reverse());


// const points = [40, 100, 1, 5, 25, 10];
// const a = points.sort(function(a, b){
//    return b - a
// });
// console.log(a);



// const points = [40, 100, 1, 5, 25, 10];
// const a = points.sort(function(a, b){return 0.5 - Math.random()});
// console.log(a)


// const points = [40, 100, 1, 5, 25, 10];

// for (let i = points.length -1; i > 0; i--) {
//   let j = Math.floor(Math.random() * i)
//   let k = points[i]
//   points[i] = points[j]
//   points[j] = k
// }

// console.log(first)



// const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }
// console.log(myFunction());


// ----------------reduce Function-------------

// const numbers = [45, 4, 9, 16, 25];
// let total = numbers.reduce(myFunction, 100);

// function myFunction(total, value) {
//   return total + value;
// }
// console.log(total)


// const numbers1 = [45, 4, 9, 16, 25];
// const numbers2 = numbers1.map(myFunction);

// function myFunction(value, index, array) {
//   return value * 2;
// }
// console.log(numbers2);


// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(myFunction);

// function myFunction(total, value, index, array) {
//   return total + value;
// }
// console.log(sum);

// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduceRight(myFunction);

// function myFunction(total, value, index, array) {
//   return total + value;
// }
// console.log(sum)

// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min) ) + min;
// }
// console.log(getRndInteger(100, 2));



// age = Number(age);

// if (isNaN(age)) {
//   voteable = "Input is not a number";
//  } else {
//   voteable = (age < 18) ? "Too young" : "Old enough";
// }

// console.log(first);


switch (new Date().getDay()) {
  default:
    text = "Looking forward to the Weekend";
    break;
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
}

