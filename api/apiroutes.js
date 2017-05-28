var express = require('express')
var apiRoutes = express.Router()

var portfolio = require('./mockdata/portfolio.json')
// var traveler = require('./mockdata/traveler.json')
var essay = require('./mockdata/essay.json')
// var design = require('./mockdata/design.json')
var gift = require('./mockdata/gift.json')
var about = require('./mockdata/about.json')

apiRoutes.get('/portfolio', function (req, res) {
	res.json(portfolio);
});

apiRoutes.get('/essay', function (req, res) {
	res.json(essay);
});

apiRoutes.get('/gift', function (req, res) {
	res.json(gift);
});

apiRoutes.get('/about', function (req, res) {
	res.json(about);
});

module.exports = apiRoutes;
