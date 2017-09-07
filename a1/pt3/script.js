function fortune()
{
alert("Let's see your fortune.");
var fortunes = 
	["Luck and prosperity follow you",
	"An apple sometimes falls far from the tree",
	"Smoke never falls",
	"Minders don't matter, Matterers don't mind",
	"Shadows never disappear"];
	
var choice = parseInt(prompt("Choose your fortune! (between one and five)"));
if( choice < 1 || choice > 5){
	alert("refresh the page and enter a valid number.");
	return;
}
choice -= 1;

alert("Your fortune is this: \n" + fortunes[choice]);
}
fortune();