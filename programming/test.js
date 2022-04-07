let prompt = require ('prompt-sync')();

let name = prompt('What is your name? ');
console.log(`What a beautiful name ${name}`);

let age = prompt('what is your age? ');
{
if(age>18)
	console.log(`A mature person`);
	else
	console.log(`A Teenager`);
	}