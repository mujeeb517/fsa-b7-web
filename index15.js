// multiplication table
// 1 * 1 = 1
// 1 * 2 = 2
// 1 * 3

// 10 * 1 = 10
// 10 * 2 = 20
// 10 * 3 = 30
function printMulTable() {
    for (var i = 1; ; i++) {
        for (var j = 1; ; j++) {
            console.log(i + ' * ' + j + " = ", i * j);
            if (j === 10) break;
        }
        console.log();
        if (i === 10) break;
    }
}

printMulTable();