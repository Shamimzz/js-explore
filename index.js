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


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.sort());

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.sort());
// console.log(fruits.reverse());



const points = [40, 100, 1, 5, 25, 10];
const a = points.sort(function(a, b){return 0.5 - Math.random()});
console.log(a);