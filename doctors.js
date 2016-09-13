  window.addEventListener("load", function(){
		
		document.getElementById("next1").addEventListener("click",next1,false);
		document.getElementById("prev1").addEventListener("click",prev1,false);
		document.getElementById("next2").addEventListener("click",next2,false);
		document.getElementById("prev2").addEventListener("click",prev2,false);
		document.getElementById("next3").addEventListener("click",next3,false);
		document.getElementById("prev3").addEventListener("click",prev3,false);
		document.getElementById("next4").addEventListener("click",next4,false);
		document.getElementById("prev4").addEventListener("click",prev4,false);
		document.getElementById("next5").addEventListener("click",next5,false);
		document.getElementById("prev5").addEventListener("click",prev5,false);
		document.getElementById("next6").addEventListener("click",next6,false);
		document.getElementById("prev6").addEventListener("click",prev6,false);
		document.getElementById("next7").addEventListener("click",next7,false);
		document.getElementById("prev7").addEventListener("click",prev7,false);
		document.getElementById("next8").addEventListener("click",next8,false);
		document.getElementById("prev8").addEventListener("click",prev8,false);
		document.getElementById("next9").addEventListener("click",next9,false);
		document.getElementById("prev9").addEventListener("click",prev9,false);
		document.getElementById("next10").addEventListener("click",next10,false);
		document.getElementById("prev10").addEventListener("click",prev10,false);
		document.getElementById("next11").addEventListener("click",next11,false);
		document.getElementById("prev11").addEventListener("click",prev11,false);
		document.getElementById("next12").addEventListener("click",next12,false);
		document.getElementById("prev12").addEventListener("click",prev12,false);
		document.getElementById("next13").addEventListener("click",next13,false);
		document.getElementById("prev13").addEventListener("click",prev13,false);
		document.getElementById("next14").addEventListener("click",next14,false);
		document.getElementById("prev14").addEventListener("click",prev14,false);
		document.getElementById("next15").addEventListener("click",next15,false);
		document.getElementById("prev15").addEventListener("click",prev15,false);
		


	},false);



  var imgArray = ["doctor16.png", "doctor17.png", "doctor18.png", "doctor19.png", "doctor20.png", "doctor21.png", "doctor22.png", "doctor23.png"]; 
  var nameArray = ["Randall B Hudson, MD","Donald E Cole, Jr, MD","Robert R Morrison, MD","Richard E Nelson, MD","John A Reaney, MD","James B Kelly, Jr, MD","Benjamin M Chen, MD","Thomas Michael Cooper, MD"]
			
			
			var num = 0;
			function next1() {
				num ++;
				if (num > 7)
					{
						
						num = 0;
					}
					document.getElementById("image1").innerHTML =  "<img src='images/" +imgArray[num]+ "' width='200px' height='200px'/><br />" + nameArray[num];

					
			
			}
			function prev1(){
				num --;
				if (num < 0){
				
					num = 7;
				}
				
			document.getElementById("image1").innerHTML = "<img src='images/" +imgArray[num]+ "' width='200px' height='200px'/><br />" + nameArray[num];
			
			}

			function next2() {
				num ++;
				if (num > 7)
					{
						
						num = 0;
					}
					document.getElementById("image2").innerHTML =  "<img src='images/" +imgArray[num]+ "' width='200px' height='200px'/><br />" + nameArray[num];

					
			
			}

			function prev2(){
				num --;
				if (num < 0){
				
					num = 7;
				}
				
			document.getElementById("image2").innerHTML = "<img src='images/" +imgArray[num]+ "' width='200px' height='200px'/><br />" + nameArray[num];
			
			}

			function next3() {
				num ++;
				if (num > 7)
					{
						
						num = 0;
					}
					document.getElementById("image3").innerHTML =  "<img src='images/" +imgArray[num]+ "' width='200px' height='200px'/><br />" + nameArray[num];

					
			
			}
			function prev3(){
				num --;
				if (num < 0){
				
					num = 7;
				}
				
			document.getElementById("image3").innerHTML = "<img src='images/" +imgArray[num]+ "' width='200px' height='200px'/><br />" + nameArray[num];
			
			}

			function next4() {
				num ++;
				if (num > 7)
					{
						
						num = 0;
					}
					document.getElementById("image4").innerHTML =  "<img src='images/" +imgArray[num]+ "' width='200px' height='200px'/><br />" + nameArray[num];

					
			
			}
			function prev4(){
				num --;
				if (num < 0){
				
					num = 7;
				}
				
			document.getElementById("image4").innerHTML = "<img src='images/" +imgArray[num]+ "' width='200px' height='200px'/><br />" + nameArray[num];
			
			}

			function next5() {
				num ++;
				if (num > 7)
					{
						
						num = 0;
					}
					document.getElementById("image5").innerHTML =  "<img src='images/" +imgArray[num]+ "' width='200px' height='200px'/><br />" + nameArray[num];

					
			
			}
			function prev5(){
				num --;
				if (num < 0){
				
					num = 7;
				}
				
			document.getElementById("image5").innerHTML = "<img src='images/" +imgArray[num]+ "' width='200px' height='200px'/><br />" + nameArray[num];
			
			}


			function next6() {
				num ++;
				if (num > 7)
					{
						
						num = 0;
					}
					document.getElementById("image6").innerHTML =  "<img src='images/" +imgArray[num]+ "' width='200px' height='200px'/><br />" + nameArray[num];

					
			
			}
			function prev6(){
				num --;
				if (num < 0){
				
					num = 7;
				}
				
			document.getElementById("image6").innerHTML = "<img src='images/" +imgArray[num]+ "' width='200px' height='200px'/><br />" + nameArray[num];
			
			}

			function next7() {
				num ++;
				if (num > 7)
					{
						
						num = 0;
					}
					document.getElementById("image7").innerHTML =  "<img src='images/" +imgArray[num]+ "' width='200px' height='200px'/><br />" + nameArray[num];

					
			
			}
			function prev7(){
				num --;
				if (num < 0){
				
					num = 7;
				}
				
			document.getElementById("image7").innerHTML = "<img src='images/" +imgArray[num]+ "' width='200px' height='200px'/><br />" + nameArray[num];
			
			}

			function next8() {
				num ++;
				if (num > 7)
					{
						
						num = 0;
					}
					document.getElementById("image8").innerHTML =  "<img src='images/" +imgArray[num]+ "' width='200px' height='200px'/><br />" + nameArray[num];

					
			
			}
			function prev8(){
				num --;
				if (num < 0){
				
					num = 7;
				}
				
			document.getElementById("image8").innerHTML = "<img src='images/" +imgArray[num]+ "' width='200px' height='200px'/><br />" + nameArray[num];
			
			}

			function next9() {
				num ++;
				if (num > 7)
					{
						
						num = 0;
					}
					document.getElementById("image9").innerHTML =  "<img src='images/" +imgArray[num]+ "' width='200px' height='200px'/><br />" + nameArray[num];

					
			
			}
			function prev9(){
				num --;
				if (num < 0){
				
					num = 7;
				}
				
			document.getElementById("image9").innerHTML = "<img src='images/" +imgArray[num]+ "' width='200px' height='200px'/><br />" + nameArray[num];
			
			}


			function next10() {
				num ++;
				if (num > 7)
					{
						
						num = 0;
					}
					document.getElementById("image10").innerHTML =  "<img src='images/" +imgArray[num]+ "' width='200px' height='200px'/><br />" + nameArray[num];

					
			
			}
			function prev10(){
				num --;
				if (num < 0){
				
					num = 7;
				}
				
			document.getElementById("image10").innerHTML = "<img src='images/" +imgArray[num]+ "' width='200px' height='200px'/><br />" + nameArray[num];
			
			}

			function next11() {
				num ++;
				if (num > 7)
					{
						
						num = 0;
					}
					document.getElementById("image11").innerHTML =  "<img src='images/" +imgArray[num]+ "' width='200px' height='200px'/><br />" + nameArray[num];

					
			
			}
			function prev11(){
				num --;
				if (num < 0){
				
					num = 7;
				}
				
			document.getElementById("image11").innerHTML = "<img src='images/" +imgArray[num]+ "' width='200px' height='200px'/><br />" + nameArray[num];
			
			}

			function next12() {
				num ++;
				if (num > 7)
					{
						
						num = 0;
					}
					document.getElementById("image12").innerHTML =  "<img src='images/" +imgArray[num]+ "' width='200px' height='200px'/><br />" + nameArray[num];

					
			
			}
			function prev12(){
				num --;
				if (num < 0){
				
					num = 7;
				}
				
			document.getElementById("image12").innerHTML = "<img src='images/" +imgArray[num]+ "' width='200px' height='200px'/><br />" + nameArray[num];
			
			}

			function next13() {
				num ++;
				if (num > 7)
					{
						
						num = 0;
					}
					document.getElementById("image13").innerHTML =  "<img src='images/" +imgArray[num]+ "' width='200px' height='200px'/><br />" + nameArray[num];

					
			
			}
			function prev13(){
				num --;
				if (num < 0){
				
					num = 7;
				}
				
			document.getElementById("image13").innerHTML = "<img src='images/" +imgArray[num]+ "' width='200px' height='200px'/><br />" + nameArray[num];
			
			}

			function next14() {
				num ++;
				if (num > 7)
					{
						
						num = 0;
					}
					document.getElementById("image14").innerHTML =  "<img src='images/" +imgArray[num]+ "' width='200px' height='200px'/><br />" + nameArray[num];

					
			
			}
			function prev14(){
				num --;
				if (num < 0){
				
					num = 7;
				}
				
			document.getElementById("image14").innerHTML = "<img src='images/" +imgArray[num]+ "' width='200px' height='200px'/><br />" + nameArray[num];
			
			}

			function next15() {
				num ++;
				if (num > 7)
					{
						
						num = 0;
					}
					document.getElementById("image15").innerHTML =  "<img src='images/" +imgArray[num]+ "' width='200px' height='200px'/><br />" + nameArray[num];

					
			
			}
			function prev15(){
				num --;
				if (num < 0){
				
					num = 7;
				}
				
			document.getElementById("image15").innerHTML = "<img src='images/" +imgArray[num]+ "' width='200px' height='200px'/><br />" + nameArray[num];
			
			}

