//2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const checkNumber = (betNumber, randomNumber) => betNumber === randomNumber;

const numbersDraw = (betNumber, callback) => {
  let randomNumber = Math.floor((Math.random() * 5) + 1);
  callback(betNumber, randomNumber);
	if (callback(betNumber, randomNumber) === true) {
		return betNumber, 'Parabéns';
	} else {
		return 'Tente novamente'
	}
};

console.log(numbersDraw(3, checkNumber));
