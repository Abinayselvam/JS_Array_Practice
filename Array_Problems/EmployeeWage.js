const WAGE_PER_HOUR = 20;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const WORKING_DAYS = 20;

let dailyWageArray = [];

for (let day = 1; day <= WORKING_DAYS; day++) {

    let empCheck = Math.floor(Math.random() * 3);

    let hoursWorked = 0;

    switch (empCheck) {
        case 1:
            hoursWorked = PART_TIME_HOURS;
            break;

        case 2:
            hoursWorked = FULL_TIME_HOURS;
            break;

        default:
            hoursWorked = 0;
    }

    let dailyWage = hoursWorked * WAGE_PER_HOUR;

    dailyWageArray.push(dailyWage);
}

console.log("Daily Wage Array:");
console.log(dailyWageArray);