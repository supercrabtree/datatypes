function popTail() {

    if (this.size === 0) {
        throw new Error('cannot remove element from an empty linked list');
    }

    let node = this.headNode;
    let previousNode = this.headNode;
    let item = node.item;

    while(node) {
        if (node.next && node.next.next) {
            previousNode = node;
        }
        if (node.next) {
            item = node.item;
        }
        node = node.next;
    }

    this.size--;

    if (this.size === 0) {
        this.headNode = this.tailNode = undefined;
    }
    else {
        previousNode.next = {};
        this.tailNode = previousNode;
    }

    return item;
}

export default popTail;
