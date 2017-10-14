var express = require('express');
var app = express();
var port = 5000;
var bodyParser = require('body-parser');
var logic = require('./modules/logic.js');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.post('/calculate', function(req,res){
    console.log('logging data', req.body);
    var numberOne = parseInt(req.body.numberOne);
    var numberTwo = parseInt(req.body.numberTwo);
    var operator = req.body.type;
    var result = logic(numberOne, numberTwo, operator);
    res.send(String(result));
})


app.listen(port, function(){
    console.log('listening on port', port);
});