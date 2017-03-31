import test from 'ava';
import {headToTail} from './';


test('should loop over a objects linked list in head to tail order', t => {

    const dataStructure = {
        [Symbol.iterator]: headToTail,
        headNode: {
            item: 'boat',
            next: {
                item: 'beach',
                next: {
                    item: 'suncream',
                    next: undefined
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

