interface ThreeStrings {
    string: string;
}

let myFunc = function myFunc<ThreeStrings>(string1: ThreeStrings, string2: ThreeStrings, string3: ThreeStrings){
    let stringArray: Array<ThreeStrings> = [string1, string2, string3];
    console.log(`stringArray: ${JSON.stringify(stringArray)}`);
}

let myFunc2 = function myFunc2<ThreeStrings>(string1: ThreeStrings, string2: ThreeStrings, string3: ThreeStrings){
    let stringArray = [string1, string2, string3];
    const toUpper = function(x){
        return x.toUpperCase();
    }
    stringArray = stringArray.map(toUpper);
    console.log(`stringArray: ${JSON.stringify(stringArray)}`);
}

let f2 = function logger<myFunc>(f1: myFunc){
    //Simulate that we get data from somewhere and uses the provided function
    let [ a, b, c] = ["A", "B", "C"];
    console.log(f1(a, b, c));
}

const str ="test1";
const str1 = "test2";
const str2 = "test3";

myFunc(str, str1, str2);
myFunc2(str, str1, str2);


