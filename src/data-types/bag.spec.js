import test from 'ava';
import createBag from './bag';

test('factory function creates an object with the correct signature', t => {
    const bag = createBag();

    let numProps = 0;
    for (let p in bag) {
        numProps++;
    }

    t.is(numProps, 2);
    t.is(typeof bag.add, 'function');
    t.is(typeof bag.size, 'number');
    t.is(typeof bag[Symbol.iterator], 'function');
});

test('functional', t => {
    const bag = createBag();

    bag.add('hat');
    bag.add('cow');
    bag.add('goat');

    let result = '';
    for (let item of bag) {
        result += item;
    }

    const expected = 'goatcowhat';

    t.is(result, expected);
});
