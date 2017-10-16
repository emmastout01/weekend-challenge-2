var express = require('express');
var app = express();
var port = 5000;
var bodyParser = require('body-parser');
var logic = require('./modules/logic.js');
var calculateRouter = require('./routes/calculate_router.js')

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/calculate', calculateRouter);



app.listen(port, function(){
    console.log('listening on port', port);
});