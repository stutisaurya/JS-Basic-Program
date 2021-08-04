console.log("Printing the Harmonic Number");
let number = Math.floor(Math.random() *10);
console.log("Random Number to find Harmonic number: "+number);
let H = 0;
for( i=1;i<=number;i++){
	H=1/i+H ;
	console.log("Harmonic number of position "+(i)+" is "+H);
}