<!DOCTYPE html>

<html>
	<head>
		<!--
			Created by Hemanth varma mudduluru 
						srinidhi vadigepalli
						ahmed shaik
		-->
		<meta charset="utf-8">

		<title>Health Care</title>
		<link rel="stylesheet" type="text/css" href="healthcare.css">
		<script type="text/javascript">

			function checkForm(){

			var name = document.getElementById("name1").value; 
			var email = document.getElementById("email1").value; 
			var feedback = document.getElementById("feedback1").value; 
			var input1 = name.trim();
			var input2 = email.trim();
			var input3 = feedback.trim();
			
			if( input1 != "" && input2 != "" && input3 != "" ){ 

				return true;

			}else{
		
			document.getElementById("message").innerHTML = "Please enter valid input";
			return false;



			}

			

        }

		</script>


	
	</head>
	
	<body>	


		<div id="header">
		<div>
			<div>
				<span><img src="images/logo2.png" alt="" height="90" width="200" ></span>
				<a href="healthcare.html" class="logo"><img src="images/logo1.png" alt="Logo"></a>

				<span class="tagline"><img src="images/logo2.png" alt="" height="90" width="200" ></span>
			</div>
			<ul>
				<li class="selected">
					<a href="healthcare.php">Home</a>
				</li>
				<li>
					<a href="cost.php">Cost Calculator</a>
				</li>
				<li>
					<a href="doctors.php">Doctors</a>
				</li>
				<li>
					<a href="healthcheck.php">Health</a>
				</li>
				<li>
					<a href="appointment.php">Appointment</a>
				</li>	
				<li>
					<a href="login.php">Login</a>
				</li>
				<li>
					<a href="contact.php">contact</a>
				</li>
				
			</ul>
		</div>
	</div>

		

		
		
		<div id="main" >
						
						<div align="center">
						<br />
						<br />
						<br />
						<form method="POST" action="" id="form2" onsubmit="return checkForm()">

								<table border="0" cellspacing="50px">

								<tr>
									<td colspan="2"><header>Feedback</header></td>
								</tr>
								<tr>
								<td>Name *:</td> <td><input type="text"  name="name" id="name1" maxlength="40" required></td> 
 								</tr>
 								<tr>
								<td>Email *: </td><td> <input type="email" name="email" id="email1" maxlength="40" required></td> 
								</tr>
 								<tr>	
								<td>Feedback*:</td> <td><textarea  rows="4" name="feedback" cols="50"  id="feedback1" maxlength="150" required> </textarea></td>
								</tr>
 								<tr>	
								<td></td> <td><input  type="submit" value="Submit"  id="checkvalid"   /><input type='hidden' name='insert' value=1 /></td>
								</tr>
 							
 								</table>
								
						</form>
					</div>
						<center><p id="message"></p></center>
						<?php

						if(isset($_POST['insert']) and $_POST['insert'] == 1){

						$servername = "localhost";
						$username = "root";
		                $password = "";
		                $dbname = "projectdb";
		                
		
						$name1 = $_POST["name"];
						$email1 = $_POST["email"];
						$feedback1 = $_POST["feedback"];
						$name = strtolower(trim($name1));
						$email = strtolower(trim($email1));
						$feedback = strtolower(trim($feedback1));
		
		                $sql = "INSERT INTO CONTACT (name, email, feedback)  VALUES('$name' , '$email' , '$feedback');";
		
		                $connection =new mysqli($servername, $username, $password, $dbname);
		
		               if($connection->connect_error){
			           
			           			die("Connection failed:" . $connection->connect_error);
			
		
		               }
		              try{
		
		            	if($connection->query($sql)){
			          	       
			          	        echo "<center>Your feedback Submitted successfully</center>";

			            }else{
			           			
			           			die("Insert Failed" . mysqli_error($connection));
				       }
			           }catch (Exception $e){
				            	
				            	echo("ERROR: " . $e->getMessage());
			           }
			           
			         	$connection->close();
			         	unset($_POST['insert']);

			}
		?>
			
						<p><center>
							Our Address:<br />
										Health Care Limited.<br />
										Kansas City.	<br />
										Missouri - 64131<br />
						</center></p>
		</div>
		
		
		<footer>
			
				<p class="footer">Copyright © 2015 Health Care. All rights reserved.</p>

			
		</footer>
		
	</body>
</html>

