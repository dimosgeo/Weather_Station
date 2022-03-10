<?php
	include 'dbConnention.php';
	// Create connection
	$conn = new mysqli($servername, $username, $password, $db);
	// Check connection
	if ($conn->connect_error) {
		echo "<h2>PHP is Fun!</h2>";
	  	die("Connection failed: " . $conn->connect_error);
	}

	$sql = "SELECT id, temp, hum, bar FROM Sensor ORDER BY id DESC LIMIT 144";
	$result = $conn->query($sql);

	$id=array();
	$temp=array();
	$hum=array();
	$bar=array();
	if ($result->num_rows > 0) {
		while($row = $result->fetch_assoc()) {
			array_push($id, $row["id"]);
			array_push($temp, $row["temp"]);
			array_push($hum, $row["hum"]);
			array_push($bar, $row["bar"]);
		}
	}

	$conn->close();

?>