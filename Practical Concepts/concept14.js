//Functional Programming

const users = [
	{ name: "Affan", age: 23 },
	{ name: "Ali", age: 17 },
	{ name: "Sara", age: 20 },
];

const adultNames = users
	.filter((user) => user.age >= 18) // keep adults
	.map((user) => user.name.toUpperCase()) // convert to uppercase
	.reduce((result, name) => [...result, name], []); // collect in new array

console.log(adultNames); // ["AFFAN", "SARA"]
