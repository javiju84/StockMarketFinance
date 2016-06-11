var request = require('request');

module.exports.home = function(req, res){
res.render('home', { title: 'HOME' });
};