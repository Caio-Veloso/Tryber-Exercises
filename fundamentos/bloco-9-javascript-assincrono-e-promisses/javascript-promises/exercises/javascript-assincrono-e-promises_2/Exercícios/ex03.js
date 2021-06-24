 const fetchPromise = () => {

    const promiseNumber = new Promise((resolve, reject)=> {
        //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
      const randomNumbers = [...Array(10)].map(()=> { 
            return	Math.pow((Math.floor(Math.random() * (50-1) + 1)), 2);
         
        }).reduce((accumalator, currentElemnt)=> accumalator + currentElemnt, 0)
        console.log(randomNumbers);
        
        (randomNumbers < 8000) ? resolve(randomNumbers) : reject();
    
    
    });
    
    promiseNumber
    .then(randomNumbers => [2, 3, 5, 10].map(number => randomNumbers / number))
    .catch(()=> console.log('Promise rejeitada'));
    }
    
    fetchPromise() 
