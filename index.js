function getName(node) {
    return node.name;
}

function next(node, collection){
    let nextAddress = node.next
    return collection[nextAddress]
}

function headNode(linkedList, collection){
    return collection[linkedList]
}

function nodeAt(index, linkedList, collection){
    let currentNode = headNode(linkedList, collection)
    for(let i = 0; i < index; i++){
        currentNode = next(currentNode, collection)
    }
    return currentNode
}

function indexAt(node, collection, linkedList){
    let currentNode = headNode(linkedList, collection)
    let currentIndex = 0
    while(currentNode != node){
        currentIndex++
        currentNode = next(currentNode, collection)
    }
    return currentIndex
}

function addressAt(index, linkedList, collection){
    if(index == 0) {
        return linkedList
    } else {
        let node = nodeAt(index-1, linkedList, collection)
        return node.next
    }
}

function insertNodeAt(index, address, linkedList, collection){
    let newNode = collection[address];

    newNode.next = addressAt(index, linkedList, collection)

    nodeAt(index - 1, linkedList, collection).next = address
}

function deleteNodeAt(index, linkedList, collection){
    let previousNode = nodeAt(index - 1, linkedList, collection)
    let currentNode = nodeAt(index, linkedList, collection)
    previousNode.next = currentNode.next

}