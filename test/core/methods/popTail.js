import test from 'ava';
import {popTail} from '../../../src/core/methods';
import {createNode} from '../../../src/core/nodes';

function createLinkedList() {
    const tailNode = {item: 'beach', next: {}};
    return {
        createNode,
        size: 3,
        tailNode,
        headNode: {item: 'boat', next: {item: 'sand', next: tailNode}}
    };
}

test('should return tail item from the linked list', t => {

    const linkedList = createLinkedList();

    const result = popTail.call(linkedList);
    const expected = 'beach';

    t.is(result, expected);
});

test('should set the tailNode to the node before the previous tailNode', t => {

    const linkedList = createLinkedList();

    popTail.call(linkedList);

    const result = linkedList.tailNode.item;
    const expected = 'sand';

    t.is(result, expected);
});

test('should decrement the linked list size', t => {

    const linkedList = createLinkedList();

    popTail.call(linkedList);

    const result = linkedList.size;
    const expected = 2;

    t.is(result, expected);
});

test('when called on a linked list with one item should set headNode and tailNode to undefined', t => {

    const linkedList = {
        headNode: {item: 'hat', next: {}},
        size: 1
    };

    popTail.call(linkedList);

    t.is(linkedList.headNode, undefined);
    t.is(linkedList.tailNode, undefined);
});

test('when called on an empty linked list should throw', t => {
    const linkedList = {size: 0};

    try {
        popTail.call(linkedList);
    } catch (error) {
        t.is(error.message, 'cannot remove element from an empty linked list');
    }
});
