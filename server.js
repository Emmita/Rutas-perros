var express = require('express');
var bodyParser = require('body-parser');
var mogoose = require('mongoose');
var reports = require('./Routes/reports');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api', reports);

var port  = process.env.PORT || 3000;

/*
var router = express.Router();

router.get("/", function(req, res){
	res.json({message: 'Hi everybody...!'})
});

app.use('/api', router);
*/

app.listen(port);
console.log('Server listenign in the port: ' +port);