	//var hours = currentTime.getHours(); //om de tijd in console te testen
var currentTime;
var hours;

// init message
var message = document.getElementById('date-text');

// tween message
TweenMax.to(message, 20, {
	left: -960,
	ease: Bounce.easeNone,
	repeat: -1
});

function updateTime() {
		currentTime = new Date();
	var monthArray = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
	var dayArray = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
	var month = monthArray[currentTime.getMonth()];
	var day = dayArray[currentTime.getDay()];
	var date = currentTime.getDate();
	var year = currentTime.getFullYear();
		hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	minutes = checkTime(minutes);
	seconds = checkTime(seconds);

	document.getElementById('time-text').innerHTML =
    hours + ":" + minutes + ":" + seconds;

    document.getElementById('date-text').innerHTML = day + " " + date +  " " + month +  " " + year;
    var time = setTimeout(updateTime,500);


    if (hours >= 5 && hours <= 8) {

    	document.getElementById("hello-text").innerHTML = "Goedemorgen";
    	document.body.background = "img/early-morning.jpg";

    } else if (hours >= 9 && hours <= 11) {

    	document.getElementById("hello-text").innerHTML = "Goedemorgen";
    	document.body.background = "img/morning.jpg";
    	// document.getElementsByClassName("morning");

	} else if (hours >= 12 && hours <= 17) {
		document.getElementById("hello-text").innerHTML = "Goedemiddag";
    	document.body.background = "img/morning.jpg";
    	// document.getElementById("morning").style.visibility = "visible";
    	// document.getElementsByClassName("morning");

    } else if(hours >= 18 && hours <= 20) {

    	document.getElementById("hello-text").innerHTML = "Goedenavond";
    	document.body.background = "img/early-morning.jpg";
    	document.getElementById("time-text").style.color = "#000";
    	// document.getElementById("morning").style.visibility = "visible";

    } else if(hours >= 21 && hours <= 23 || hours >= 0 && hours <= 4) {

    	document.getElementById("hello-text").innerHTML = "Goedenacht";
    	document.body.background = "img/night.jpg";
    	document.getElementById("time-text").style.color = "#fff";
    	document.getElementById("hello-text").style.color = "#fff";
    	document.getElementById("date-text").style.color = "#fff";
    	// document.getElementById("night").style.visibility = "visible";
    }
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

function checkVisual() {

	hours = currentTime.getHours();
	var timeline = new TimelineMax({ repeat: -1, ease: Power0.easeNone });

	//.to( target:Object, duration:Number, vars:Object, position:* ) : 
	//.from( target:Object, duration:Number, vars:Object, position:* ) : 
    if (hours >= 5 && hours <= 8) {

		timeline.to('.cloud', 1, { opacity: 1})
				.from('.layer', 200, { backgroundPositionX: 2400}, 'cloud');

    } else if (hours >= 9 && hours <= 11) {

		timeline.to('.sun', 1, { opacity: 1})
				.from('.layer', 200, { backgroundPositionX: 2400}, 'sun');

	} else if (hours >= 12 && hours <= 17) {

		timeline.to('.sun', 1, { opacity: 1})
				.from('.layer', 200, { backgroundPositionX: 2400}, 'sun');

    } else if(hours >= 18 && hours <= 20) {

		timeline.to('.cloud', 1, { opacity: 1})
				.from('.layer', 200, { backgroundPositionX: 2400}, 'cloud');

    } else if(hours >= 21 && hours <= 23 || hours >= 0 && hours <= 4) {

		timeline.to('.moon', 1, { opacity: 1})
				.from('.layer', 200, { backgroundPositionX: 2400}, 'moon');
    }
}


//Functies wordt aangeroepen
window.onload = function() {
	updateTime();
	checkVisual();
}