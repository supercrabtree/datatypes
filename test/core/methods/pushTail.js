import test from 'ava';
import {pushTail} from '../../../src/core/methods';
import {createNode} from '../../../src/core/nodes';

function createLinkedList() {
    const tailNode = {item: 'beach', next: {}};
    return {
        createNode,
        size: 2,
        tailNode,
        headNode: {item: 'boat', next: tailNode}
    };
}

test('should add new items to end of the linked list', t => {

    const linkedList = createLinkedList();

    pushTail.call(linkedList, 'truck');

    const result = linkedList.tailNode.item;
    const expected = 'truck';

    t.is(result, expected);
});

test('should increment the linked list size', t => {

    const linkedList = createLinkedList();

    pushTail.call(linkedList, 'truck');

    const result = linkedList.size;
    const expected = 3;

    t.is(result, expected);
});

