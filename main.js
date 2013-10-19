var gameModule = (function () {

	var timeoutVar,
	 counter=0;

	function start(){
		var canvas= document.getElementById('game'),
		    ctx= canvas.getContext('2d'),
		    ballX= Math.floor(Math.random() *600),//0...300
		    ballY= Math.floor(Math.random() *450),
		    ballZ= Math.floor(Math.random() *80);

		canvas.width= 640;
		canvas.height= 480;

		ctx.fillStyle='Red';
		ctx.beginPath();
		ctx.arc(ballX, ballY, ballZ,0, Math.PI *2, true);
		ctx.fill();

		if(counter >= 10){

		} else {

				timeoutVar = setTimeout(start,1000);
				counter = counter + 1;
		}
	}
		function gameOver(){

				console.log("Counter:" + counter);
			}			
		

    return {
    	start:start
    }		
}) (); 

gameModule.start(); 