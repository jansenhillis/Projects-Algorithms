"use strict";

// Given an array of comparable values, move the lowest element to array’s 
// front, shifting backward any elements previously ahead of it. 
// Do not otherwise change the array’s order. 
// Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. 
// As always, do this without using built-in functions.
var array = [4,2,1,3,5];

function minToFront(arr) {
    if (typeof arr !== 'undefined' && arr.length > 0) {
        
        var lowest = arr[0];
        var lowestIdx = 0;

        // traverse, tracking lowest val, and index
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] < lowest) {
                lowest = arr[i];
                lowestIdx = i;
            }
        }
        console.log("lowest:", lowest, lowestIdx)
        // traverse backward swapping elements until the front is empty
        for (var i = lowestIdx; i > 0; i--) {
            arr[i] = arr[i-1];
        }
        
        // insert the lowest value at index 0
        arr[0] = lowest;

        return arr;
    }

    return null;
}