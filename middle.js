/*
Middle of a list
Write an algorithm to find the middle element of a linked list. Note You may be tempted to add a length property to your linked list class. The length property is not a typical property of linked list, therefore don't make any modification to the linked list class that is provided to you. Also, finding the size of the linked list using the size() function and dividing it by half will not find the correct middle of the linked list. So, don't use either of these approaches.
*/

/*
1. Have two different pointers - slow and fast
2. Slow pointer moves on node at a time
3. Fast pointer moves two nodes at a time
4. When fast pointer gets to end of the list, the slow pointer will be at the middle
*/

const LinkedList = require('./LinkedList');

const LL = new LinkedList();
// LL.insertFirst(4);
LL.insertFirst(3);
LL.insertFirst(2);
// LL.insertFirst(1)
// LL.insertLast(5);

LL.printListData();

function middle(ll) {
  // start both pointers at head
  let fast = ll.head;
  let slow = ll.head;

  // loop through; as long as fast is not null and next node is not null; once fast node is null and/or next node is null, fast pointer has reached the end of the list
  while(fast && fast.next) {
    // slow pointer moves one at a time
    slow = slow.next;
    // fast pointer moves two at at time
    fast = fast.next.next;
  }
  // return slow pointer at middle of list
  return slow;
}

console.log(middle(LL));


