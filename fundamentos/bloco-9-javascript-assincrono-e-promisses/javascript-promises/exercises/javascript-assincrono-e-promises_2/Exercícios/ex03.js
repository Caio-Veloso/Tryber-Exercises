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
    .then(array => array.reduce((acc, curr) => curr + acc, 0)) // ex 5
    .catch(()=> console.log('É mais de oito mil! Essa promise deve estar quebrada!')); // ex 4
    }
    
    fetchPromise() 
