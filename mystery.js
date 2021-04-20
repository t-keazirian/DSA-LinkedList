/*
Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve. What is the time complexity of this algorithm?
*/

// takes in a linked list
// declares current as the head
//  while current (aka head) is not null, let newNode = current (head?)
//  while the new Node's next is not null aka there are still nodes ahead of it, if the new Node's next value is equal to the current node's value, then new Node's next = newNode's next next?


function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}
