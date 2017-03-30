function popHead() {
    var item = this.firstNode.item;
    this.firstNode = this.firstNode.next;
    this.size--;
    return item;
}

export default popHead;
