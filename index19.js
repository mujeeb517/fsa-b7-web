// given a number return whether it's a prime number
// input: number
// output: boolean
// constraints
// 2<=n<=10^9
// def: only two factors
// ex: 2, 3, 5, 7, 11, 13
// 2: 1,2
// 3: 1, 3
// 5: 1, 5
// 7: 1, 7
// 11: 1, 11
// 13: 1, 13
// negative: 1 4 (1,2,4), 9 (1,3,9) 12 15
// O(N)
// 10^9 : 10^9 linear
// O(N^2)
// 10*10
// 100*100 = 10000
// 10^9 : 10^9
// 100: O(sqrt(N)): 10
// 10000: 100
// Tier 1: amazon, nextflix, flipkart, 2 - 5L  19L - 1cr. DSA
// Tier 2: cdk, adp, 7L - 13L 60k - 1.2L
// Tier 3: infosys, tcs, wipro 3L, 18k, basic programming
// skills
// 60L: 3L
function isPrime(n) {
    if (n === 1) return false;

    var upper = parseInt(Math.sqrt(n));

    for (var i = 2; i <= upper; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    // if (count === 2) {
    //     return true;
    // } else {
    //     return false;
    // }

    return true;
}

var res = isPrime(16);
console.log(res);

