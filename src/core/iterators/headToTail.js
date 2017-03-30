function headToTail() {

    let currentNode = this.headNode;

    return {
        next: function () {

            let value;
            const done = currentNode === undefined;

            if (!done) {
                value = currentNode.item;
                currentNode = currentNode.next;
            }

            return {done, value};
        }
    }
}

export default headToTail;
