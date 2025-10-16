//DOM Manipulation and Event Delegation

// ----------- DOM MANIPULATION -----------
const container = document.createElement("div");
container.id = "container";
document.body.appendChild(container);

// Create a button to add new items dynamically
const addBtn = document.createElement("button");
addBtn.textContent = "Add New Item";
container.appendChild(addBtn);

// Create a list that will hold items
const list = document.createElement("ul");
list.id = "itemList";
container.appendChild(list);

let count = 1;

// ----------- EVENT DELEGATION -----------
// Add click event to parent container instead of each child
container.addEventListener("click", (event) => {
	// If the "Add" button is clicked → add new item
	if (event.target.tagName === "BUTTON") {
		const newItem = document.createElement("li");
		newItem.textContent = `Item ${count++}`;
		list.appendChild(newItem);
	}

	// If any list item is clicked → handle via delegation
	if (event.target.tagName === "LI") {
		event.target.style.color = "blue";
		console.log(`You clicked on ${event.target.textContent}`);
	}
});
