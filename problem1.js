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


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date();
let month = months[d.getMonth()];

console.log(month);