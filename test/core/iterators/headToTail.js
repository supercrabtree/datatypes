import test from 'ava';
import {headToTail} from '../../../src/core/iterators';


test('should loop over a objects linked list in head to tail order', t => {

    const dataStructure = {
        [Symbol.iterator]: headToTail,
        headNode: {
            item: 'boat',
            next: {
                item: 'beach',
                next: {
                    item: 'suncream',
                    next: ''
                }
            }
        }
    };

    let result = '';

    for (let item of dataStructure) {
        result += `${item}.`;
    }

    const expected = 'boat.beach.suncream.';

    t.is(result, expected);
});
