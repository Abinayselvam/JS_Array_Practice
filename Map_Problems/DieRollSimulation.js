let diceMap = new Map();

for (let i = 1; i <= 6; i++) {
    diceMap.set(i, 0);
}

let finished = false;

while (!finished) {

    let roll = Math.floor(Math.random() * 6) + 1;

    diceMap.set(roll, diceMap.get(roll) + 1);

    if (diceMap.get(roll) === 10) {
        finished = true;
    }
}

console.log("Dice Counts:");

for (let [key, value] of diceMap) {
    console.log(key, "=>", value);
}

let maxNumber;
let minNumber;

let max = -Infinity;
let min = Infinity;

for (let [key, value] of diceMap) {

    if (value > max) {
        max = value;
        maxNumber = key;
    }

    if (value < min) {
        min = value;
        minNumber = key;
    }
}

console.log("Maximum Times:", maxNumber);
console.log("Minimum Times:", minNumber);