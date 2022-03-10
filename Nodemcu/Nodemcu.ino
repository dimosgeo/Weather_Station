#ifdef ESP32
  #include <WiFi.h>
  #include <HTTPClient.h>
#else
  #include <ESP8266WiFi.h>
  #include <ESP8266HTTPClient.h>
  #include <WiFiClient.h>
#endif

#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BME280.h>

// Replace with your network credentials
const char* ssid     = "SSID";
const char* password = "PASSWORD";

// REPLACE with your Domain name and URL path or IP address with path
const char* serverName = "http://www.site.com/dbDataPusher.php";

// Keep this API Key value to be compatible with the PHP code provided in the project page. 
// If you change the apiKeyValue value, the PHP file /post-data.php also needs to have the same key 
String apiKeyValue = "APIKEY";

Adafruit_BME280 bme;  // I2C

HTTPClient http; 
WiFiClient client;

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  Serial.println("Connecting");
  while(WiFi.status() != WL_CONNECTED) { 
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connected to WiFi network with IP Address: ");
  Serial.println(WiFi.localIP());

  // (you can also pass in a Wire library object like &Wire2)
  bool status = bme.begin(0x76);
  if (!status) {
    Serial.println("Could not find a valid BME280 sensor, check wiring or change I2C address!");
    while (1);
  }

  //Check WiFi connection status
  if(WiFi.status()== WL_CONNECTED){
    // Prepare your HTTP POST request data
    String httpRequestData = "?api_key=" + apiKeyValue + "&temperature=" + String(bme.readTemperature())
                           + "&humidity=" + String(bme.readHumidity()) + "&pressure=" + String(bme.readPressure()/100.0F+58); 
    
    // Your Domain name with URL path or IP address with path
    http.begin(client,serverName+httpRequestData);
   
    // Specify content-type header
    //http.addHeader("Content-Type", "text/plain");

    // Send HTTP POST request
    int httpResponseCode = http.GET();

    while (httpResponseCode<=0) {
      Serial.println(httpResponseCode);
      httpResponseCode = http.GET();
    }
    
    // Free resources
    http.end();
  }
  else {
    Serial.println("WiFi Disconnected");
  }
  
  //Send an HTTP POST request every 5 minutes
  //delay(300000);
  ESP.deepSleep(3e8); 
}

void loop() {

}
