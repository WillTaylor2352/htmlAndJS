var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [77, 88, 98, 80];

var $ = function (id) { return document.getElementById(id); };

var addScore = function () {
	// get user entries
	var name = $("name").value;
    var score  = parseInt( $("score").value );
    
    // check entries for validity
    if (name == "" || isNaN(score) || score < 0 || score > 100) {
    	alert("You must enter a name and a valid score");
    }
	else {
		names[names.length] = name;
		scores[scores.length] = score;
	}
    $("name").focus();
};


window.onload = function () {
	$("add").onclick = addScore;
};


