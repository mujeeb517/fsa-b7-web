// given a sorted array return whether an element exist
// input: sorted array, element
// output: boolean
// ex: [10,20,30,35,40,45,50] 35 true, 55 false
// O(N)
// 10^9 : 10^9
// recursion
// objects

// function search(arr, x) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === x) {
//             return true;
//         }
//     }

//     return false;
// }

// O(LogN)
// 2^10: 2^10: 2^100
// Log2^100 : 100

function binSearch(arr, x) {
    var low = 0, high = arr.length - 1;
    while (low <= high) {
        var mid = parseInt((low + high) / 2);
        if (arr[mid] === x) return true;
        else if (arr[mid] > x) {
            // go to left
            high = mid - 1;
        } else if (arr[mid] < x) {
            // go to right
            low = mid + 1;
        }
    }

    return false;
}

var res = binSearch([10, 20, 30, 35, 40, 45, 50], 42);
console.log(res);