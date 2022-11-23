/*
For the comparing logic, the following values will be considered:
0 is rock
1 is paper
2 is scissors
*/

	localStorage.setItem('turns','3');

function playGame(x){
	var j;
	var i=localStorage.getItem('turns');
	console.log(i);
	i=parseInt(i);
	console.log(i);
	
		if(i==0){ //no turns left
		console.log("no turns");
			if(confirm("You lost all your chances. Would you like to play again?")==true){
				localStorage.setItem('turns','3');
			}
			else{
				alert("Good luck next time.");
			}
		}
		else if(i<0){ //winner
		console.log("won");
		if(confirm("You've already won. Would you like to play again?")==true){
				localStorage.setItem('turns','3');
				alert("I'll try my best this time!");
			}
			else{
				alert("No problem.");
			}
		}
		else{ //plays the game
			console.log("playing");
			//COMPUTERCHOICE - Returns a random integer from 0 to 2:
			computerChoice = Math.floor(Math.random() * 3);
			//PLAYER as ROCK
			if(x==0){
				if (computerChoice == 0) {
					alert("It's a draw, Rock with Rock.");
					i--;
					j=i.toString();
					localStorage.setItem('turns',j);
				}
				else if (computerChoice == 1) {
					alert("You lost... Paper beats Rock.");
					i--;
					j=i.toString();
					localStorage.setItem('turns',j);
				}
				else if (computerChoice == 2) {
					alert("You WON! Rock beats Scissors.");
					i=-1;
					localStorage.setItem('turns','-1');
				}
			}
			//PLAYER as PAPER
			else if(x==1){
				if (computerChoice == 0) {
					alert("You WON! Paper beats Rock.");
					i=-1;
					localStorage.setItem('turns','-1');
				}
				else if (computerChoice == 1) {
					alert("It's a draw, Paper with Paper.");
					i--;
					j=i.toString();
					localStorage.setItem('turns',j);
				}
				else if (computerChoice == 2) {
					alert("You lost... Scissors beats Paper.");
					i--;
					j=i.toString();
					localStorage.setItem('turns',j);
				}
			}
			//PLAYER as Scissors
			else if(x==2){
				if (computerChoice == 0) {
					alert("You lost... Rock beats Scissors.");
					i--;
					j=i.toString();
					localStorage.setItem('turns',j);
				}
				else if (computerChoice == 1) {
					alert("You WON! Scissors beats Paper.");
					i=-1;
					localStorage.setItem('turns','-1');
				}
				else if (computerChoice == 2) {
					alert("It's a draw, Scissors with Scissors.");
					i--;
					j=i.toString();
					localStorage.setItem('turns',j);
				}
			}

		
		}
		
		if(i>0){
			alert("Try again. You have "+i+" chance(s) left.");
		}
}