console.log('script sourced.')

$(document).ready(onReady);

function onReady() {
    console.log('document ready.');
    $('.operatorButton').on('click', changeType);
    $('.numberButtonOne').on('click', changeNumberOne);
    $('.numberButtonTwo').on('click', changeNumberTwo);
    $('.equalsButton').on('click', calculateNumbers);
    $('#clearButton').on('click', resetCalculator)
}

var type = 'testType';
var numberOne = 'testNumberOne';
var numberTwo = 'testNumberTwo'

function changeType() {
    type = $(this).data().type;
    $('#operatorInput').text($(this).text());
    console.log(type);
}

function changeNumberOne() {
    numberOne = parseInt($(this).data().number);
    $('#numberOneInput').append(numberOne);
    numberOne = parseInt($('#numberOneInput').text());
    console.log(numberOne);
}

function changeNumberTwo() {
    numberTwo = parseInt($(this).data().number);
    $('#numberTwoInput').append(numberTwo);
    numberTwo = parseInt($('#numberTwoInput').text());
    console.log(numberTwo);
}

//Click handler for calculate button
function calculateNumbers() {
    //Create object with numbers/operator entered
    console.log('in calculateNumbers');
    console.log('number 1:', numberOne, 'number 2:', numberTwo);
    var calculationVariables = {
        numberOne: numberOne,
        type: type,
        numberTwo: numberTwo
    }
    //POST
    $.ajax({
        method: 'POST',
        url: '/calculate',
        data: calculationVariables
    //Appends result from server to DOM
    }).done(function(response) {
        console.log('Success!')
        $('#result').text(response);
    }).fail(function(message) {
        console.log('Error', status)
    });
    //Clear fields
    
}

//Clear button; resets inputs and result to empty
 function resetCalculator() {
    $('#numberOneInput').text('');
    $('#operatorInput').text('');
    $('#numberTwoInput').text('');
    $('#result').text('');
 }
