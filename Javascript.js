
			var start;
			
			function getRandomColor() {
 				 var letters = '0123456789ABCDEF'.split('');
 				 var color = '#';
 				 for (var i = 0; i < 6; i++) {
   					 color += letters[Math.floor(Math.random() * 16)];
 			 	}
  				return color;
			}
	
			function makeShapeAppear() {

				var topPosition = Math.random() *500;
				var leftPosition = Math.random() *500;
				var width = (Math.random() * 180)+100;
				
				if(Math.random() > 0.3) {
					document.getElementById("shape").style.borderRadius = "50%";
				}else{
					document.getElementById("shape").style.borderRadius = "0";
				}				
	
				document.getElementById("shape").style.backgroundColor = getRandomColor();
				
				document.getElementById("shape").style.width = width + "px";

				document.getElementById("shape").style.height = width + "px";
				
				document.getElementById("shape").style.top = topPosition + "px";

				document.getElementById("shape").style.left = leftPosition + "px";


				document.getElementById("shape").style.display = "block";

				 start = new Date().getTime();			
			}

			function appearAfterDelay() {

				setTimeout(makeShapeAppear, Math.random()*1500);

			}

			appearAfterDelay();
			
		document.getElementById("shape").onclick = function() {

		document.getElementById("shape").style.display = "none";

		var end = new Date().getTime();

		var timeTaken = (end - start)/1000;

		document.getElementById("timeTaken").innerHTML = timeTaken + "s";
		
		appearAfterDelay();

		}

