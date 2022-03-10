<!DOCTYPE html>
<html>
<head>
	<link rel="icon" href="weather_icons/web_icon.png">
	<title>Weather</title>
	<script src="https://cdn.jsdelivr.net/npm/chart.js@3.2.1/dist/chart.min.js"></script>
	<script src="js_scripts/dataPlotter.js"></script>
	<script src="js_scripts/zambretti.js"></script>
	<meta http-equiv="refresh" content="600">
	<link rel="stylesheet" href="style.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
	<?php include 'dbDataParser.php'; ?>
	<br>
  <div class="navbar">
    <a class="active" href="index.php">Home</a>
    <a href="pred.php">Prediction</a>
  <a href="live_cams.php">Live Cameras</a>
    <div class="dropdown">
      <button class="dropbtn">Stations 
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
          <a href="#link1">link1</a>
          <a href="#link2">link2</a>
      </div>
    </div> 
  </div>
	<div id="marquee_0"></div>
	<br>
	<script>
		var id_data=<?php echo json_encode($id); ?>.map(Number).reverse();
		var temp_data=<?php echo json_encode($temp); ?>.map(Number).reverse();
		var hum_data=<?php echo json_encode($hum); ?>.map(Number).reverse();
		var bar_data=<?php echo json_encode($bar); ?>.map(Number).reverse();

		var id_data_max=Math.max.apply(Math, id_data);
		var temp_data_max=Math.max.apply(Math, temp_data);
		var hum_data_max=Math.max.apply(Math, hum_data);
		var bar_data_max=Math.max.apply(Math, bar_data);

		var id_data_min=Math.min.apply(Math, id_data);
		var temp_data_min=Math.min.apply(Math, temp_data);
		var hum_data_min=Math.min.apply(Math, hum_data);
		var bar_data_min=Math.min.apply(Math, bar_data);
		//console.log(temp_data);
		//console.log(hum_data);
		//console.log(bar_data);
	</script>
	<div id="forecast"></div>
	<div id="forecast_test"></div>
	<div class="grid-container">
		<div class="grid-item">MAX VALUES</div>
		<div class="grid-item">MIN VALUES</div> 
		<div class="grid-item">
			<div id="max_id"></div>
			<div id="max_temp"></div>
			<div id="max_hum"></div>
			<div id="max_bar"></div>
		</div>
		<div class="grid-item">
			<div id="min_id"></div>
			<div id="min_temp"></div>
			<div id="min_hum"></div>
			<div id="min_bar"></div>
		</div>
	</div>

	<script>
		document.getElementById("max_id").innerHTML='<img src="weather_icons/wi-time-2.svg" width="50" height="50" alt="time">'+String(id_data_max,2);
		document.getElementById("max_temp").innerHTML='<img src="weather_icons/wi-thermometer.svg" width="50" height="50" alt="thermometer">'+String(temp_data_max,2)+'<img src="weather_icons/wi-celsius.svg" width="50" height="50" alt="thermometer">';
		document.getElementById("max_hum").innerHTML='<img src="weather_icons/wi-humidity.svg" width="50" height="50" alt="humidity">'+String(hum_data_max,2)+"%";
		document.getElementById("max_bar").innerHTML='<img src="weather_icons/wi-barometer.svg" width="50" height="50" alt="barometer">'+String(bar_data_max,2)+"hPa";
	
		document.getElementById("min_id").innerHTML='<img src="weather_icons/wi-time-2.svg" width="50" height="50" alt="time">'+String(id_data_min,2);
		document.getElementById("min_temp").innerHTML='<img src="weather_icons/wi-thermometer.svg" width="50" height="50" alt="thermometer">'+String(temp_data_min,2)+'<img src="weather_icons/wi-celsius.svg" width="50" height="50" alt="thermometer">';
		document.getElementById("min_hum").innerHTML='<img src="weather_icons/wi-humidity.svg" width="50" height="50" alt="humidity">'+String(hum_data_min,2)+"%";
		document.getElementById("min_bar").innerHTML='<img src="weather_icons/wi-barometer.svg" width="50" height="50" alt="barometer">'+String(bar_data_min,2)+"hPa";
	</script>
	<script>
		document.getElementById("forecast").innerHTML='<b><h2 style="color:red;">'+zambretti(bar_data[bar_data.length - 19],bar_data[bar_data.length - 1])+'</h2></b>';
		document.getElementById("forecast_test").innerHTML='<b><h2 style="color:red;">'+zambretti_test(bar_data.slice(bar_data.length-19,bar_data.length-1))+'</h2></b>';
		
	</script>
	<canvas id="tempChart" width=100% height="20"></canvas>
	<canvas id="humChart" width=100% height="20"></canvas>
	<canvas id="barChart" width=100% height="20"></canvas>
	<script>
		//console.log(data);
		Chart.defaults.color = "#ffffffcc";
		plotData(id_data,temp_data,"tempChart","Temperature",Math.round(Math.min.apply(Math, temp_data))-5,Math.round(Math.max.apply(Math, temp_data))+5);
		plotData(id_data,hum_data,"humChart","Humidity",0,100);
		plotData(id_data,bar_data,"barChart","Pressure",Math.round(Math.min.apply(Math, bar_data))-10,Math.round(Math.max.apply(Math, bar_data))+10);
	</script>
</body>
</html>