
//store the primeFactors
let n = 84;
let primeFactors = [];

for (let i = 2; i * i <= n; i++) {

    while (n % i === 0) {
        primeFactors.push(i);
        n /= i;
    }

}

if (n > 1) {
    primeFactors.push(n);
}

console.log("Prime Factors:", primeFactors);