// This keyword

const person1 = {
	name: "Affan",
	sayName() {
		console.log(this.name);
	},
};
person1.sayName();

const person2 = {
	name: "Dogar",
	say: () => console.log(this.name),
};
person2.say();
