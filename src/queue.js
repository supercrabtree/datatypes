import {pushTail as enqueue} from './core/methods';
import {popHead as dequeue} from './core/methods';
import {createNode} from './core/nodes';
import {headToTail} from './core/iterators';

function createQueue() {

    const queue = {
        enqueue,
        dequeue,
        createNode,
        size: 0,
        [Symbol.iterator]: headToTail
    };

    return {
        dequeue: dequeue.bind(queue),
        enqueue: enqueue.bind(queue),
        get size() {
            return queue.size;
        },
        [Symbol.iterator]: headToTail.bind(queue)
    }
}

