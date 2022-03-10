<!DOCTYPE html>
<html>
<head>
	<link rel="icon" href="weather_icons/web_icon.png">
	<title>Weather</title>
	<meta http-equiv="refresh" content="600">
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<br>
  <div class="navbar">
    <a href="index.php">Home</a>
    <a class="active" href="pred.php">Prediction</a>
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
	<br>
	<iframe width=100% height=800px src="https://embed.windy.com/embed2.html?lat=39.544&lon=20.860&detailLat=39.640&detailLon=20.845&width=800&height=500&zoom=10&level=surface&overlay=rain&product=ecmwf&menu=&message=true&marker=&calendar=24&pressure=&type=map&location=coordinates&detail=true&metricWind=bft&metricTemp=%C2%B0C&radarRange=-1" frameborder="0"></iframe>
	<br>
	<div class="box">
	  <iframe src="https://www.meteoblue.com/el/%CE%BA%CE%B1%CE%B9%CF%81%CF%8C%CF%82/widget/three/%ce%99%cf%89%ce%ac%ce%bd%ce%bd%ce%b9%ce%bd%ce%b1_%ce%95%ce%bb%ce%bb%ce%ac%ce%b4%ce%b1_261779?geoloc=fixed&nocurrent=0&noforecast=0&days=7&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&layout=dark" allowtransparency="false" frameborder="0" scrolling="no" style="width: 905px; height: 623px" align="left"> </iframe>
	</div>
	<div class="box">
	  <iframe src="https://www.meteoblue.com/el/%CE%BA%CE%B1%CE%B9%CF%81%CF%8C%CF%82/widget/daily/%ce%99%cf%89%ce%ac%ce%bd%ce%bd%ce%b9%ce%bd%ce%b1_%ce%95%ce%bb%ce%bb%ce%ac%ce%b4%ce%b1_261779?geoloc=fixed&days=7&tempunit=CELSIUS&windunit=BEAUFORT&precipunit=MILLIMETER&coloured=coloured&pictoicon=0&pictoicon=1&maxtemperature=0&maxtemperature=1&mintemperature=0&mintemperature=1&windspeed=0&windspeed=1&windgust=0&winddirection=0&winddirection=1&uv=0&uv=1&humidity=0&humidity=1&precipitation=0&precipitation=1&precipitationprobability=0&precipitationprobability=1&spot=0&spot=1&pressure=0&pressure=1&layout=dark" allowtransparency="false" frameborder="0" scrolling="no" style="width: 878px; height: 745px" align="right"></iframe>
	</div>
</body>
</html>