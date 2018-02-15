/*
Author: Jiminy Cricket
Version: 1.0
Purpose: Find Prime Numbers
*/

"use strict";

let primes = [];
let count = Number(1);

function main() {
	while (1 === 1) {
		incrementCount();
		if (count > 10) {
			if (count%10 === 1 || count%10 === 3 || count%10 === 7 || count %10 === 9) {
				calculatePrime();
			}
		} else {
			calculatePrime();
		}
	}
}

main();

function incrementCount() {
	count++;
}

function calculatePrime() {
	let check = Number(0);
	const MAX_VALUE = count-1;
	const CHECK_ALL = count-2;
	for (let i = 2; i <= MAX_VALUE; i++) {
		if (count%i !== 0) {
			check++;
		}
	}
	if (check === CHECK_ALL) {
		console.log(count + " is prime.");
	}
}