/*
Create an object that acts like a water bottle. 
It will need a volume key to store how full or empty the bottle is. 
It will be 100 when full and 0 when empty. 
Give your water bottle methods for filling it up, 
drinking some of it, and emptying it.

We made a start on this for you here: 
*/

var bottle = {
	volume: 0,
	fill: function(){
		this.volume = 100;
	 	// calling this function should make you bottles volume = 100; 
	},
	drink: function(){
		this.volume = this.volume - 10;
		// calling this function should decrease your bottles volume by 10;
	},
	empty: function(){
		this.volume == 0 ? true: false;
		// this function should return true if your bottles volume = 0
	}
}

/*
--TIP--

Remember that for changing properties on the current object inside one of its
methods you can refer to it by its variable name: `bottle`.

Once you have completed your object run the following and see if your answer 
matches the expected result at the bottom :)
*/

bottle.fill();
bottle.drink();
bottle.drink();
bottle.drink();
if(!bottle.empty()){
	console.log('bottles volume = ' + bottle.volume);
}
console.log("Above volume should be: 70");

var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache'}
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst'}

function aliasGen(first, last){
	var regex1 = /[a-z]+/i;

	if(regex1.test(first[0]) && regex1.test(last[0])){
	  first[0].toUpperCase();
	  last[0].toUpperCase();
	  var aliasF = firstName[first[0]] ? firstName[first[0]] : "Your name must start with a letter from A - Z.";
	  var aliasL = surname[last[0]] ? surname[last[0]] : "Your name must start with a letter from A - Z.";
	}
	return aliasF, aliasL;
  };

aliasGen('Anna', 'Clear');