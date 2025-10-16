//Error Handling

try {
	throw new Error("Something went wrong!");
} catch (err) {
	console.error(err.message);
}

async function fetchData() {
	try {
		const res = await fetch("https://invalid-url");
		console.log("Success");
	} catch (err) {
		console.log("Fetch failed:", err.message);
	}
}

fetchData();
