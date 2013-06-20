//alert("JavaScript works!");

// Cerelia Williams
// SDI 1603 
// Project 3
// Video Game Play   
 
 
// Variables
 
var gameName = "Sonic The Hedgehog";
var maxPoints = 1000;
var hasPoints = true;
var playerNames = ["Corey", "Colin", "Noah", "SJ"];
var playedBefore = true;
 
//  JSON Data
var playerInfo = {
		{
			"name": "Corey",
			"points": 800,
			"playedBefore": true,
		},
		{
			"name": "Colin",
			"points": 100,
			"playedBefore": false,
		},
		{
			"name": "Noah",
			"points": 420,
			"playedBefore": true,
		},
		{
			"name": "SJ",
			"points": 750,
			"playedBefore": true,
		}
} // end Object
		



// Method Procedure
 
var gameScores = function(firstScore, secondScore){

	var firstScore = 250;
	var secondScore = 500;
	var totalScore;
	
	totalScore = firstScore + secondScore;
	console.log("The total score is " + totalScore);
	
}
gameScores();
if (gameScores === true);
console.log("Great job!");

	
 
// Boolean Function

var playedBefore = function("Is this your first time playing?") {
	var answer;
	if(answer === true){
	console.log("You will need to practice before you can beat Corey!")
	}else{
	if(answer === false)
	console.log("Corey has some competition!")
	}
	return answer;	               
}

	//main code
var myAnswer = mostPoints(true);
console.log(" Yes, " + myAnswer);
 
 
 
 
// Number Function
var maxPoints = function(extraPoints){
	var number;
	do
		{
		number = extraPoints + 100 ;
		console.log("He just scored " + extraPoints + " extra points.");
	
		}
	while (number === extraPoints)
	
	return number;

}
	//main code
var myNumber = extraPoints(500);
console.log("He has " + myNumber + " points.");

               
 
// String Function
 
var favGame = function(newGameOne, newGameTwo){
 	
	var string;

	string = "Other games they like are " + newGameOne + ", and " + newGameTwo + "."

	return string;
}
	// main code
var myString = favGame("Kirby", "Mario Kart");
console.log("The boys like to play Nintendo DS games. " + myString);
 
 
 
 
// Array Function
 
var myArray = ["Corey", "Colin", "Noah", "SJ"];

console.log("The array length is " + myArray.lenghth);

for (var i=0; i < myArray.length; i++) {
	
	console.log(myArray[i] + " is playing the game."); 

	
 return myArray;
};

	//main code
myArray.pop();
console.log(myArray);

