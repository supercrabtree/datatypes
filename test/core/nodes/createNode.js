import test from 'ava';
import {createNode} from '../../../src/core/nodes';

test('when called without params should return a empty node', t => {

    const result = createNode();
    const expected = {
        item: undefined,
        next: undefined
    };

    t.deepEqual(result, expected);
});

test('when called with one param should set the node\'s "item" property to the first param', t => {

    const node = createNode('mouse');

    const result = node.item;
    const expected = 'mouse';

    t.is(result, expected);
});

test('when called with two params should set the node\'s "next" property to the second param', t => {

    const linkedList = {item: 'cat', next: undefined};

    const node = createNode('dog', linkedList);

    const result = node.next;
    const expected = linkedList;

    t.is(result, expected);
});
