/*
Truth tables &, |, !

A   B   A&B  A|B
0   0   0    0
0   1   0    1
1   0   0    1
1   1   1    1

A   !A
0    1
1    0
*/


// var agg = 50;

// if (agg >= 70) {
//     console.log('Distinction');
// } else if (agg >= 60 && agg <= 69) {
//     console.log('First class');
// }
// else if (agg >= 50 && agg <= 59) {
//     console.log("Second class");
// }

// ^, |, &, <<, >>
/*
     0001
     0000

     0010

      1010
      1011
      -------
       1 0 1 1
      ------
*/


var n = 1;
var x = n << 2; // 2^3, 2^4

console.log(x);