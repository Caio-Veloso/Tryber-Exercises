const {test, expect, it, describe} = require('@jest/globals');
const {sum, myRemove} = require('./ex01')

describe('Verificação da função sum()', ()=> {
  it('confirmar se é função', ()=>{
    expect(typeof sum).toBe('function');
  })
	it('testar se o retorno de 4 e 5 é 9 ', ()=> {
		expect(sum(4 ,5)).toBe(9);
	})
	it('testar se o retorno de 0 e 0 é 0', ()=> {
		expect(sum(0 ,0)).toBe(0);
	})
	it('testar se a função lança erro quando os parâmetros são 4 e "5" ', ()=>{
		expect(()=>{sum(4, '5')}).toThrow();
	})
	it('testar se a função lança erro quando os parâmetros são 4 e "5" ', ()=>{
		expect(()=>{sum(4, '5')}).toThrowError(new Error('parameters must be numbers'));
	})  
})

describe('verficação da função myRemove', ()=> {
	it('Confirmar se é função', ()=> {
		expect(typeof myRemove).toBe('function');
	})
	it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', ()=> {
		expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
	});
	it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', ()=> {
		expect(myRemove([1, 2, 3, 4], 5)).toEqual([1,2,3,4]);
	})
})