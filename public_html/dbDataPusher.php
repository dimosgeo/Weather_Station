<?php
	include 'dbConnention.php';
	// Keep this API Key value to be compatible with the ESP8266 code provided in the project page. If you change this value, the ESP8266 sketch needs to match
	$api_key_value = "APIKEY";
	$api_key = $temperature = $humidity = $pressure = "";

	$conn = new mysqli($servername, $username, $password, $db);
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}

	$api_key = test_input($_GET['api_key']);
	$temperature = test_input($_GET['temperature']);
	$humidity = test_input($_GET['humidity']);
	$pressure = test_input($_GET['pressure']);

	$sql = "DELETE FROM Sensor WHERE id < (NOW() - INTERVAL 1 DAY)";
	$result = $conn->query($sql);

	//mysqli_query($conn,"ALTER TABLE Sensor AUTO_INCREMENT = 1"); 
	//Restart id from 1 if Sensor DB is Empty

	if(!strcmp($api_key,$api_key_value)) { //Returns 1 if equals
		$sql = "INSERT INTO Sensor (temp, hum, bar)
		VALUES ('$temperature', '$humidity', '$pressure')";
		if ($conn->query($sql) === TRUE) {
			echo "New record created successfully";
		} 
		else {
			echo "Error: " . $sql . "<br>" . $conn->error;
		}
	}
	else {
		echo "False api key";
	}
	$conn->close();

	function test_input($data) {
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;
	}
?>