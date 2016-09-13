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
		


	
	</head>
	
	<body>	


		<div id="header">
		<div>
			<div>
				<span><img src="images/logo2.png" alt="" height="90" width="200" ></span>
				<a href="healthcare.html" class="logo"><img src="images/logo1.png" alt="Logo"></a>

				<span class="tagline"><img src="images/logo2.png" alt="" height="90" width="200" ></span>
			</div>
			
		</div>
	</div>

		

		
		
		<div id="main">
						
						<?php

				

						$servername = "localhost";
						$username = "root";
		                $password = "";
		                $dbname = "projectdb";
		                
		
						$sql = "SELECT * FROM contact";
		
						$connection =new mysqli($servername, $username, $password, $dbname);
		
						if($connection->connect_error){
								
								die("Connection failed:" . $connection->connect_error);
			
		
		                 }
		                 try{
		
		                  	$result = $connection->query($sql);
		                    }catch (Exception $e){
			                 	echo("ERROE: " . $e->getMessage());
		                 	}
		            		$connection->close();
	                      ?>
	
	              <br /><br /><center>  <h2 style="background-color:lightgreen;">Feedback from users</h2> <br /><br />
					<table>
	        <?php
		         while ($row = $result->fetch_assoc()){
				  
		          print("<tr>");
		
		          foreach($row as $value){
			      print("<td>$value</td>");
		          }
		          print("</tr>");
	}

?>
</table></center>
						
			
						
		
		</div>
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<center><button onclick="window.location.href='healthcare.html'">Home</button></center>
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		
		<footer>
			
				<p class="footer">Copyright © 2015 Health Care. All rights reserved.</p>

			
		</footer>
	
	</body>
</html>

