function getDate() {
    let today = new Date();
    var day = "";

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    var day = today.toLocaleDateString("en-US", options);
    return day;
}

function getDay() {
    let today = new Date();
    var day = "";

    let options = {
        weekday: "long",
    }

    var day = today.toLocaleDateString("en-US", options);
    return day;
}

module.exports.getDate = getDate;
module.exports.getDay = getDay;