'use strict'

//for each element in the array use call back to multiply by 2
//function forEachElement(arr, callback) 
//callback: will multiply each element with 2

let arr2 = [];

function multiply(arr, callback) {
    arr2 = arr.map(a => a*2);
    callback(arr2);
}

function print(multiply){
    console.log(multiply);
}

let arr = [4,2,9,6,1,5,0];

let calc = multiply(arr, print);