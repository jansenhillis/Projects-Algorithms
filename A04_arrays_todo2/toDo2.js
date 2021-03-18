"use strict";

var array = [8, 6, 7, 5]
var oddarray = [1, 2, 3, 4, 5]
var valueToInsert = 3

// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. 
// Do this without using any built-in array methods.
function pushFront(arr, valueToInsert) {
    var newArray = [];
    newArray[0] = valueToInsert;
    
    for (var i = 0; i < arr.length; i++) {
        newArray[i+1] = arr[i];
    }

    return newArray;
}

// Pop Front
// Given an array, remove and return the value at the beginning of the array. 
// Do this without using any built-in array methods except pop().
function popFront(arr) {
    if (typeof arr !== 'undefiend' && arr.length > 0) {
        var firstValue = arr[0];
        
        var newArray = [];
        for (var i = 1; i < arr.length; i++) {
            newArray[i-1] = arr[i];
        }
        console.log(arr);
        arr = newArray;
        console.log(arr);
        return firstValue;
    }

    return null;
}

// Insert At
// Given an array, index, and additional value, insert the value into array at given index. 
// Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
function insertAt(arr, index, value) {
    if (typeof arr !== 'undefined' && index < arr.length && index >= 0) {
        var newArr = [];

        // left side of index
        for (var i = 0; i < index; i++) {
            newArr[i] = arr[i];
        }

        // new value at index
        newArr[index] = value;

        // rest of array
        for (var i = index; i < arr.length; i++) {
            newArr[i+1] = arr[i];
        }

        console.log(arr);
        arr = newArr;
    }

    return arr;
}


// Remove At
// Given an array and an index into array, remove and return the array value at that index. 
// Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).
function removeAt(arr, index) {
    if (typeof arr !== 'undefined' && index < arr.length && index > 0) {
        var newArr = [];
        var removedValue = arr[index];

        for (var i = 0; i < index; i++) {
            newArr[i] = arr[i];
        }
        for (var i = index+1; i < arr.length; i++) {
            newArr[i-1] = arr[i];
        }

        console.log(arr);
        arr = newArr;
        console.log(arr);
        return removedValue;
    }
    return null;
}


// Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. 
// For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. 
// Do this without using any built-in array methods.
function swapArrayPairs(arr) {
    if (typeof arr !== 'undefined') {
        for (var i = 0; i < arr.length; i += 2) {
            
            if (typeof arr[i+1] !== 'undefined') {
                var temp = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = temp;
            }
        }
        return arr;
    } 
    return null;
}


// Remove Duplicates
// Given a sorted *integer* array, remove duplicate values. Because array elements are already in order, all duplicate 
// values will be grouped together. As with all these array challenges, do this without using 
// any built-in array methods. Second: Solve this without using any nested loops.
function removeDuplicates(sortedArr) {
    if (typeof sortedArr !== 'undefined' && sortedArr.length > 0) {
        var cleanedArr = [];
        for (var i = 0; i < sortedArr.length; i++) {
            if (sortedArr[i+1] != sortedArr[i]) {
                cleanedArr[cleanedArr.length] = sortedArr[i];
            }
        }
        return cleanedArr;
    }
    return null;
}