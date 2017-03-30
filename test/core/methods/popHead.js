import test from 'ava';
import {popHead} from '../../../src/core/methods';
import createNode from '../../../src/core/node';

const createMockLinkedList = () => ({
    createNode,
    size: 2,
    firstNode: {item: 'boat', next: {item: 'beach', next: {}}}
});

test('popHead() should return first item from the linked list', t => {

    const linkedList = createMockLinkedList();

    const result = popHead.call(linkedList);
    const expected = 'boat';

    t.is(result, expected);
});

test('popHead() should set the firstNode to the popped nodes "next" property', t => {

    const linkedList = createMockLinkedList();

    popHead.call(linkedList);

    const result = linkedList.firstNode.item;
    const expected = 'beach';

    t.is(result, expected);
});

test('popHead() should decrement the linked list size', t => {

    const linkedList = createMockLinkedList();

    popHead.call(linkedList);

    const result = linkedList.size;
    const expected = 1;

    t.is(result, expected);
});

