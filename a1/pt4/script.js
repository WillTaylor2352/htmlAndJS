function x() {
alert("Let's guess the number.");
var level = parseInt(prompt("Do you want easy(1), medium(2), or hard(3)?\n" + 
					"easy 1-10\n" + 
					"medium 1-30\n" + 
					"hard 1-50"));
	switch (level){
		case 1: 
			level = 10;
			break;
		case 2: 
			level = 30;
			break;
		case 3: 
			level = 50;
			break;
		default: 
			alert("Refresh the page and type a good number!");
			return;
	}
var myNum = Math.floor(Math.random() * level) + 1;
var guess = 0;

for(var i = 5; i >= 0; i--){
	if(i == 0){
		alert("My number was: " + myNum + ". You lose, try again!");
		return;
	}
	guess = prompt("Try and guess my number " + i + " guesses remaining " + 
			"\nWhat is your guess?");
	
	
	if(guess > level || guess < 0){
		alert("Try again! (guess between 1 and 10)");
	}
	else if(guess < myNum){
		alert("Too low! Guess again.");
	}
	else if(guess > myNum){
		alert("Too high! Guess again.");
	}
	else{
		alert("You win!");
		break;
	}
}
}
x();