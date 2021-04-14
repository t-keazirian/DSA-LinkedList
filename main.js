const LinkedList = require('./LinkedList');

function main() {
  const SLL = new LinkedList();
  SLL.insertFirst('Apollo');
  SLL.insertFirst('Boomer')
  SLL.insertFirst('Helo')
  SLL.insertFirst('Husker')
  SLL.insertLast('Starbuck')
  SLL.insertFirst('Tauhida')
  SLL.removeItem('Husker');
  SLL.insertAt('Kat', 2)
  // SLL.removeItem('Tauhida')
  // SLL.removeHead();
  // SLL.reverse();
  SLL.printListData();
  // SLL.getAt(4)
  // SLL.findLast();
  // SLL.printSize();
  // SLL.isEmpty();
}

main();




