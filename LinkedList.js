const Node = require('./NodeClass');

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	// Insert first node
	insertFirst(data) {
		this.head = new Node(data, this.head);
		this.size++;
	}

	// Insert last node
	insertLast(data) {
		let node = new Node(data);
		let current;

		// if empty, make head
		if (!this.head) {
			this.head = node;
		} else {
			current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = node;
		}
		this.size++;
	}

	// Insert at Index
	insertAt(data, index) {
		// if index is out of range
		if (index > 0 && index > this.size) {
			return;
		}

		// if first index
		if (index === 0) {
			this.head = new Node(data, this.head);
			return;
		}

		const node = new Node(data);
		let current, previous;

		// set current to first
		current = this.head;
		let count = 0;

		while (count < index) {
			previous = current; // Node before index
			count++;
			current = current.next; // Node after index
		}

		node.next = current;
		previous.next = node;

		this.size++;
	}

	// get at index
	getAt(index) {
		let current = this.head;
		let count = 0;

		if (index < 0 || index >= this.size) {
			console.log('Index does not exist');
			return null;
		}

		while (current) {
			if (count === index) {
				console.log(current.data);
			}
			count++;
			current = current.next;
		}
	}

	// remove head
	removeHead() {
		this.head = this.head.next;
		this.size--;
	}

	// remove at index
	removeAt(index) {
		if (index > 0 && index > this.size) {
			return;
		}

		let current = this.head;
		let previous;
		let count = 0;

		// remove first
		if (index === 0) {
			this.head = current.next;
		} else {
			while (count < index) {
				count++;
				previous = current;
				current = current.next;
			}
			previous.next = current.next;
		}
		this.size--;
	}

	// remove item
	removeItem(data) {
		// if list is empty
		if (!this.head) {
			return null;
		}

		// if node to be removed is head, make next node head
		if (this.head.data === data) {
			this.head = this.head.next;
			return;
		}

		// start at head
		let current = this.head;
		// keep track of previous
		let previous = this.head;

		while (current !== null && current.data !== data) {
			previous = current;
			current = current.next;
		}
		if (current === null) {
			console.log('Data not found');
			return;
		}
		previous.next = current.next;
		this.size--;
	}

	// find last node in list
	// need to loop through until next is equal to null
	findLast() {
		let current = this.head;
		let previous = this.head;
		let count = 0;

		while (current.next !== null) {
			previous = current;
			current = current.next;
			count++;
			console.log(count);

			if (current.next === null) {
				console.log(current.data);
				return;
			}
		}
	}

  // reverse the list - NOT FUNCTIONAL
  reverse() {
    let prev = null;
    let next = null;
    let head = this.head;

    while (head !== null) {
      next = head.next;
      head.next = prev;
      prev = head;
      head = next;
    }
    return prev;
  }

	// Print list data
	printListData() {
		// let current = this.head;

		// while (current) {
		// 	console.log(current.data);
		// 	current = current.next;
		// }
		let output = '';
		let current = this.head;

		while (current) {
			output = `${output} ${current.data} ->`;
			current = current.next;
		}
		console.log(`${output} null`);
	}

	// Print list size
	printSize() {
		let size = this.size;
		console.log(`Size: ${size}`);
	}

	// is list empty?
	// need to loop through, if this.head is equal to null then the list is empty; else print the list
	isEmpty() {
		let current = this.head;
		if (current === null) {
			console.log('The list is empty');
			return;
		} else {
			this.printListData();
		}
	}

	// clear list
	clearList() {
		this.head = null;
		this.size = 0;
		console.log('your list has been cleared');
	}
}

module.exports = LinkedList;

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertAt(500, 10);

// ll.clearList();

// console.log(ll.size);
// ll.removeAt(10)
// ll.printListData();
// ll.getAt(10);
