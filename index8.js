function add(a, b) {
    // refactor
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Invalid input, Expected a number");
    }
    var c = a + b;
    console.log(c);
    return c;
}


// add("abc", "def");
// add(true, false);
// add(10, 20); // output
// add(10, "abc");

// everything is a value
// truthy and falsy
// false, 0, "", NaN, null, undefined
// conditional statements
// loops
function f() {
    console.log('fn');
}

// truthy
var arr = [];

var x = "abc";