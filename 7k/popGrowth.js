// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2% per
// year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its
// population greater or equal to p = 1200 inhabitants?

/* @Params
			p0 - Initial Population
			percent - Percent increase per year
			aug - Inhabitants coming/leaving per year
			p - Population goal
 */

function nbYear(p0, percent, aug, p) {
	// Convert percent given to actual percentage to use
	let percentCalc = (percent / 100)

	// Population & Year Counters
	let initialPopulation = p0
	let populationAddition = 0
	let population = initialPopulation + populationAddition
	let year = 0

	while (population < p) {
		year++
		populationAddition += ((population * percentCalc) + aug)
	}

	return year
}

console.log(nbYear(1500, 5, 100, 5000))