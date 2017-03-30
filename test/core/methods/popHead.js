import test from 'ava';
import {popHead} from '../../../src/core/methods';
import {createNode} from '../../../src/core/nodes';

const createLinkedList = () => ({
    createNode,
    size: 2,
    headNode: {item: 'boat', next: {item: 'beach', next: {}}}
});

test('should return first item from the linked list', t => {

    const linkedList = createLinkedList();

    const result = popHead.call(linkedList);
    const expected = 'boat';

    t.is(result, expected);
});

test('should set the headNode to the popped nodes "next" property', t => {

    const linkedList = createLinkedList();

    popHead.call(linkedList);

    const result = linkedList.headNode.item;
    const expected = 'beach';

    t.is(result, expected);
});

test('should decrement the linked list size', t => {

    const linkedList = createLinkedList();

    popHead.call(linkedList);

    const result = linkedList.size;
    const expected = 1;

    t.is(result, expected);
});

test('when called on an empty linked list should throw', t => {

    const linkedList = {size: 0};

    try {
        popHead.call(linkedList);
    } catch (error) {
        t.is(error.message, 'cannot remove element from an empty linked list');
    }
});

