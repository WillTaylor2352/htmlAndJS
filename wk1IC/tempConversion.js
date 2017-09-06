alert("calculate farenheit");
var currTempFar = prompt("What is the temperature in celcius?"); //captures current temp as String
currTempFar = parseFloat(currTempFar); // converts to float

var currTempCel = (currTempFar - 32) * (5 / 9); // calculates and stores into var

alert("Current temp in Farenheit = " + currTempFar + "\r\nCurrent temp in Celcius = " + currTempCel);
// alert for the computed value


