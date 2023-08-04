// var arr = [10, 20, 3, 4, 5, 40, 40];

// arr.push(60);
// arr.push(70);

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// given an array return index of the element
// given an array and an element return its frequency
// input: array, element
// output: number
// [10, 20, 3, 4, 5, 40, 40];
// 45: false
// 3: true
// searching
// O(N)
function isExist(arr, x) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return i;
        }
    }

    return -1;
}

var res = isExist([10, 20, 3, 4, 5, 40, 40], 3);
console.log(res);