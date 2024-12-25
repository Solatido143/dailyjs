class ListNode {
	constructor(value = 0, next = null) {
		this.value = value; // Store the value of the node
		this.next = next; // Reference to the next node
	}
}
// console.log(new ListNode(1));

// Create individual nodes
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);

console.log(node1, node2, node3);

// Link the nodes together
node1.next = node2;
node2.next = node3;

console.log(node1);

// The list now looks like: 1 -> 2 -> 3 -> null

let current = node1; // Start at the head of the list
while (current) {
  console.log(current.value); // Print the value of the current node
  current = current.next;     // Move to the next node
}
// Output: 1, 2, 3
