var fishlistJSON= require('../fishes.json');

//routes
exports.home =function(req, res){
	var fishList = fishlistJSON.fishes;
	
	res.render('home',{
		
		
		fishList: fishList


	});
};

exports.fishFound= function(req, res){
	res.render('fishFound'),
};

exports.fishNotFound = function(req,res){
	res.render('fishNotFound'),
};