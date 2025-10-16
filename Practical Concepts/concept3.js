// Closure

function counter() {
	let count = 0;
	return function () {
		count++;
		console.log(count);
	};
}

const increase = counter();
increase();
increase();
