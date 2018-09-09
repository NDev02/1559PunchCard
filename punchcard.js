
var target = [42.992217, -77.416165];
// var pos = [42.992028, -77.415898];
var dist;
var local;

function signIn() 
{
    if(localStorage.getItem("username") == undefined)
    {
        alert("You have to login with your school email first.");
        location.href = "./portal.html";
    }
    else if(dist > 2)
    {
        alert("You are not in range of the school, sign-in unavailible.");
    }
    else
    {
        var date = new Date();
        var dateStr = `${date.getMonth()}-${date.getDay()}-${date.getFullYear()}`;
        var timeStr = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        localStorage.setItem("lastLogin", dateStr);
        firebase.database().ref(`/${localStorage.getItem("username").replace(/ /g, "_").replace(/'/g, "")}/${dateStr}/in`).set(timeStr, function()
        {
            alert("Your attendence has been recorded.");
            location.reload();
        });
    }
}

function signOut()
{
    var date = new Date();
    var dateStr = `${date.getMonth()}-${date.getDay()}-${date.getFullYear()}`;
	alert(dateStr);
    var timeStr = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    firebase.database().ref(`/${localStorage.getItem("username").replace(/ /g, "_").replace(/'/g, "")}/${dateStr}/out`).set(timeStr, function()
    {
        alert("Have a good night!");
    });
}

function checkLocation()
{
    navigator.geolocation.getCurrentPosition(
        function(posi)
        {
            //console.log(posi);
            if(window["pos"] == undefined)
	    {
                window["pos"] = [posi.coords.latitude, posi.coords.longitude];
	    }
            document.querySelector("#sync").hidden = true;
            document.querySelector("#in").disabled = false;
            document.querySelector("#out").disabled = false;
            dist = (distance(pos[0], pos[1], target[0], target[1]));
            local = posi;
        },
	function(err)
	{
	    alert(err);
	}
    );
}

window.onload = function()
{
    checkLocation();
    document.querySelector("#last-login").innerHTML = localStorage.getItem("lastLogin") || "Unknown";
    var date = new Date(Date());
    var dateStr = `${date.getMonth()}-${date.getDay()}-${date.getFullYear()}`;
    if(dateStr == localStorage.getItem("lastLogin"))
    {
        document.querySelector("#in").onclick = function()
        {
            alert("You have already signed-in today! Get to work!");
        };
    }
}

//42.991710, -77.416199

function distance(lat1, lon1, lat2, lon2, unit) {
	var radlat1 = Math.PI * lat1/180
	var radlat2 = Math.PI * lat2/180
	var theta = lon1-lon2
	var radtheta = Math.PI * theta/180
	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	if (dist > 1) {
		dist = 1;
	}
	dist = Math.acos(dist)
	dist = dist * 180/Math.PI
	dist = dist * 60 * 1.1515
	if (unit=="K") { dist = dist * 1.609344 }
	if (unit=="N") { dist = dist * 0.8684 }
	return dist
}
