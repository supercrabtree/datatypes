import test from 'ava';
import {pushHead} from '../../../src/core/methods';
import {createNode} from '../../../src/core/nodes';

const createLinkedList = () => ({
    createNode,
    size: 1,
    firstNode: {item: 'car', next: {}}
});

test('pushHead() should add new items to beginning of the linked list', t => {

    const linkedList = createLinkedList();

    pushHead.call(linkedList, 'truck');

    const result = linkedList.firstNode.item;
    const expected = 'truck';

    t.is(result, expected);
});

test('pushHead() should increment the linked list size', t => {

    const linkedList = createLinkedList();

    pushHead.call(linkedList, 'truck');

    const result = linkedList.size;
    const expected = 2;

    t.is(result, expected);
});

