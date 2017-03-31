import {pushHead as add} from '../core/methods';
import {createNode} from '../core/nodes';
import {random} from '../core/iterators';

function createRandomBag() {

    const bag = {
        add,
        createNode,
        size: 0,
        [Symbol.iterator]: random
    };

    return {
        add: add.bind(bag),
        get size() {
            return bag.size;
        },
        [Symbol.iterator]: random.bind(bag)
    }
}

export default createRandomBag;
