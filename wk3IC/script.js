var $ = function(id){
	return document.getElementById(id);
	console.log("$ function loaded successfully");
}

var calcF = function(){
	var isValid = true;
	console.log("isValid set to true");
	
	var currTempFar = parseFloat($("temp").value);
	var currTempCel = 0;
	console.log("current val of currTempCel: " + currTempCel +
				" current val of currTempFar: " + currTempFar);
	
	if (isNaN(currTempFar)){
		$("error_temp").firstChild.nodeValue = "please clear all non numerical figures";
		$("answer").value = " ";
		isValid = false;
		console.log("there is a letter in the input. " +
					"isValid set to: " + isValid);
	}
	if(isValid){
		console.log("input is valid to some degree. proceeding w/program");
		currTempCel = (currTempFar - 32) * (5 / 9); 
		
		
		console.log("current val of currTempCel: " + currTempCel +
					" current val of currTempFar: " + currTempFar);
		//console.log("setting
		$("answer").value = currTempCel;
	}

}

var zeroAll = function(){
	$("error_temp").firstChild.nodeValue = "*";
	$("temp").value = "";
	
	$("answer").value = "";
}

var changeYellow = function(){
	console.log("focused on text field, changing to yellow");
	$("temp").style.backgroundColor = "yellow"; 
}

var changeBack = function(){
	console.log("blurred from text field, changing back");
	$("temp").style.backgroundColor = "white"; 
}

window.onload = function () {
    $("temp").onfocus = changeYellow;
	$("temp").onblur = changeBack;
	$("execute").onclick = calcF;
	$("clear").onclick = zeroAll;
	console.log("looking good on window load.");
}
	
