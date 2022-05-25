//---------- Print -----------//

// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let i = 0;
// let text = "";

// while (cars[i]) {
//   text += cars[i];
//   i++;
// }



// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// list: {
//   text += cars[0] + "<br>";
//   text += cars[1] + "<br>";
//   break list;
//   text += cars[2] + "<br>";
//   text += cars[3] + "<br>";
// }


// Create a Map
// const fruits = new Map();

// Set Map Values
// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// fruits.set("oranges", 200);


// let str = "Please locate where 'locate' occurs!";
// str.lastIndexOf("John");

// let str = "Please locate where 'locate' occurs!";
// str.indexOf("locate", 15);

// let text = "The rain in SPAIN stays mainly in the plain";
// console.log(text.match(/ain/g));

// let text = "Hello world, welcome to the universe.";
// text.includes("world", 12);
// console.log(text.includes("world", 12));


// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// const d = new Date();
// let month = months[d.getMonth()];
// console.log(month);

// console.log(Math.abs(-47.9));

// console.log(Math.pow(8, 2));

// console.log(Math.sin(90 * Math.PI / 180));

// console.log(Math.min(0, 150, 30, 20, -8, -200));

// console.log(Math.max(0, 150, 30, 20, -8, -200))

// let age = 19;
// let voteable = (age < 18) ? "Too young":"Old enough";
// console.log(voteable);

// const person = {fname:"John", lname:"Doe", age:25};
// let text = "";
// const a = () => {
//     for (let x in person){ 
//         text += person[x];
//     }
// }
// console.log(a);


// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);
  
//   for (const x of fruits) {
//     console.log(x)
//   }



// Create a Set
// List all Elements
const letters = new Set(["a","b","c"]);
let text = "";
const a = letters.forEach (function(value) {
  text += value;
})  
console.log(a);
