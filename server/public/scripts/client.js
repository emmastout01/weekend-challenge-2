console.log('script sourced.')

$(document).ready(onReady);

function onReady() {
    console.log('document ready.');
    $('#addButton').on('click', changeType);
    $('#subtractButton').on('click', changeType);
    $('#multiplyButton').on('click', changeType);
    $('#divideButton').on('click', changeType);
    $('#calculateButton').on('click', calculateNumbers);
    $('#clearButton').on('click', resetCalculator)
}

var type = 'test';

function changeType() {
    type = $(this).data().type;
}

//Click handler for calculate button
function calculateNumbers() {
    //Create object with numbers/operator entered
    var calculationVariables = {
        numberOne: $('#numberOne').val(),
        type: type,
        numberTwo: $('#numberTwo').val()
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
}

function resetCalculator() {
    $('#numberOne').val('');
    $('#numberTwo').val('');
    $('#numberOne').focus();

}
