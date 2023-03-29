const isAnagram = require('./anagram');

test('Anagram marche-t-il', () => {
    let K = 'KAYAK';
    let J = 'KAAYK';
    expect(isAnagram(K,J)).toBe(true);
})