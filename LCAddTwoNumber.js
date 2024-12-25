class ListNode {
	constructor(val, next = null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

var addTwoNumbers = function (l1, l2) {
	let dummy = new ListNode();
	let res = dummy;
	let total = 0,
		carry = 0;

	
	while (l1 || l2 || carry) {
		total = carry;

		if (l1) {
			total += l1.val;
			l1 = l1.next;
		}

		if (l2) {
			total += l2.val;
			l2 = l2.next;
		}
        console.log(total)

		let num = total % 10;
		carry = Math.floor(total / 10);
		dummy.next = new ListNode(num);
		dummy = dummy.next;
	}

	return res.next;
};

const l1 = new ListNode(2, new ListNode(4, new ListNode(3))); // 342
const l2 = new ListNode(5, new ListNode(6, new ListNode(4))); // 465

const result = addTwoNumbers(l1, l2);

// console.log(result);