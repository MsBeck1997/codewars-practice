// https://www.codewars.com/kata/583a02740b0a9fdf5900007c/javascript

// JavaScript: Write a function calcFuel that calculates the minimum amount of fuel needed to produce a certain number of iron ingots. This function should return an object of the form {lava: 2, blazeRod: 1, coal: 1, wood: 0, stick: 0}
//
// Each iron ingot takes 11 seconds to produce. Steve needs a lot of them, and he has the following fuel options to add into the furnace:
// Fuel sources:
// 		Buckets of lava, each lasts 800 seconds
// 		Blaze rod, each lasts 120 seconds
// 		Coals, each lasts 80 secondsAlt text
// 		Blocks of Wood, each lasts 15 seconds
// 		Sticks, each lasts 1 second

function calcFuel(numberOfIronOre) {

	// Convert IronOre to time to smelt (11 seconds per ore)
	const oreTime = numberOfIronOre * 11

	// Find amount of fuel (if possible) needed
	let lavaNeeded = Math.floor(oreTime / 800)
	let rodNeeded = Math.floor((oreTime % 800) / 120 )
	let coalNeeded = Math.floor((oreTime % 800 % 120 ) / 80)
	let woodNeeded = Math.floor((oreTime % 800 % 120 % 80 ) / 15)
	let stickNeeded = (oreTime % 800 % 120 % 80  % 15)

	let answer = {
		"Lava" : lavaNeeded,
		"Blaze Rods" : rodNeeded,
		"Coal" : coalNeeded,
		"Wood Blocks" : woodNeeded,
		"Sticks" : stickNeeded
	}

	return answer
}

console.log(calcFuel(384))