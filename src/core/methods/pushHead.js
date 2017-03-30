function pushHead(item) {
    this.firstNode = this.createNode(item, this.firstNode);
    this.size++;
}

export default pushHead;
