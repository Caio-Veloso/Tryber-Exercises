const {sum} = require('./ex01');

describe('Verificação da função sum', ()=> {
  test('testar se é função', ()=> {
      expect(typeof sum).toBe('function');
  });
  test('testar se o retorno de sum(4, 5) é 9', ()=> {
      expect(sum(4, 5)).toBe(9);
  })
  test('testar se o retorno de sum(0, 0) é 0', ()=> {
      expect(sum(0, 0)).toBe(0);
  })
  test('testar se o retorno de sum(4,5) é 9', ()=> {
      expect(sum(4,5)).toBe(9);
  })
	test('testar se lança erro com sum(4, "5")', ()=> {
		expect(()=> {sum(4, '5')}).toThrow()
	})
	test('testar se lança a msg de erro com sum(4, "5")', ()=> {
			expect(()=> {sum(4, '5')}).toThrowError(new Error('parameters must be numbers'))
	})
})