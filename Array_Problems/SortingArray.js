
//With sorting min max
let numbers = [];

for(let i =0; i<10;i++)
{
    numbers.push(Math.floor(Math.random() * 900) + 100);
}

console.log("Before Sorting :" +numbers);

numbers.sort((a,b)=>a-b);
console.log("After Sorting :" +numbers);

console.log("Minimum :"+numbers[0]);
console.log("Maximum :"+numbers[numbers.length-2]);