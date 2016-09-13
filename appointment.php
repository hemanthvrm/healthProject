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
			var age = document.getElementById("age1").value; 
			var email = document.getElementById("email1").value; 
			var phone = document.getElementById("phone1").value; 
			var input1 = name.trim();
			var input2 = age.trim();
			var input3 = email.trim();
			var input4 = phone.trim();
			
			if(input4.length < 10){

				document.getElementById("message").innerHTML = "Please enter 10 digits of phone number";
				return false;
			}else{

				if( input1 != "" && input2 != "" && input3 != "" ){ 

				return true;

			}else{
		
			document.getElementById("message").innerHTML = "Please enter valid input";
			return false;




			}
			



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
					<a href="healthcare.html">Home</a>
				</li>
				<li>
					<a href="cost.html">Cost Calculator</a>
				</li>
				<li>
					<a href="doctors.html">Doctors</a>
				</li>
				<li>
					<a href="healthcheck.html">Health</a>
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

		

		
		
		<div id="main">

								<div align="center">
								<br />
								<br />
								<br />

				               <form method="POST" action="" id="form1" onsubmit="return checkForm()" >
								<table border="0" cellspacing="50px" >

								<tr>
									<td colspan="2"><header>Schedule an appointment</header></td>
								</tr>
								<tr>
								<td>Full Name *:</td> <td><input type="text"  name="fullName" id="name1" maxlength="40" required></td> 
 								</tr>
 								<tr>
								<td>Age *: </td><td> <input type="number" name="age" id="age1" maxlength="3" required></td> 
								</tr>
								<tr>
								<td>Email *: </td><td> <input type="email" name="email" id="email1" maxlength="40" required></td> 
								</tr>
								<tr>
								<td>Mobile *: </td><td> <input type="number" name="phone" id="phone1" maxlength="10" required></td> 
								</tr>
								<tr>
								<td>Problem of visit *: </td><td> <select name="problem"><option selected>General check up</option><option>New Problem</option><option>Problem Follow up</option></select></td> 
								</tr>
								<tr>
								<td>Doctor *: </td><td> <select name="doctor"><option selected>Barry D Rutherford</option><option>Donald E Cole</option><option>Robert R Morrison</option></select></td> 
								</tr>
								<tr>
								<td>Date of visit *: </td><td> <input type="date" name="date" id="date1" min="2016-04-15" max="2016-07-15" required></td></tr>
								<tr>
								<td>If particular date unavailable *: </td><td> <select name="schedule"><option selected>Schedule on that week</option><option>Schedule any time</option><option>No thank you</option></select></td> 
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
		                
		
						$name1 = $_POST["fullName"];
						$age1 = $_POST["age"];
						$email1 = $_POST["email"];
						$phone1 = $_POST["phone"];
						$problem = $_POST["problem"];
						$doctor = $_POST["doctor"];
						$date = $_POST["date"];
						$schedule = $_POST["schedule"];
						


						$name = strtolower(trim($name1));
						$age = trim($age1);
						$email = strtolower(trim($email1));
						$phone = trim($phone1);
						
		
		                $sql = "INSERT INTO APPOINTMENT (fullName, age, email, phone, problem, doctor, date, schedule)  VALUES('$name' , '$age' , '$email', '$phone' , '$problem', '$doctor' , '$date', '$schedule');";
		
		                $connection =new mysqli($servername, $username, $password, $dbname);
		
		               if($connection->connect_error){
			           
			           			die("Connection failed:" . $connection->connect_error);
			
		
		               }
		              try{
		
		            	if($connection->query($sql)){
			          	       
			          	        echo "<br /><center>We got your problem<br /> We will mail back to you once your appointment is scheduled</center>";

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

							
		</div>
		<footer>
			
				<p class="footer">Copyright © 2015 Health Care. All rights reserved.</p>

			
		</footer>
	
	</body>
</html>

