// for (var i = 1; ; i++) {
//     console.log(i);
//     if (i === 100) break;
// }

function printEvens(n) {
    for (var i = 1; i <= n; i++) {
        // skip 
        if (i % 2 !== 0) {
            continue;
        }
        console.log(i);
    }
}

printEvens(10);