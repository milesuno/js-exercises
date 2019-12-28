/* 
Alice has a list of good friends. 
Define a method "makeFriend" to add a new friend to her list.
*/

var person = {
	name: "Alice",
	friends: ["John", "Nina"],
	makeFriend: function(name) {
		this.friends.push(name);
		console.log(this.friends);
		//Why does assigning it to this.friends outputs 3? when push is assigned to var it returns array length
	}
};

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

person.makeFriend("Bob");

console.log(
	"Expected result: 'John,Nina,Bob'. Actual result: " + person.friends
);
