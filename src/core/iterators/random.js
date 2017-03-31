function random() {

    const items = [];
    const itemsInRandomOrder = [];
    let node = this.headNode;

    while (node) {
        items.push(node.item);
        node = node.next;
    }

    while (items.length) {
        const randomIndex = Math.floor(Math.random() * items.length);
        const randomElement = items.splice(randomIndex, 1);
        itemsInRandomOrder.push(randomElement);
    }

    let counter = 0;

    return {
        next: function () {

            const done = counter === itemsInRandomOrder.length;

            if (done) {
                return {done};
            }
            else {
                const value = itemsInRandomOrder[counter];
                counter++;

                return {done, value};
            }
        }
    }
}

export default random;
