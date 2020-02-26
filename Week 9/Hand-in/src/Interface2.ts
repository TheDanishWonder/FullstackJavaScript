// let http = require("http"); (ok)

/**
 * a) Create an interface to describe a function: myFunc that should take three string parameters and return a String Array.
 * 
 */
interface ThreeStrings {
    string: string;
}

/**
 * b) Design a function "implementing" this interface which returns an array with the three strings
 * 
 */
let myFunc = function myFunc<ThreeStrings>(string1: ThreeStrings, string2: ThreeStrings, string3: ThreeStrings){
    let stringArray: Array<ThreeStrings> = [string1, string2, string3];
    console.log(`stringArray: ${JSON.stringify(stringArray)}`);
}

/**
 * c) Design another implementation that returns an array, with the three strings uppercased.
 * 
 */
let myFunc2 = function myFunc2<ThreeStrings>(string1: ThreeStrings, string2: ThreeStrings, string3: ThreeStrings){
    let stringArray = [string1, string2, string3];
    const toUpper = function(x){
        return x.toUpperCase();
    }
    stringArray = stringArray.map(toUpper);
    console.log(`stringArray: ${JSON.stringify(stringArray)}`);
}

/**
 * d) The function, given below, uses the ES-6 (and TypeScript) feature for destructuring Arrays into individual variables, 
 * to simulate a method that uses the interface.
 * 
 */
let f2 = function logger(f1: myFunc){
    //Simulate that we get data from somewhere and uses the provided function
    let [ a, b, c] = ["A", "B", "C"];
    console.log(f1(a, b, c));
}

const str ="test1";
const str1 = "test2";
const str2 = "test3";

myFunc(str, str1, str2);
myFunc2(str, str1, str2);


