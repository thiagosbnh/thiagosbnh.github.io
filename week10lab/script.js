function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function guessNumber(){
	count=0
	var randomNumber = [];
	for (let i=0;i<5;i++){
		randomNumber[i]=getRndInteger(1,10);
		console.log(randomNumber[i]);
	}
	num=prompt("Choose a number from 1 to 10.");
	num=parseInt(num);
	if ((num<1)||(num>10)){
		alert("Your number is invalid. Please try again.");
	}
	else{
		for (let j=0; j<(randomNumber.length-1); j++){
			if(num==randomNumber[j]){
				count++;
			}
		}
		if (count>0){
		document.getElementById("answer").innerHTML = ("You've guessed the right number "+count+" time(s)<br>The numbers were: "+randomNumber);
		}
		else{
		document.getElementById("answer").innerHTML = ("You didn't guess the right number :(<br>The numbers were: "+randomNumber);
		}
	}
}