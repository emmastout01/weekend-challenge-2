function logic(numberOne, numberTwo, operator) {
    console.log('in logic')
    if (operator === 'add') {
        return numberOne + numberTwo;
    } else if (operator === 'subtract') {
        return numberOne - numberTwo;
    } else if (operator === 'multiply') {
        return numberOne * numberTwo;
    } else if (operator === 'divide') {
        return numberOne / numberTwo;
    }
}


module.exports = logic;