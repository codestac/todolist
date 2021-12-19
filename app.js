const express = require("express");
const bodyParser = require("body-parser");
const res = require("express/lib/response");

const app = express();

var items = ["Do the dishes"];
var workItems = [];

// embedded javascript templates defination
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", function(req, res) {

    let today = new Date();
    var day = "";

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    var day = today.toLocaleDateString("en-US", options)

    res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", function(req, res) {
    var item = req.body.newItem;

    if (req.body.list === "WorkItem") {
        workItems.push(item);
        res.redirect("/work")
    } else {
        items.push(item);
        res.redirect("/");
    }

});

app.get("/work", function(req, res) {
    res.render("list", { listTitle: "Work List", newListItems: workItems })
})

app.get("/about", function(req, res) {
    res.render("about");
})

app.post("/work", function(req, res) {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work")
})

app.listen(3000, function(req, res) {
    console.log("Server is up and running!")
})

//earlier method of fetching the day and assinging to individual HTML pages.
// var currentDay = today.getDay();

// console.log(currentDay);
// if (currentDay === 6 || currentDay === 0) {
// 	day = "weekend";
// 	// res.sendFile(__dirname + "/weekend.html");
// } else {
// 	day = "weekday";
// 	// res.sendFile(__dirname + "/weekday.html");
// }

// switch (currentDay) {
// 	case 0: day = "Sunday"; break;
// 	case 1: day = "Monday"; break;
// 	case 2: day = "Tuesday"; break;
// 	case 3: day = "Wednesday"; break;
// 	case 4: day = "Thursday"; break;
// 	case 5: day = "Friday"; break;
// 	case 6: day = "Saturday"; break;
// 	default: console.log("Error: Current day is equal to: " + currentDay);
// }