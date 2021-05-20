
function insertStates () {
    const getSelect = document.getElementById('input-estado');
    const allStates = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF'];
    for (let index = 0; index < allStates.length; index += 1) {
        let statesOptions = document.createElement('option');
        getSelect.appendChild(statesOptions).innerText = allStates[index];
        getSelect.appendChild(statesOptions).value = allStates[index];


    }
}

insertStates();