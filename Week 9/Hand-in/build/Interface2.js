"use strict";
let myFunc = function myFunc(string1, string2, string3) {
    let stringArray = [string1, string2, string3];
    console.log(`stringArray: ${JSON.stringify(stringArray)}`);
};
let myFunc2 = function myFunc2(string1, string2, string3) {
    let stringArray = [string1, string2, string3];
    const toUpper = function (x) {
        return x.toUpperCase();
    };
    stringArray = stringArray.map(toUpper);
    console.log(`stringArray: ${JSON.stringify(stringArray)}`);
};
let f2 = function logger(f1) {
    //Simulate that we get data from somewhere and uses the provided function
    let [a, b, c] = ["A", "B", "C"];
    console.log(myFunc(a, b, c), f1);
};
const str = "test1";
const str1 = "test2";
const str2 = "test3";
myFunc(str, str1, str2);
myFunc2(str, str1, str2);
console.log(f2);
//# sourceMappingURL=Interface2.js.map