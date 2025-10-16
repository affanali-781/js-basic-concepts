// Event loop and Task Queue

console.log("1");
setTimeout(() => console.log("2"), 0); // macroTask
Promise.resolve().then(() => console.log("3")); // microTask
console.log("4");
