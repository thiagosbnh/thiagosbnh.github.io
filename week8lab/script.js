/*
For the comparing logic, the following values will be considered:
0 is rock
1 is paper
2 is scissors
*/

function playRock(){
	//COMPUTERCHOICE - Returns a random integer from 0 to 2:
	computerChoice = Math.floor(Math.random() * 3);
	//if statements to compare with user's choice
	if (computerChoice === 0) {
		alert("It's a draw, Rock with Rock. Try again.");
	}
	else if (computerChoice === 1) {
		alert("You lost... Paper beats Rock. Try again.");
	}
	else if (computerChoice === 2) {
		alert("You WON! Rock beats Scissors.");
	}
	else {
		alert("Error.");
		//this is only to test and see if the computerChoice var is working as it should.
	}
}

function playPaper(){
	//COMPUTERCHOICE - Returns a random integer from 0 to 2:
	computerChoice = Math.floor(Math.random() * 3);
	//if statements to compare with user's choice
	if (computerChoice === 0) {
		alert("You WON! Paper beats Rock.");
	}
	else if (computerChoice === 1) {
		alert("It's a draw, Paper with Paper. Try again.");
	}
	else if (computerChoice === 2) {
		alert("You lost... Scissors beats Paper.");
	}
	else {
		alert("Error.");
	}
}

function playScissors(){
	//COMPUTERCHOICE - Returns a random integer from 0 to 2:
	computerChoice = Math.floor(Math.random() * 3);
	//if statements to compare with user's choice
	if (computerChoice === 0) {
		alert("You lost... Rock beats Scissors. Try again.");
	}
	else if (computerChoice === 1) {
		alert("You WON! Scissors beats Paper.");
	}
	else if (computerChoice === 2) {
		alert("It's a draw, Scissors with Scissors. Try again.");
	}
	else {
		alert("Error.");
	}
}