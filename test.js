import {result,expect} from './index.js';  // import from index.js

console.log("Test1 Starting.");

function sum(a,b) {
    return a+b;
}

expect("sum test", sum(1,2), 3);
result("Test1");