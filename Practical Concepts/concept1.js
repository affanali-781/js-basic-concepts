// Execution Context and Scope

let a = 10; // global scope

function test() {
	let b = 20; // function scope
	if (true) {
		let c = 30; // block scope
		console.log(a, b, c);
	}
	console.log(a, b);
	// console.log(c);  Error
}

test();
