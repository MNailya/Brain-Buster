//GitHub: https://github.com/MNailya/Brain-Buster

// assign variable for tails and heads
const tails = 0;
const heads = 1;
//flip function
const flip = () => {
	let coinFlip = Math.floor(Math.random()*2);
	 if (coinFlip === tails){
	 	//console.log('tails');
		return tails;
	} else{
		//console.log('heads');
		return heads;
	}
} 
//start with empty records
let tailsHigh = 0;
let tailsLow = 0;
let headsHigh = 0;
let headsLow = 0;
//flipMany function
const flipMany = () => {
	let tailsCounter = 0;
	let headsCounter = 0;
	
	for(i=1; i<=100; i++){
		if (flip() == tails){
			tailsCounter = tailsCounter + 1;
		} else {
			headsCounter = headsCounter + 1;
		}
	}
	 console.log(`tails=${tailsCounter}`);
	 console.log(`heads=${headsCounter}`);
	 console.log(`-------------`);
	 //check the record
	if(tailsCounter > tailsHigh){
		tailsHigh = tailsCounter;
		headsLow = headsCounter;
	} else if (headsCounter > headsHigh) {
		headsHigh = headsCounter;
		tailsLow = tailsCounter;
	};
}
//generate flipManyGroups function depending on users number
let quantity = 0;
document.querySelector('form').addEventListener('submit', function(event){
	event.preventDefault();
	quantity = document.querySelector("#quantity").value;
	//call flipManyGroups function
	flipManyGroups(quantity);
});
	//flifManyGroups function
	const flipManyGroups = (quantity) =>{
		for (j=1; j<=quantity; j++){
			flipMany();
		}
		//print out values
		document.querySelector('.result').style.display = 'block';
		document.querySelector('#highestTails').innerHTML = tailsHigh;
		document.querySelector('#lowestTails').innerHTML = tailsLow;
		document.querySelector('#highestHeads').innerHTML = headsHigh;
		document.querySelector('#lowestHeads').innerHTML = headsLow;
		console.log(`highestTails: ${tailsHigh} | lowestTails: ${tailsLow} | lowestHeads: ${headsLow} | highestHeads: ${headsHigh}`);
		//reset the record values
		tailsHigh = 0;
		tailsLow = 0;
		headsHigh = 0;
		headsLow = 0;
	}