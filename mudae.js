function kakeratowercal(floorlevel) {
	let floor = 0;
	let total = 0;
	for (let i = 1; i <= floorlevel; i++) {
		let incr = 5000;
		floor += incr;
		total += floor;
		if (i === 1) {
			console.log("Build " + i + "st floor: cost " + floor);
		} else if (i === 2) {
			console.log("Build " + i + "nd floor: cost " + floor);
		} else if (i === 3) {
			console.log("Build " + i + "rd floor: cost " + floor);
		} else {
			console.log("Build " + i + "th floor: cost " + floor);
		}
	}
	return "Total = " + total;
}
// console.log(kakeratowercal(12));

function kakeralootsLevelUpgrade(currentLevel, targetLevel) {
	let initialCost = 2000;
	let increment = 200;
	let totalUpgradeCost = 0;

	for (let i = currentLevel + 1; i <= targetLevel; i++) {
		let cost = initialCost + increment * (i - 1);
		totalUpgradeCost += cost;
	}
	return {
		totalUpgradeCost,
		currentLevel,
		targetLevel,
	};
}

// const klLevelUpgradeResult = kakeralootsLevelUpgrade(5, 9);

// console.log(
// 	`Total cost for upgrading from ${klLevelUpgradeResult.currentLevel} to ${klLevelUpgradeResult.targetLevel} is ${klLevelUpgradeResult.totalUpgradeCost}`
// );

function calculateBalancedUpgrades(kakera, quantityLevel, qualityLevel) {
	let totalKakeraConsumed = 0;
	const initialCost = 2000;
	const increment = 200;
	const currentQuantityLevel = quantityLevel;
	const currentQualityLevel = qualityLevel;

	// Helper function to calculate the cost for the next upgrade
	const calculateCost = (level) => initialCost + level * increment;

	if (kakera < Math.min(calculateCost(quantityLevel), calculateCost(qualityLevel))) {
		return {
			message: "Kakera is insufficient",
		};
	}

	// Step 1: Balance Quantity and Quality levels
	while (quantityLevel < qualityLevel) {
		const cost = calculateCost(quantityLevel);
		if (totalKakeraConsumed + cost > kakera) break;

		// console.log(`Upgrading Quantity from level ${quantityLevel} to level ${quantityLevel + 1}, cost: ${cost}`);
		totalKakeraConsumed += cost;
		quantityLevel++;
	}

	while (qualityLevel < quantityLevel) {
		const cost = calculateCost(qualityLevel);
		if (totalKakeraConsumed + cost > kakera) break;

		// console.log(`Upgrading Quality from level ${qualityLevel} to level ${qualityLevel + 1}, cost: ${cost}`);
		totalKakeraConsumed += cost;
		qualityLevel++;
	}

	// Step 2: Distribute upgrades equally
	while (true) {
		const quantityCost = calculateCost(quantityLevel);
		const qualityCost = calculateCost(qualityLevel);

		// console.log(totalKakeraConsumed, quantityCost, qualityCost, kakera);
		// console.log(totalKakeraConsumed + quantityCost + qualityCost <= kakera);

		if (totalKakeraConsumed + quantityCost + qualityCost <= kakera) {
			// console.log(`Upgrading Quantity from level ${quantityLevel} to ${quantityLevel + 1}, cost: ${quantityCost}`);
			// console.log(`Upgrading Quality from level ${qualityLevel} to ${qualityLevel + 1}, cost: ${qualityCost}`);

			totalKakeraConsumed += quantityCost + qualityCost;

			quantityLevel++;
			qualityLevel++;
		} else {
			break;
		}
	}

	// Step 3: Calculate remaining kakera
	const remainingKakera = kakera - totalKakeraConsumed;
	const quantityCost = kakeralootsLevelUpgrade(currentQuantityLevel, quantityLevel);
	const qualityCost = kakeralootsLevelUpgrade(currentQualityLevel, qualityLevel);

	return {
		finalQuantityLevel: quantityLevel,
		finalQualityLevel: qualityLevel,
		totalKakeraConsumed,
		remainingKakera,
		quantityCost,
		qualityCost,
	};
}

// Example Input
const quantityLevel = 5;
const qualityLevel = 5;
const kakera = 2181497;

// Calculate Upgrades
const result = calculateBalancedUpgrades(kakera, quantityLevel, qualityLevel);

if (result.message) {
	console.log(result.message);
} else {
	console.log(`Final Quantity Level: ${result.finalQuantityLevel} Total: ${result.quantityCost.totalUpgradeCost}`);
	console.log(`Final Quality Level: ${result.finalQualityLevel} Total: ${result.qualityCost.totalUpgradeCost}`);
	console.log(`Total Kakera Consumed: ${result.totalKakeraConsumed}`);
	console.log(`Remaining Kakera: ${result.remainingKakera}`);
}
