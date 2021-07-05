
const { lowestPopulation } = require('./countries');

test('Função lowestPopulation', () => {
	expect(typeof lowestPopulation).toBe('function');
})