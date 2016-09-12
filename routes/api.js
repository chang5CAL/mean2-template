var express = require('express');
var router = express.Router();

var Models = require('../models')

/* Simple find */
router.get('/find/:name', function(req, res, next) {
	// params: obtain route information such as above :name
	// query: contains parameter from URL /find?name=example
	var query = Models.Kitten.findOne({'name': req.params.name});
	query.exec(function(err, kitten) {
		if (err) return handleError(err);
		res.json(kitten);
	});
});

router.get('/findAll', function(req, res, next) {
	Models.Kitten.find(function(err, kittens) {
		if (err) return handleError(err);		
		res.json(kittens);
	});
});

/* Simple POST */
router.post('/create', function(req, res, next) {
	// req.body.<parameter-name> for post requests
	var cat = new Models.Kitten({name: req.body.name});
	cat.save(function(err, kitty) {
		if (err) return console.error(err);
  		res.json(kitty);
	});
});

module.exports = router;
