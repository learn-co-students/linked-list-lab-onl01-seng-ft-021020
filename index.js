function getName(node) {
  return node.name;
}

function headNode(linkedList, collection) {
  return collection[linkedList];
}

function next(node, collection) {
  let pointer = node.next;
  return collection[pointer];
}

function nodeAt(index, pointer, collection) {
  let node = collection[pointer];
  for (let i = 0; i < index; i++) {
    node = collection[node.next];
  }
  return node;
}

function addressAt(index, pointer, collection) {
  let address = pointer;
  if (index > 0) {
    address = nodeAt(index - 1, pointer, collection).next;
  }
  return address;
}

function indexAt(node, collection, pointer) {
  let head = headNode(pointer, collection);
  let index = 0;
  while (getName(node) !== getName(head)) {
    head = next(head, collection);
    index++;
  }

  return index;
}

function insertNodeAt(index, newPointer, head, collection) {
  let prevIndex = index > 0 ? index - 1 : 0;
  let prevNode = nodeAt(prevIndex, head, collection);
  let newNode = collection[newPointer];
  newNode.next = addressAt(index, head, collection);
  prevNode.next = newPointer;
}

function deleteNodeAt(index, head, collection) {
  let prevIndex = index > 0 ? index - 1 : 0
  let prevNode = nodeAt(prevIndex, head, collection)
  prevNode.next = addressAt(index + 1, head, collection);

}
