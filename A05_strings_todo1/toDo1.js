"use strict";

// To Do 1

// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 
// If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".
var funky = " Pl ayTha tF u nkyM usi c ";
function removeBlanks(str) {
    var array = str.split(" ");
    return array.join(""); 
}

// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s 
// digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.
var bozo = "0s1a3y5w7h9a2t4?6!8?0";
function getDigits(str) {
    var array = str.split("");
    var newArray = [];
    for (var item of array) {
        // if each value is a digit
        if (!isNaN(item)) {
            newArray.push(item);
        }
    }

    return Number(newArray.join(""));
}


// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 
// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 
// Given "Live from New York, it's Saturday Night!", return "LFNYISN".
var snl = "Live from New York, it's Saturday Night!";
var pay = " there's no free lunch - gotta pay yer way. ";
function acronyms(str) {
    var strArray = str.split(" ");
    var acronym = [];
    for (var item of strArray) {
        acronym.push(item.slice(0, 1));
    }

    return acronym.join("").toUpperCase().replace(/[^A-Za-z0-9]/g, '');
}

// Count Non-Spaces
// Accept a string and return the number of non-space characters found in the string. 
// For example, given "Honey pie, you are driving me crazy", return 29 (not 35).
var pie = "Honey pie, you are driving me crazy";
var digits = " 1 2 3 4 5 6 7 8 9 0 ";
function countNonSpace(str) {
    var strArray = str.split(" ");
    var numChars = 0;
    for (var item of strArray) {
        numChars += item.length;
    }

    return numChars;
}


// Remove Shorter Strings
// Given a string array and value (length), remove any strings shorter than the length from the array.