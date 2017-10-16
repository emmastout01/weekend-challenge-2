var express = require ('express');
var router = express.Router();
var logic = require ('../modules/logic.js')

router.post('/', function(req,res){
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





module.exports = router;