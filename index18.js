// given a number print all of its factors
// given a number return me total number of factors
// input: number
// def: a number which divides the given number fully
// ex: 12, 1 2 3 4 6 12

function printFactors(n) {
    var count = 0;
    for (var i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
            // count -= 1;
            // count = count -1;
            // var c = a+b;
            // 
        }
    }

    return count;
}

var res = printFactors(12);
console.log(res);