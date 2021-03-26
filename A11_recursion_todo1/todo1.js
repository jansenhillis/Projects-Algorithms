// To Do 1
"use strict";

// Recursive Sigma
// Write a recursive function that given a number returns the sum of integers from 1 to that number.
// Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.
function rSigma(value) {
    value = Math.trunc(value)
    if (value < 0) {
        return 0;
    }
    if (value == 1) {
        return 1;
    }
    return value + rSigma(value - 1);
}

// Recursive Factorial
// Given num, return the product of ints from 1 up to num. If less than zero, treat as zero.
// If not an integer, truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). 
// Also, rFact(6.5) = 720 (1*2*3*4*5*6).
function rFact(value) {
    value = Math.trunc(value);
    if (value < 0) {
        return 0;
    }
    if (value == 0) {
        return 1;
    }
    return value * rFact(value - 1);
}

// //Recursive Factorial
// function rFact(val){
//     val = Math.trunc(val);
//     if (val < 1){
//         return 1;
//     }
//     num = val * rFact(val-1);
//     return num;
// }
// console.log(rFact(6.5));