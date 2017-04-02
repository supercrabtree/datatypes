import {pushHead as push} from '../core/methods';
import {popHead as pop} from '../core/methods';
import {createNode} from '../core/nodes';
import {headToTail} from '../core/iterators';

function createStack() {

    const stack = {
        pop,
        push,
        createNode,
        size: 0,
        [Symbol.iterator]: headToTail
    };

    return {
        pop: pop.bind(stack),
        push: push.bind(stack),
        get size() {
            return stack.size;
        },
        [Symbol.iterator]: headToTail.bind(stack)
    }
}

export default createStack;
