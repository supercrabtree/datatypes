function pushTail(item) {

    const newTailNode = this.createNode(item);

    if (this.size === 0) {
        this.headNode = this.tailNode = newTailNode;
    }
    else {
        this.tailNode.next = newTailNode;
        this.tailNode = newTailNode;
    }

    this.size++;
}

export default pushTail;
