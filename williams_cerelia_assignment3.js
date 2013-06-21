//alert("JavaScript works!");

// Cerelia Williams
// SDI 1603 
// Project 3
// Video Game Play   
 
 
// Variables
 
var gameName = "Sonic The Hedgehog";
var maxPoints = 1000;
var highScore = true;
var myArray = ["Corey", "SJ", "Noah"];
var playedBefore = true;
 
//  JSON Data
var playerInfo = {
	players: [
		{
			"name": "Corey",
			"points": 800,
			"playedBefore": true,
		},
		{
			"name": "SJ",
			"points": 100,
			"playedBefore": false,
		},
		{
			"name": "Noah",
			"points": 420,
			"playedBefore": true,
		}
		]
} // end Object
		



// Method Procedure
 
var toDo = function(arg1){

	var playGame;
	
	if(arg1 === true) {
	console.log("The boys want to play a game.");
	} else {
	console.log("The boys need to find something to do.");
	}
}
toDo(true);
console.log("Let's play!");

 
// Property: String
 
var favGame = function(newGameOne, newGameTwo){
 	
	var string;

	string = "other games they like are " + newGameOne + " and " + newGameTwo + "."

	return string;
}
	// main code
var myString = favGame("Kirby", "Mario Kart");
console.log("The boys like to play Nintendo DS games. " + gameName +  " is their favorite, but " + myString);
 
  

// Property: Array
var myArray = ["Corey", "SJ", "Noah"];

console.log("The array length is " + myArray.length);

	for (var i = 0; i < myArray.length; i++) {
	
		console.log(myArray[i] + " wants to play the game."); 
		
		if (i < myArray.length) {
			console.log("Yay!");
		} else {
			console.log("Let's invite them to play!");
		}
 
};

	//main code
myArray.pop();
console.log("They will do rock, paper, scissors, to see which two will play first!");
console.log("And the players are: " + myArray);

 
 
// Property: Number
var maxPoints = function(extraPoints){
console.log("They will play two games!");
	while (extraPoints > 0) {
	
		console.log("Player 1 has " + extraPoints + ".");
		
		extraPoints = extraPoints + 100; 
		console.log("Player 2 has " + extraPoints + ".");
		
		if (extraPoints > 0) {
			console.log("Way to go!");
		} else { 
			console.log("Better luck next time!");
		}
		
		if (extraPoints === 1000) {
			return extraPoints;
		}
		
	}
	return extraPoints;
	
}	
	//main code
var myNumber = maxPoints(800);
console.log("Corey has " + myNumber + " extra points.");

               
// Property: Boolean

var highScore = function(arg1, arg2) {
	var  booReturn = (highScore === true);
	if(arg1 < arg2){
	console.log("SJ will need to practice before he can beat Corey!")
	booReturn = true;
	}else{
	console.log("Corey has some competition!")
	booReturn = false;
	}
	
	return booReturn;	               
}

	//main code
console.log(" Yes, this is " + highScore(800,1000));

  

 
 
