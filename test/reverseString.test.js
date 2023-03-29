const reverseString = require('./reverseString');

test('reverseString marche-t-il', () => {
    let K = 'KAYAK';
    expect(reverseString(K)).toEqual('kayak');
})