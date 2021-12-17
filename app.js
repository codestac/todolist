const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// embedded javascript templates defination
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
	
	var today = new Date();
	var currentDay = today.getDay();
	var day = "";
	console.log(currentDay);
	if (currentDay === 6 || currentDay === 0) {
		day = "weekend";
		// res.sendFile(__dirname + "/weekend.html");
	} else {
		day = "weekday";
		// res.sendFile(__dirname + "/weekday.html");
	}

	switch (currentDay) {
		case 0: day = "Sunday"; break;
		case 1: day = "Monday"; break;
		case 2: day = "Tuesday"; break;
		case 3: day = "Wednesday"; break;
		case 4: day = "Thursday"; break;
		case 5: day = "Friday"; break;
		case 6: day = "Saturday"; break;
		default: console.log("Error: Current day is equal to: " + currentDay);
	}
	res.render("list", { kindOfDay: day });
})

app.listen(3000, function (req, res) {
	console.log("Server is up and running!")
})