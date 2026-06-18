const WAGE_PER_HOUR = 20;
const FULL_TIME_WAGE = 160;

let dailyWageArray = [
    160, 80, 0, 160, 80,
    160, 160, 0, 80, 160,
    80, 160, 0, 160, 80,
    160, 160, 80, 0, 160
];

let totalWage = dailyWageArray.reduce(
    (total, wage) => total + wage,
    0
);

console.log("Total Wage:", totalWage);

let dayWageMap = dailyWageArray.map(
    (wage, index) =>
        `Day ${index + 1} = ${wage}`
);

console.log(dayWageMap);
let fullTimeDays = dailyWageArray
    .map((wage, index) => wage === FULL_TIME_WAGE ? index + 1 : null)
    .filter(day => day !== null);

console.log("Full Time Days:", fullTimeDays);
let firstFullTimeDay =
    dailyWageArray.find(
        wage => wage === FULL_TIME_WAGE
    );

console.log(
    "First Full Time Wage:",
    firstFullTimeDay
);
console.log(
    "Day:",
    dailyWageArray.indexOf(FULL_TIME_WAGE) + 1
);
let everyFullTime =
    dailyWageArray
        .filter(wage => wage === FULL_TIME_WAGE)
        .every(wage => wage === FULL_TIME_WAGE);

console.log(
    "Every Full Time Wage Correct:",
    everyFullTime
);
let hasPartTime =
    dailyWageArray.some(
        wage => wage === 80
    );

console.log(
    "Part Time Wage Present:",
    hasPartTime
);
let daysWorked =
    dailyWageArray.filter(
        wage => wage > 0
    ).length;

console.log(
    "Days Worked:",
    daysWorked
);