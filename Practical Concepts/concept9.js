//Destructuring, Spread and Rest

// 1.1) Destructuring object
console.log("Destructuring object : ");
const user = {
	name: "Affan",
	age: 23,
	country: "Pakistan",
};
const { name, age } = user;
console.log(name);
console.log(age);

// 1.2) Destructuring array
console.log("Destructuring array : ");
const colors = ["red", "green", "blue"];
const [first, second] = colors;
console.log(first);
console.log(second);

// 2.1) spread array
console.log("spreading array : ");
const fruits = ["apple", "banana"];
const moreFruits = ["mango", ...fruits, "orange"];
console.log(moreFruits);

// 2.2) spread object
console.log("spreading object : ");
const person = { name: "Affan", age: 23 };
const updatedPerson = { ...person, country: "Pakistan" };

console.log(updatedPerson);

// 3.1) REST in functions
console.log("REST in ftns : ");
function sum(...numbers) {
	return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(2, 4, 6));

// 3.2) REST in objects
console.log("REST in objects : ");
const student = { name: "Ali", age: 20, grade: "A" };
const { grade, ...restInfo } = student;
console.log(grade);
console.log(restInfo);
