alert("Let's checkout.");
var item1 = parseFloat(prompt("What is the cost of item 1?"));
var item2 = parseFloat(prompt("What is the cost of item 2?"));

var combinedItems = item1 + item2;


alert("Total trip: " + combinedItems + "\n6% tax: " +
	(combinedItems * .06).toFixed(2) + "\nNew total: " + 
	(combinedItems * 1.06).toFixed(2));

