window.addEventListener("load", function(){
		
		document.getElementById("bmibutton").addEventListener("click",calculate,false);
		


	},false);

function calculate(){

	var winput= document.getElementById("weight").value;
	var finput= document.getElementById("feet").value;
	var iinput= document.getElementById("inch").value;
	var button1 = document.getElementById("button1");
	var button2 = document.getElementById("button2");
	var input1 = 0;
	var input2 = 0;
	var input3 = 0;
	


	if (input1 = parseInt(winput)){
		if(input2 = parseInt(finput)){
			if(input3 = parseInt(iinput)){

				var height = (input2 * 12) + input3 ;
				var bmi = [input1 / (height * height) ] * 703 ;
				var bmi1 = bmi.toFixed(1);
				
				
				if( button1.checked ){

							switch(true) {
							case ( bmi1 < 18.5 ):
							
							document.getElementById("Result").innerHTML = "Your BMI " + bmi1 + "<br> You are Underweight " ;
							document.getElementById("image").src = "images/male_under.png";
							break;
							
							case ( bmi1 > 18.5 && bmi1 < 24.9 ):
					
							document.getElementById("Result").innerHTML = "Your BMI " + bmi1 + "<br> You are Perfect ";
							document.getElementById("image").src = "images/male_perfect.png";
							break;

							case ( bmi1 > 25 && bmi1 < 29.9 ):
					
							document.getElementById("Result").innerHTML = "Your BMI " + bmi1 + "<br> You are Overweight ";
							document.getElementById("image").src = "images/male_over.png";
							break;

							case ( bmi1 > 30 ):
					
							document.getElementById("Result").innerHTML = "Your BMI " + bmi1 + "<br> You are Obese ";
							document.getElementById("image").src = "images/male_obese.png";
							break;


							}

				}else if (button2.checked){

					switch(true) {
							case ( bmi1 < 18.5 ):
							
							document.getElementById("Result").innerHTML = "Your BMI " + bmi1 + "<br> You are Underweight " ;
							document.getElementById("image").src = "images/female_under.png";
							break;
							
							case ( bmi1 > 18.5 && bmi1 < 24.9 ):
					
							document.getElementById("Result").innerHTML = "Your BMI " + bmi1 + "<br> You are Perfect ";
							document.getElementById("image").src = "images/female_perfect.png";
							break;

							case ( bmi1 > 25 && bmi1 < 29.9 ):
					
							document.getElementById("Result").innerHTML = "Your BMI " + bmi1 + "<br> You are Overweight ";
							document.getElementById("image").src = "images/female_over.png";
							break;

							case ( bmi1 > 30 ):
					
							document.getElementById("Result").innerHTML = "Your BMI " + bmi1 + " You are Obese ";
							document.getElementById("image").src = "images/female_obese.png";
							break;


							}




				}

				



			}else{

				document.getElementById("Result").innerHTML = "Please enter your height in number format"

			}



		}else{

			document.getElementById("Result").innerHTML = "Please enter your height in number format"

		}



	}else{

		document.getElementById("Result").innerHTML = "Please enter your weight in number format" ;

	}




}


