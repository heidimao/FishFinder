var fishlistJSON= require('../fishes.json');

//routes
exports.home =function(req, res){
	var fishlist= fishlistJSON.fishes;
	res.render('home',{
		title: 'fish',
		fish: fishlist
	});

};

exports.find= function(req, res){
	var fishlist= fishlistJSON.fishes;
	
	var fish_name= req.body.fish_name;
	if(fish_name == fishlist.name){
		res.send("sucess")
	}else{
		res.send("fail")
	}

	
	
};
exports.fishFound= function(req, res){
	res.render('fishFound')
};

exports.fishNotFound = function(req,res){
	res.render('fishNotFound')
};

