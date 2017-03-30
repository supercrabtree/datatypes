function createNode(item, next) {

    const node = {};

    if (item !== undefined) {
        node.item = item;
    }

    if (next !== undefined) {
        node.next = next;
    }

    return node;
}

export default createNode;
