var randomNumber=Math.floor(Math.random()*100)+1;
var attempts=0;
document.getElementById("guessbtn").addEventListener('click',function(){
	var guess=parseInt(document.getElementById("guessInput").value)
	attempts++;
	if(guess===randomNumber){
		displaymsg("Congrulations!you guessed the number in" + attempts +"attempt")
		document.getElementById("guessbtn").disabled=true;	
	}
	else if(guess>randomNumber){
		displaymsg("To high! try a lower number.")
	}
	else {
         displaymsg("To low! try a higher number.")
	}
});
function displaymsg(K){
	document.getElementById("msg").textContent=K;
}