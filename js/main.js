function updateTime() {
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	minutes = checkTime(minutes);
	seconds = checkTime(seconds);
	document.getElementById('time-text').innerHTML =
    hours + ":" + minutes + ":" + seconds;
    var time = setTimeout(updateTime,500);
}

//Met deze functie wordt de tijd gecontroleerd
function checkTime(i) {
	//als i kleiner is dan 10, dan wordt er een 0 voor het cijfer bij gezet
	//i wordt dan terug gegeven
    if (i < 10) 
    {
    	i = "0" + i
    };  
    return i;
}

//Functie wordt aangeroepen
window.onload = function() {
	updateTime();
}


