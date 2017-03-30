import {pushHead as add} from './core/methods';
import {createNode} from './core/nodes';
import {headToTail} from './core/iterators';

function createBag() {

    const bag = {
        add,
        createNode,
        size: 0,
        [Symbol.iterator]: headToTail
    };

    return {
        add: add.bind(bag),
        get size() {
            return bag.size;
        },
        [Symbol.iterator]: headToTail.bind(bag)
    }
}

export default createBag;
