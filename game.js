rps();
function rps(){
	var a;
	a = ['rock','paper','scissors'];
	var aiTurn= a[Math.floor(a.length * Math.random())];
	var myTurn;
	myTurn = prompt("Rock, paper or scissors?");
	if (myTurn == null){
		alert("Try again");
	}
	else {
		alert("You chose " +myTurn);
		alert("Computer chose "+aiTurn);

		if(myTurn.toLowerCase() == aiTurn)
		{
			alert("It's a draw!");
		}

		else {
			if(myTurn.toLowerCase() == 'rock') {
				
				if(aiTurn == 'scissors'){
					alert("Rock beats scissors. You win!");	
				}
				else if(aiTurn == 'paper'){
					alert("Sorry, paper beats rock. You lose!");
				}
			}
			else if(myTurn.toLowerCase() == 'paper') {
				if(aiTurn == 'rock'){
					alert("Paper beats rock. You win!");	
				}
				else if(aiTurn == 'scissors'){
					alert("Sorry, scissors beats paper. You lose!");
				}
				
			}
			else if(myTurn.toLowerCase() == 'scissors') {
				if(aiTurn == 'paper'){
					alert("Scissors beats paper. You win!");	
				}
				else if(aiTurn == 'rock'){
					alert("Sorry, rock beats scissors. You lose!");
				}
				
			}
			else alert(myTurn+" isn't rock, paper OR scissors!");
		}
	}

}


