function headToTail() {

    let currentNode = this.headNode;

    return {
        next: function () {
            const done = currentNode.next === undefined;
            const value = currentNode.item;

            currentNode = currentNode.next;

            return {done, value};
        }
    }
}

export default headToTail;
