/*
Week 9 Lab
Thiago Barbosa - 21.11.22
*/

function beerSong(){
	for(i=99; i>=0; i--){
		if(i==2){
			document.getElementById("songLyrics").innerHTML+="<br>"+i+" bottles of beer on the wall, "+i+" bottles of beer<br>Take one down and pass it around, "+(i-1)+" bottle of beer on the wall<br><br>";
		}
		else if(i==1){
			document.getElementById("songLyrics").innerHTML+="<br>"+i+" bottle of beer on the wall, "+i+" bottle of beer<br>Take one down and pass it around, no more bottles of beer on the wall<br><br>";
		}
		else if(i==0){
			document.getElementById("songLyrics").innerHTML+="No more bottles of beer on the wall, no more bottles of beer<br>Go to the store and buy some more, 99 bottles of beer on the wall";
		}
		else{
			document.getElementById("songLyrics").innerHTML+="<br>"+i+" bottles of beer on the wall, "+i+" bottles of beer<br>Take one down and pass it around, "+(i-1)+" bottles of beer on the wall<br><br>";
		}
	}
}