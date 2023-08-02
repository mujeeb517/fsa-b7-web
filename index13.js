// loops
// repetitive task
// number, string, boolean, undefined, function , object
// for
// while
// do-while

// loop variant
// condition
// infinite loop
// execution flow
// tracing
// debug
// for (var i = 0; i < 4; i++) {
//     console.log('hello');
// }
// print 1 to 10 
// print 10 to 1
// print all the even numbers upto n
// constraints: 
// 1<=n<=10^18
// even number
// fully divisible by 2, reminder 0
// 12/2 0  13/2  1
// examples: 2, 4, 6, 8 
function print(n) {
    // iterations
    // 10
    // 9
    // ..
    // 1
    // 
    for (var i = n; i > 0; i--) {
        console.log(i);
    }
}

function printEvens(n) {
    for (var i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

function printEvens2(n) {
    for (var i = 2; i <= n; i = i + 2) {
        console.log(i);
    }
}

printEvens2(5);
