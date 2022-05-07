// const stu = [
//     {name: "Shamim", ID: 49, Batch: 'CSE 13th'}
// ]



/*


// Create and display an array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;

// First sort the array
fruits.sort();

// Then reverse it:
fruits.reverse();

document.getElementById("demo2").innerHTML = fruits;

*/


// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren);


const fruits = ["Banana", "Orange", "Apple", "Mango"];
const result = fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(result);