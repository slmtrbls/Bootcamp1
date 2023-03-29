const functions = require('./functions');

test('Adds 2 + 2 to equals 4', () => {
    expect(functions.add(2,2)).toBe(4);
});

test('Adds 1 + 2 to Not equals 4', () => {
    expect(functions.add(1,2)).not.toBe(4);
});

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

test('User should be Brad Mitchell', () => {
    expect(functions.createUSer()).toEqual({firstname: 'Brad', lastname: 'Mitchell'});
});

