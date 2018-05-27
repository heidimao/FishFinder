var fishlistJSON= require('../fishes.json');

//routes
exports.home =function(req, res){
	var fishlist= fishlistJSON.fishes;
	res.render('home',{
		title: 'Find Fish',
		fish: fishlist
	});

};


exports.find= function(req, res){
	var fishlist= fishlistJSON.fishes;
	var fish_name= req.body.fish_name;
	var Name =[];
	
	//Make fishname (in json) uppercase, and make user input uppercase, in order to get the result in any case
	for (i =0 ; i<fishlist.length; i++){
		Name.push(fishlist[i].name);
	}
	
	var InputUpper= fish_name.toUpperCase();
	var Adjusted= Name.map(function(x){return x.toUpperCase()});
	//search 
	function findingindex(element){
		return element === InputUpper;
	};

	var j = Adjusted.findIndex(findingindex);
	if (j > -1){
			var Name = fishlist[j].name;
			var Status = fishlist[j].status;
			var Image= fishlist[j].image;
			var Des = fishlist[j].desc;
			var Price= fishlist[j].price;
			res.render('fishFound', {
				name: Name,
				status: Status,
				image: Image,
				desc: Des,
				price: Price,
			});
	}else{
		res.render('fishNotFound');
	};	
	
	
	

};

exports.fishFound= function(req, res){
	res.render('fishFound')
};

exports.fishNotFound = function(req,res){
	res.render('fishNotFound')
};

