//1  Write a function splitAndMerge
let splitAndMerge = (string, separator) => {
  const arrayOfStrings = string.split(' ');
  return arrayOfStrings.map((word) => word.split('').join(separator)).join(' ');
};

console.log(splitAndMerge("My name is John"," ")); 
console.log(splitAndMerge("Hello World!",",")); 

//2 Convert a hash into an array. 
let convert= (obj) => {
    var array = [];
    for (i in obj) {
        array.push([i, obj[i]]);
    }
    return array;
}
console.log(convert({ name: 'Jeremy', age: 24, role: 'Software Engineer' }));

//3  Function that converts dash/underscore delimited words into camel casing
let toCamelCase=(string)=> string.split(/[-_]/).map(e => e[0].toUpperCase() + e.substr(1,).toLowerCase()).join('');

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));

//4 Function that takes a sentence (string) and reverses each word in the sentence
let reverseStr = (stringToReverse) => stringToReverse.split(' ').map((word) =>word.split('').reverse().join('')).join(' ');

console.log(reverseStr('Hello world!'));

//5 Write a function stringExpansion 
let stringExpansion=(str) =>{
    let newStr = "";
    if (!str.match(/\d/)) return str;
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/\d/) && str[i + 1].match(/[A-z]/)) {
            for (let j = 0; j < str[i]; j++) {
                newStr += str[i + 1];
            }
        }
    }
    return newStr;
}
console.log(stringExpansion('3D2a5d2f'));
console.log(stringExpansion('3d332f2a'));
console.log(stringExpansion('abcde'));

//6  Functions that returns the largest and smallest number passed like an argument
let largest=(...args)=> Math.max(...args);
let smallest=(...args)=> Math.min(...args);

console.log(largest(2, 0.1, -5, 100, 3)); // 100
console.log(smallest(2, 0.1, -5, 100, 3)); // -5

//7  function  that transform array of numbers to array of functions that will return value from a base array
let transform=(array) => array.map((number) =>()=> number);

var baseArray = [10, 20, 30, 40, 50];
var newArr = transform(baseArray);
console.log(newArr[3]());
console.log(newArr[4]());

//8 Function expects arbitrary number of digit arguments and returns compound value of them
let sum=(...array)=>array.length === 0 ? 0 : array[0] + sum(...array.slice(1));
//let sum = (...args) => args.length === 0 ? 0 :args.reduce((s, num) => s + num, 0);
console.log(sum(1, 3, 5, 7));

//9 Function expects number and logs values one by one till zero with one second delay
let countDown = (number) => {
    setInterval(() => {number < 0 ? clearInterval() :console.log(number);
number--;
    }, 1000);
}

countDown(3);

