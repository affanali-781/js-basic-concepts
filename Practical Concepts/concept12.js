// Optional chaining
const user = {
	profile: {
		address: {
			city: "Islamabad",
		},
	},
};

console.log("By Optional chaining: " + user.profile?.address?.city);
console.log("By Optional chaining: " + user.profile?.contacts?.email);

//Nullish Coalescing
const username = null;
console.log("By Nullish Coalescing; " + username ?? "Guest");

const age = undefined;
console.log("By Nullish Coalescing: " + age ?? 18);

const score = 0;
console.log("By Nullish Coalescing: " + score ?? 100);
