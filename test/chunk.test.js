const chunkArray = require('./chunk');

test('Chunk marche-t-il', () => {
    let Arr = [1,2,3];
    expect(chunkArray(Arr,2)).toEqual([[1,2],[3]]);
})