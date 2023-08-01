// functions
// nested functions
// truthy falsy values
// conditional statements
// if else 
// if else if ladder
// switch 
// terniary operator
// or operator

// function print(marks) {
//     if (marks >= 40)
//         console.log('Passed');
//     else
//         console.log('Failed');
// }

// print(100);
// print(30);
// print(40);


function printClass(agg) {
    // agg>=70 Distinction
    // >=60 && <70 I class
    // >=50 && <60 II class
    // >=40 && <50 III class
    // Failed
    if (agg >= 70) {
        console.log("Distinction");
    }
    else if (agg >= 60 && agg < 70) {
        console.log("I Class");
    }
    else if (agg >= 50 && agg < 60) {
        console.log("II Class");
    }
    else if (agg >= 40 && agg < 50) {
        console.log("III Class");
    }
    else {
        console.log("Failed");
    }
}

printClass(60);