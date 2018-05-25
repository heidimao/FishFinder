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
	
	
	
	for (var i =0; i< fishlist.length; i++){
		if (fishlist[i].name == fish_name){
			res.send(fishlist[i].desc);
			
		};
	};
	

	

	
	
};
exports.fishFound= function(req, res){
	res.render('fishFound')
};

exports.fishNotFound = function(req,res){
	res.render('fishNotFound')
};

