function event_details(b) {
    if (b == "") {
        return
    } else {} if (window.XMLHttpRequest) {
        var a = new XMLHttpRequest()
    } else {
        a = new ActiveXObject("Microsoft.XMLHTTP")
    }
    a.onreadystatechange = function () {
        if (a.readyState == 4 && a.status == 200) {
            var c = a.responseText;
            details = JSON.parse(c);
            var d = document.getElementById("eventName");
            d.innerHTML = " " + details.name;
            document.getElementById("navDetails").innerHTML = " ";
            defineDiv();
            showNav();
            descDiv.click()
        }
    };
    a.open("GET", "php/event_details.php?event=" + b, true);
    a.send()
}

function showNav() {
    descDiv.style.display = "inline";
    navDiv.style.display = "inline";
    otherDiv.style.display = "inline";
    rulesDiv.style.display = "inline";
    eventNavDiv.style.display = "inline";
    eventNameDiv.style.display = "inline"
}

function defineDiv() {
    descDiv = document.getElementById("description");
    rulesDiv = document.getElementById("rules");
    otherDiv = document.getElementById("otherDetails");
    navDiv = document.getElementById("navDetails");
    eventNavDiv = document.getElementById("eventNav");
    eventNameDiv = document.getElementById("eventName")
}

function showEventDescription() {
    defineDiv();
    descDiv.style.border = "medium outset";
    rulesDiv.style.border = "thin solid";
    otherDiv.style.border = "thin solid";
    navDiv.innerHTML = details.desc
}

function showEventRules() {
    defineDiv();
    descDiv.style.border = "thin solid";
    rulesDiv.style.border = "medium outset";
    otherDiv.style.border = "thin solid";
    navDiv.innerHTML = details.rules
}

function showEventOherDetails() {
    defineDiv();
    descDiv.style.border = "thin solid";
    rulesDiv.style.border = "thin solid";
    otherDiv.style.border = "medium outset";
    navDiv.innerHTML = details.other
}

function display_events(b) {
    if (b == "") {
        return
    } else {} if (window.XMLHttpRequest) {
        var a = new XMLHttpRequest()
    } else {
        a = new ActiveXObject("Microsoft.XMLHTTP")
    }
    a.onreadystatechange = function () {
        if (a.readyState == 4 && a.status == 200) {
            document.getElementById("eventList").innerHTML = a.responseText;
            document.getElementById("eventNav").style.display = "none";
            document.getElementById("eventName").style.display = "none";
            document.getElementById("navDetails").innerHTML = "Select Event from left navigation menu"
        }
    };
    a.open("GET", "php/events.php?cat=" + b, true);
    a.send()
}

function mOver(a) {
    a.style.backgroundColor = "#CCCCCC"
}

function mOut(a) {
    a.style.backgroundColor = "#EEE"
};