function popHead() {
    var item = this.headNode.item;
    this.headNode = this.headNode.next;
    this.size--;
    return item;
}

export default popHead;
