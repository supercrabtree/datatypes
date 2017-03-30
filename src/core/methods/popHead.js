function popHead() {
    if (this.size === 0) {
        throw new Error('cannot remove element from an empty linked list');
    }
    var item = this.headNode.item;
    this.headNode = this.headNode.next;
    this.size--;
    return item;
}

export default popHead;
