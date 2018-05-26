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
	String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
	var Adjusted= fish_name.capitalize()

	for (var i=0; i<fishlist.length; i++){
		
		if(Adjusted===fishlist[i].name){
			console.log(Adjusted);
			var Name = fishlist[i].name;
			var Status = fishlist[i].status;
			var Image= fishlist[i].image;
			var Des = fishlist[i].desc;
			var Price= fishlist[i].price;
			res.render('fishFound', {
				name: Name,
				status: Status,
				image: Image,
				desc: Des,
				price: Price,

			});
		};

	};
	
	
	

};

exports.fishFound= function(req, res){
	res.render('fishFound')
};

exports.fishNotFound = function(req,res){
	res.render('fishNotFound')
};

