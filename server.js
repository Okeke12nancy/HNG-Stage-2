const express = require("express");
const request = require("request");
const geoip = require("geoip-lite");

const app = express();

// app.get("/api/hello", (req, res) => {
//   let visitorName = req.query.visitor_name;

//   let clientIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

//   if (clientIp === "::1" || clientIp === "127.0.0.1") {
//     clientIp = "127.0.0.1";
//   } else if (clientIp.includes("::ffff:")) {
//     clientIp = clientIp.split("::ffff:")[1];
//   }

//   // Get location from IP address
//   let city = "new york";
//   let geo = geoip.lookup(clientIp);
//   let namedCity = geo ? geo.city : "Unknown";

//   const apiKey = "d84f657fe14d7afad14be2cdc5d82ee0";
//   let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${namedCity}&appid=${apiKey}&units=metric`;

//   request(weatherUrl, (error, response, body) => {
//     if (error) {
//       return res.status(500).send("Error fetching weather data.");
//     }

//     let weatherData = JSON.parse(body);
//     if (response.statusCode === 200) {
//       let temperature = weatherData.main.temp;
//       res.json({
//         client_ip: clientIp,
//         location: city,
//         greeting: `Hello, ${visitorName}!, the temperature is ${temperature} degrees Celsius in ${city}`,
//       });
//     } else {
//       res.status(500).send("Error fetching weather data.");
//     }
//   });
// });

app.get("*", (re, res) => {
  res.json({
    name: "Nancy",
  });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
