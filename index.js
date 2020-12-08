function getName(node) {
    return node["name"]
}

function headNode(linkedList, collection) {
    return collection[linkedList]
}

function next(head, collection) {
    return headNode(head["next"], collection)
}

function nodeAt(index, linkedList, collection) {
    let node = headNode(linkedList, collection)

    for (let i = 0; i < index; i++) {
        node = next(node, collection)
    }

    return node
}

function addressAt(index, linkedList, collection) {
    let address = linkedList

    for (let i = 0; i < index; i++) {
        address = nodeAt(i, address, collection)["next"]
    }

    return address
}

function indexAt(node, collection, linkedList) {
    let i = 0

    while (nodeAt(i, linkedList, collection) != node) {
        i++
    }

    return i
}

function insertNodeAt(index, address, linkedList, collection) {
    // if index is 2
    // node at index 1 will point to new address
    // new node will point to what was at index 1
    let newNode = collection[address];

    newNode["next"] = addressAt(index, linkedList, collection)

    nodeAt(index - 1, linkedList, collection)["next"] = address
}

function deleteNodeAt(index, linkedList, collection) {
    // if index is 2
    // node at index 1 will point to address at index 3
    nodeAt(index - 1, linkedList, collection).next = "asnan"
}