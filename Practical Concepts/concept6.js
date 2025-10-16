//Promise, Asyns, Await

function fetchData() {
	return new Promise((resolve, reject) => {
		console.log("Fetching data from server...");

		setTimeout(() => {
			const success = true;

			if (success) {
				resolve("Data fetched successfully!");
			} else {
				reject("Failed to fetch data!");
			}
		}, 2000);
	});
}

async function displayData() {
	try {
		const result = await fetchData();
		console.log(result);
		console.log("Process complete!");
	} catch (error) {
		console.error(error);
	}
}

displayData();
