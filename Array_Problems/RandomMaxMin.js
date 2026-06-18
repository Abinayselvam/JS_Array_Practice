//1. Generate 10 Random 3-Digit Numbers and Find 2nd Largest & 2nd Smallest (Without Sorting)
let number = [];

for(let i =0;i<10;i++)
{
    number.push(   Math.floor(Math.random() * 900) + 100);
}

console.log(number);
let largest = -Infinity;
let secondLargest = -Infinity;

let smallest = Infinity;
let secondSmallest = Infinity;
for(let num of number)
{
    if(num>largest)
    {
        secondLargest = largest;
        largest = num;
    }
    else if(num>secondLargest && num!==largest)
    {
        secondSmallest = num;
    }
    if(num<smallest)
    {
        secondSmallest = smallest;
        smallest = num;
    }
    else if(num<secondSmallest && num!==smallest)
    {
        secondSmallest = num;
    }
}

console.log("Second Largest: "+secondLargest);
console.log("Second Smallest: "+secondSmallest);