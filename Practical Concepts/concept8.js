// Fetch API

fetch("https://api.github.com/users/affanali")
	.then((res) => res.json())
	.then((data) => console.log(data))
	.catch((err) => console.error(err));
