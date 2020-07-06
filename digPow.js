// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p, we want to find
// a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal
// to k * n.
//
// In other words: Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
//
// If it is the case we will return k, if not return -1.

// Psuedocode:
// If both p and n are > 0,
	// convert n to an array of numbers 0-9 per index.
	// Calculate the 'bigboy number' using loop of index raised to p
	// loop through 'bigboy' number using while loop to find first divisor (if applicable) up to 'bigboy'
	// if divisor is less than 'bigboy' (aka there is a divisor) return divisor
		// else return -1


function digPow(n, p){
	if (n > 0 && p > 0) {

		// Converts string of n into an array
		let arrayOfNums = Array.from(String(n), Number)

		// Find the 'bigBoy' number
		let bigBoy = 0
		for (var i = 0; i < arrayOfNums.length; i++) {
			bigBoy += bigBoy + (arrayOfNums[i] ** (p + i))
		}

		// Find the divisors of bigBoy if possible
		let divisors = []
		for (var j = 2; j < bigBoy; j++) {
			if (bigBoy % j === 0) {
				divisors.push(j)
			}
		}

		// Return if/else
		if (divisors.length > 0) {
			return divisors[0]
		} else {
			return -1
		}

	} else {
		return ('Error: Both inputs must be a positive value')
	}
}