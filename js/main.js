	//var hours = currentTime.getHours(); //om de tijd in console te testen
<<<<<<< HEAD
//Varialelen currentTime en hours zet ik bovenaan alle functies
//zonder ze te declaren. Op deze manier kan ik de variabelen voor elke functie gebruiken. 
var currentTime;
var hours;

//variabele voor id date-text
var message = document.getElementById('date-text');

// Deze code zorgt ervoor dat de datum herhaaldelijk van rechts naar links wordt geanimeert
TweenMax.to(message, 20, {
	left: -1060,
=======
var currentTime;
var hours;

// init message
var message = document.getElementById('date-text');

// tween message
TweenMax.to(message, 20, {
	left: -960,
>>>>>>> 892f302f204d75f1fd6cbe9ebcdfaa928dc45543
	ease: Bounce.easeNone,
	repeat: -1
});

<<<<<<< HEAD
//De functie updateTime zorgt ervoor dat de tijd, datum en welkomstbericht op een bepaalde tijd en dag worden
//bijgewerkt
=======
>>>>>>> 892f302f204d75f1fd6cbe9ebcdfaa928dc45543
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

<<<<<<< HEAD
	//Haalt de id time-text uit de HTML en toont uren, minuten en seconden
	document.getElementById('time-text').innerHTML =
    hours + ":" + minutes + ":" + seconds;

    //Haalt de id date-text uit de HTML en toon dag, datum, maand en jaar
    //Word om de 500 miliseconden bijgewerkt
=======
	document.getElementById('time-text').innerHTML =
    hours + ":" + minutes + ":" + seconds;

>>>>>>> 892f302f204d75f1fd6cbe9ebcdfaa928dc45543
    document.getElementById('date-text').innerHTML = day + " " + date +  " " + month +  " " + year;
    var time = setTimeout(updateTime,500);


<<<<<<< HEAD
    //Laat de tekst 'Goedemorgen' en bijbehorende achtergrond zien wanneer 
    //hours groter en gelijk is aan 5 EN kleiner en gelijk aan 8
=======
>>>>>>> 892f302f204d75f1fd6cbe9ebcdfaa928dc45543
    if (hours >= 5 && hours <= 8) {

    	document.getElementById("hello-text").innerHTML = "Goedemorgen";
    	document.body.background = "img/early-morning.jpg";

    } else if (hours >= 9 && hours <= 11) {
<<<<<<< HEAD
    //Laat de tekst 'Goedemorgen' en bijbehorende achtergrond zien wanneer 
    //hours groter en gelijk is aan 9 EN kleiner en gelijk aan 11

    	document.getElementById("hello-text").innerHTML = "Goedemorgen";
    	document.body.background = "img/morning.jpg";

	} else if (hours >= 12 && hours <= 17) {
	//Laat de tekst 'Goedemiddag' en bijbehorende achtergrond zien wanneer 
    //hours groter en gelijk is aan 12 EN kleiner en gelijk aan 17

		document.getElementById("hello-text").innerHTML = "Goedemiddag";
    	document.body.background = "img/morning.jpg";

    } else if(hours >= 18 && hours <= 20) {
	//Laat de tekst 'Goedenavond' en bijbehorende achtergrond zien wanneer 
    //hours groter en gelijk is aan 18 EN kleiner en gelijk aan 20
=======

    	document.getElementById("hello-text").innerHTML = "Goedemorgen";
    	document.body.background = "img/morning.jpg";
    	// document.getElementsByClassName("morning");

	} else if (hours >= 12 && hours <= 17) {
		document.getElementById("hello-text").innerHTML = "Goedemiddag";
    	document.body.background = "img/morning.jpg";
    	// document.getElementById("morning").style.visibility = "visible";
    	// document.getElementsByClassName("morning");

    } else if(hours >= 18 && hours <= 20) {
>>>>>>> 892f302f204d75f1fd6cbe9ebcdfaa928dc45543

    	document.getElementById("hello-text").innerHTML = "Goedenavond";
    	document.body.background = "img/early-morning.jpg";
    	document.getElementById("time-text").style.color = "#000";
<<<<<<< HEAD

    } else if(hours >= 21 && hours <= 23 || hours >= 0 && hours <= 4) {
	//Laat de tekst 'Goedenacht' en bijbehorende achtergrond zien wanneer 
    //hours groter en gelijk is aan 21 EN kleiner en gelijk aan 23
    //OF wanneer hours groter en gelijk is aan 0 en kleiner en gelijk is aan 4
=======
    	// document.getElementById("morning").style.visibility = "visible";

    } else if(hours >= 21 && hours <= 23 || hours >= 0 && hours <= 4) {
>>>>>>> 892f302f204d75f1fd6cbe9ebcdfaa928dc45543

    	document.getElementById("hello-text").innerHTML = "Goedenacht";
    	document.body.background = "img/night.jpg";
    	document.getElementById("time-text").style.color = "#fff";
    	document.getElementById("hello-text").style.color = "#fff";
    	document.getElementById("date-text").style.color = "#fff";
<<<<<<< HEAD
=======
    	// document.getElementById("night").style.visibility = "visible";
>>>>>>> 892f302f204d75f1fd6cbe9ebcdfaa928dc45543
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

<<<<<<< HEAD
//Met deze functie laat ik vectors animeren. 
//Binnen een bepaalde tijd laat ik een wolk, de zon of de maan van 
//links naar rechts animeren
=======
>>>>>>> 892f302f204d75f1fd6cbe9ebcdfaa928dc45543
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


<<<<<<< HEAD
//Functies worden aangeroepen
=======
//Functies wordt aangeroepen
>>>>>>> 892f302f204d75f1fd6cbe9ebcdfaa928dc45543
window.onload = function() {
	updateTime();
	checkVisual();
}