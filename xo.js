function XO(string) {
	// loop through the string, counting the x's. Set that equal to value of x
	// loop through string again, coutinging o's. Set to value of o.
	// compare x to o, return

	let countOfX = 0
	let countOfO = 0

	for (let i = 0; i < string.length; i++) {
		if (string.charAt(i) === 'x' || string.charAt(i) === 'X') {
			countOfX = countOfX + 1;
		} else if (string.charAt(i) === 'o' || string.charAt(i) === 'O') {
			countOfO = countOfO + 1
		}
	}

	return(console.log(countOfO === countOfX))
}

XO('XOXxOof')