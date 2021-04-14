/*
Write an algorithm to reverse a linked list. The time complexity of your algorithm should be linear (O(n)). For this exercise, notice we are not asking you just to print the linked list in reverse or use another linked list to store the value in reverse order. Your program should reverse the direction of a given singly linked list. In other words, all pointers should point backward. BONUS: Solve this problem using both recursive and iterative algorithms.
*/

const LinkedList = require('./LinkedList');

const ll = new LinkedList();
ll.insertFirst(6);
ll.insertFirst(5);
ll.insertLast(7);

// console.log(ll);

function reverseList(head) {
	let prev = null;
	let next = null;
  console.log(head);

	while (head !== null) {
		next = head.next;
		head.next = prev;
		prev = head;
		head = next;
	}
	return prev;
}

console.log(reverseList(ll));


