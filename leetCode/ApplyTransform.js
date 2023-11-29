/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let result = [];

 for (let i = 0; i < arr.length; i++) {
   let transformed = fn(arr[i], i);
   result.push(transformed);
 }

 return result;
};