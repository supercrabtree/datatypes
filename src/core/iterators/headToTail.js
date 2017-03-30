function headToTail() {

    let currentNode = this.headNode;

    return {
        next: function () {

            const done = currentNode === undefined;

            if (done) {
                return {done};
            }
            else {
                const value = currentNode.item;
                currentNode = currentNode.next;

                return {done, value};
            }
        }
    }
}

export default headToTail;
