import test from 'ava';
import createRandomBag from './randomBag';

test('factory function creates an object with the correct signature', t => {
    const randomBag = createRandomBag();

    let numProps = 0;
    for (let p in randomBag) {
        numProps++;
    }

    t.is(numProps, 2);
    t.is(typeof randomBag.add, 'function');
    t.is(typeof randomBag.size, 'number');
    t.is(typeof randomBag[Symbol.iterator], 'function');
});

test('functional', t => {
    const randomBag = createRandomBag();

    randomBag.add('hat');
    randomBag.add('cow');
    randomBag.add('goat');
    randomBag.add('tree');
    randomBag.add('mouse');
    randomBag.add('cat');

    let result1 = '';
    for (let item of randomBag) {
        result1 += item;
    }

    let result2 = '';
    for (let item of randomBag) {
        result2 += item;
    }

    let result3 = '';
    for (let item of randomBag) {
        result3 += item;
    }

    t.is(result1 === result2, false);
    t.is(result2 === result3, false);
    t.is(result3 === result1, false);
});
