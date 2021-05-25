class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		this.head = new Node(data, this.head);
	}

	insertLast(data) {
		const node = new Node(data);
		let current = this.head;

		if (!current) {
			this.head = node;
		} else {
			while (current) {
				current = current.next;
			}
			current.next = node;
		}
	}

	find(data) {
		let current = this.head;

		if (!current) {
			console.log('Data not found');
		}

		while (current.data !== data) {
			if (current === null) {
				console.log('Data not found');
			} else {
				current = current.next;
			}
		}
		return current;
	}

	remove(data) {
		let prevPointer = this.head;
		let currentPointer = this.head;

		if (!this.head) {
			return null;
		}

		if (this.head.data === data) {
			this.head = this.head.next;
			return;
		}

    while (currentPointer !== null && currentPointer.data !== data) {
      prevPointer = currentPointer;
      currentPointer = currentPointer.next
    }
    if (currentPointer === null) {
      console.log('Data not found');
    } else {
      prevPointer.next = currentPointer.next
    }
	}
}
