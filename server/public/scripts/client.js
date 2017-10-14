console.log('script sourced.')

$(document).ready(onReady);

function onReady() {
    console.log('document ready.');
    $('#calculateButton').on('click', calculateNumbers);
    $('#addButton').on('click', changeType);
    $('#subtractButton').on('click', changeType);
    $('#multiplyButton').on('click', changeType);
    $('#divideButton').on('click', changeType);
}

var type = 'test';
//Click handlers for operator buttons; change 'type' to type of operator clicked

function changeType() {
    type = $(this).data().type;
}

//Click handler for calculate button; create object with numbers/operator entered
//and post it to the server
function calculateNumbers() {
    var calculationVariables = {
        numberOne: $('#numberOne').val(),
        type: type,
        numberTwo: $('#numberTwo').val()
    }
    console.log('in calculateNumbers');
    console.log(type);
    console.log(calculationVariables);

    $.ajax({
        method: 'POST',
        url: '/calculate',
        data: calculationVariables
    }).done(function(response) {
        console.log('Success!')
        $('.main').append(response);
    }).fail(function(message) {
        console.log('Error', status)
    });
}

//Idea: do a click handler for each button, assign a variable to true or false 
//inside that function
//And then whichever button was clicked it will be something like 
//"operatorClicked === true"
//
