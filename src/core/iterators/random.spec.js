import test from 'ava';
import {random} from './';

test('should loop over a objects linked list in a random order', t => {

    const dataStructure = {
        [Symbol.iterator]: random,
        headNode: {
            item: 'boat',
            next: {
                item: 'beach',
                next: {
                    item: 'suncream',
                    next: {
                        item: 'hat',
                        next: undefined
                    }
                }
            }
        }
    };

    let asString = '';

    for (let item of dataStructure) {
        asString += `${item}.`;
    }

    const result1 = asString.indexOf('boat') > -1;
    const result2 = asString.indexOf('beach') > -1;
    const result3 = asString.indexOf('suncream') > -1;
    const result4 = asString.indexOf('hat') > -1;

    t.is(result1, true);
    t.is(result2, true);
    t.is(result3, true);
    t.is(result4, true);
});

