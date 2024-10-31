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
    let level1 = 2000;
    let incr = 200;
    let totalUpgradeCost = 0;

    for (let i = currentLevel + 1; i <= targetLevel; i++) {
        let cost = level1 + (incr * (i - 1));
        totalUpgradeCost += cost;
    }
    return totalUpgradeCost;
}

console.log(kakeralootsLevelUpgrade(0, 100));
