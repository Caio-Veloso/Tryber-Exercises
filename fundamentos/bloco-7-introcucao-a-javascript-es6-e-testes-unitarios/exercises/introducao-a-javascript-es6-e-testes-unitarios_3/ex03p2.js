const assert = require('assert');
// escreva a função sumAllNumbers aqui
let sumAllNumbers = (numbers) => {
sumAllNumbers = numbers.reduce((sumAllNumbers, currentElement) => sumAllNumbers +currentElement);
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);