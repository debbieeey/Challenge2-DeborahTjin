	//var hours = currentTime.getHours(); //om de tijd in console te testen

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

    if(hours >= 5 && hours <= 8) {
    	document.body.background = "img/early-morning.jpg";
    }

    if(hours >= 9 && hours <= 17) {
    	document.body.background = "img/morning.jpg";
    	// document.getElementById("morning").style.visibility = "visible";
    }

    if(hours >= 18 && hours <= 20) {
    	document.body.background = "img/early-morning.jpg";
    	document.getElementById("time-text").style.color = "#000";
    	// document.getElementById("morning").style.visibility = "visible";
    }

    if(hours >= 21 && hours <= 23 || hours >= 0 && hours <= 3) {
    	document.body.background = "img/night.jpg";
    	document.getElementById("night").style.visibility = "visible";
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


//Functie wordt aangeroepen
window.onload = function() {
	updateTime();
}


//TweenMax.to(target, duration, {vars});
// TweenMax.to("#time-text", 2, {
// 	color:"#fff",
// 	ease: Power0.easeNone,
// 	repeat: -1
// });

TweenMax.to("#morning", 2, {
	ease: Power0.easeNone,
	x: 100,
	repeat: -1
});

TweenMax.to("#night", 2, {
	ease: Power0.easeNone,
	x: 100,
	repeat: -1
});




//.to( target:Object, duration:Number, vars:Object, position:* ) : 
//.from( target:Object, duration:Number, vars:Object, position:* ) : 

// set timeline
		var timeline = new TimelineMax({ repeat: -1, ease: Power0.easeNone });

		// amimate timeline
		timeline.to('.morning', 1, { opacity: 1})
				.from('.layer', 200, { backgroundPositionX: 2400}, 'morning');


