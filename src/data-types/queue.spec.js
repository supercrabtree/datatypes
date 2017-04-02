import test from 'ava';
import createQueue from './queue';

test('factory function creates an object with the correct signature', t => {
    const queue = createQueue();

    let numProps = 0;
    for (let p in queue) {
        numProps++;
    }

    t.is(numProps, 3);
    t.is(typeof queue.enqueue, 'function');
    t.is(typeof queue.dequeue, 'function');
    t.is(typeof queue.size, 'number');
    t.is(typeof queue[Symbol.iterator], 'function');
});

test('functional', t => {
    const queue = createQueue();

    queue.enqueue('hat');
    queue.enqueue('cow');
    queue.enqueue('goat');
    queue.dequeue();
    queue.enqueue('mouse');
    queue.dequeue();

    let result = '';
    for (let item of queue) {
        result += item;
    }

    const expected = 'goatmouse';

    t.is(result, expected);
});
