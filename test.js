import {result,expect,time} from './index.js';  // import from index.js

console.log("Test1 Starting.");

function sum(a,b) {
    return a+b;
}

expect("sum test", sum(1,2), 3);
time("sum time", () => sum(1,2));
result("Test1");