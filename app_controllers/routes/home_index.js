var express = require('express');
var router = express.Router();
var request = require ('request');

var ctrlHome = require('../controllers/home');
var ctrlIbex = require('../controllers/ibex/ibex');
var ctrlAbertis = require('../controllers/ibex/abertis');

router.get('/',ctrlHome.home);
router.get('/ibex',ctrlIbex.ibex);
router.get('/ibex/abertis',ctrlAbertis.abertis);
module.exports = router;
