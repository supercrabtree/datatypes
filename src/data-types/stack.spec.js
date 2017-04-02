import test from 'ava';
import createStack from './stack';

test('factory function creates an object with the correct signature', t => {
    const stack = createStack();

    let numProps = 0;
    for (let p in stack) {
        numProps++;
    }

    t.is(numProps, 3);
    t.is(typeof stack.pop, 'function');
    t.is(typeof stack.push, 'function');
    t.is(typeof stack.size, 'number');
    t.is(typeof stack[Symbol.iterator], 'function');
});

test('functional', t => {
    const stack = createStack();

    stack.push('hat');
    stack.push('cow');
    stack.push('goat');
    stack.pop();
    stack.push('mouse');
    stack.push('tree');
    stack.pop();

    let result = '';
    for (let item of stack) {
        result += item;
    }

    const expected = 'mousecowhat';

    t.is(result, expected);
});
