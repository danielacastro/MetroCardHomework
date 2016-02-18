var timesride; 
var monthly;


function metroCalc(){
	timesride = document.getElementById("timesPerWeek").value;
    monthly = timesride * 4 * 2.75;
	alert(" You are paying " + 
		monthly + 
		" dollars" +
		" per month "); 
rightPass();

}

function rightPass (){
	if (monthly > 116 ) {
		alert("You should buy a monthly MetroCard");
	} else {
		alert("You don't need a monthly MetroCard");
	}
}
