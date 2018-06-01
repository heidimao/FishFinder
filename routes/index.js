var fishlistJSON= require('../fishes.json');

//routes
exports.home =function(req, res){
	const fishlist= fishlistJSON.fishes;
	res.render('home',{
		title: 'Find Fish',
		text:"",
		fish: fishlist
		

	});

};


exports.find= function(req, res){
	const fishname= req.body.fish_name;
	
	res.redirect('/fishFound/' + fishname);
	
	
	

	
	
};

exports.fishFound= function(req, res){
	const fishlist = fishlistJSON.fishes;
	const fishname= req.params.fishname;
	
	var Input = fishname.toLowerCase();
	
	const found_fishes = fishlist.filter(fish => fish.name.toLowerCase().includes(Input));
	
	
	if (found_fishes.length > 0){
		for (var i =0; i< found_fishes.length; i++){
			res.render('fishFound',{
			fish: found_fishes,
			
			});
		};
		
	
	}else{
		res.render('home',{
			title:"Find Fish",
			text: 'Oops! ' + fishname + ' is not found',
			fish: fishlist
		});

	};
	

	
};



