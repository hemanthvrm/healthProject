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
			var pass = document.getElementById("pass1").value; 
			
			var input1 = name.trim();
			var input2 = pass.trim();
			
			
			if( input1 != "" && input2 != "" ){ 

				return true;

			}else{
		
			document.getElementById("message").innerHTML = "Incorrect login details ";
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
						<form method="POST" action="" id="form1" onsubmit="return checkForm()">
								<table border="0" cellspacing="50px">

								<tr>
									<td colspan="2"><header>Doctor Login</header></td>
								</tr>
								<tr>
								<td>Username *:</td> <td><input type="text"  name="username1" id="name1" maxlength="40" required></td> 
 								</tr>
 								<tr>
								<td>Password *: </td><td> <input type="password" name="password1" id="pass1" maxlength="40" required></td> 
								</tr>
 								
 								<tr>	
								<td></td> <td><input  type="submit" value="Login"  id="checkvalid"   /></td>
								</tr>
 							
 								</table>
						</form>
					</div>

					<center><p id="message"></p></center>

					<?php
									$username = isset($_POST["username1"]);
									$password = isset($_POST["password1"]);
									
										

										switch(true){

												case($username == "barryd" && $password == "password"):

														header('Location: barryd.php');
														break;

												case($username == "donalde" && $password == "password"):

														header('Location: donalde.php');
														break;

												case($username == "robertr" && $password == "password"):


													header('Location: robertr.php');
													break;

									



										}
										unset($_POST['username1']);
									unset($_POST['password1']);

							?>

						
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		</div>

		<center><button onclick="window.location.href='admin.php'">Admin Login</button></center>

							
		
		<footer>
			
				<p class="footer">Copyright © 2015 Health Care. All rights reserved.</p>

			
		</footer>
	
	</body>
</html>

