let birthMonthMap = new Map();

for (let month = 1; month <= 12; month++) {
    birthMonthMap.set(month, []);
}

for (let person = 1; person <= 50; person++) {

    let month = Math.floor(Math.random() * 12) + 1;

    birthMonthMap.get(month).push("Person" + person);
}

for (let [month, people] of birthMonthMap) {

    console.log(`Month ${month}:`);

    console.log(people.join(", "));

    console.log("----------------");
}