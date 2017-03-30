function pushHead(item) {
    this.headNode = this.createNode(item, this.headNode);
    this.size++;
}

export default pushHead;
