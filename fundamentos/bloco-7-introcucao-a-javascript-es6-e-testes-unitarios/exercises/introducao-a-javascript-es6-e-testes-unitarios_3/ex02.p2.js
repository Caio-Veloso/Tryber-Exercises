const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (arrayWords) => {
const output = [];
for (let index =0 ; index < arrayWords.length; index += 1 ) {
    output.push(arrayWords[index].length);
}
return output;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);