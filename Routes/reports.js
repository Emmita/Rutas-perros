var Report = require('../models/report');
var express = require('express');
var mongoose = require('mongoose');
var fs = require('fs');
mongoose.connect('mongodb://localhost:27017/mydb');

var router = express.Router();



var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection wrror;'));
db.once('open', function(){

});

var PerroSchema = mongoose.Schema({
	name: String,
	raza: String,
	edad: String
});

var Perro = mongoose.model('Perro', PerroSchema);




router.route('/reports').get(function(req, res){

	var content;

			fs.readFile('./Routes/output.json', 'utf-8', function(err, data){

				content = data;

		 	console.log('File successfuly read!');


			res.json(content);

		});

});

router.route('/reports/:id').get(function(req, res){
	res.json({id: 0});
})

router.route('/perros').get(function(req, res){
	console.log('si se metio');
	Perro.find(function(err, perros){
	if(err) return console.error(err);
	res.json(perros);
	console.log(perros);
})
})

module.exports = router; 