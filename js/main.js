function updateTime() {
	var currentTime = new Date();
	var monthArray = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
	var dayArray = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
	var month = monthArray[currentTime.getMonth()];
	var day = dayArray[currentTime.getDay()];
	var date = currentTime.getDate();
	var year = currentTime.getFullYear();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	minutes = checkTime(minutes);
	seconds = checkTime(seconds);
	document.getElementById('time-text').innerHTML =
    hours + ":" + minutes + ":" + seconds;
    document.getElementById('date-text').innerHTML = day + " " + date +  " " + month +  " " + year;
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



// var tl = new TimeLineMax();

//Functie wordt aangeroepen
window.onload = function() {
	updateTime();
}


