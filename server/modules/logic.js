function logic(first, second, typeOfOperator) {
    if (operator === 'add') {
        return Math.round((numberOne + numberTwo)*1000)/1000;
    } else if (operator === 'subtract') {
        return Math.round((numberOne - numberTwo)*1000)/1000;
    } else if (operator === 'multiply') {
        return Math.round((numberOne * numberTwo)*1000)/1000;
    } else if (operator === 'divide') {
        return Math.round((numberOne / numberTwo)*1000)/1000;
    }


}


module.exports = logic;