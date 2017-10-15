var express = require('express');
var app = express();
var port = 5000;
var bodyParser = require('body-parser');
var logic = require('./modules/logic.js');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.post('/calculate', function(req,res){
    var numberOne = parseInt(req.body.numberOne);
    var numberTwo = parseInt(req.body.numberTwo);
    var type = req.body.type;
    var operator = req.body.operator;
    var result = logic(numberOne, numberTwo, type);
    var toSend = {
        numberOne: numberOne,
        numberTwo: numberTwo,
        operator: operator,
        result: result
    }
    res.send(toSend);
})


app.listen(port, function(){
    console.log('listening on port', port);
});