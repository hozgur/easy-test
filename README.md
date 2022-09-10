# easy-test
Easy Unit Tester

## Usage :

```javascript
import {result,expect} from '@hozgur/easy-test';

console.log("Test1 Starting.");

function sum(a,b) {
    return a+b;
}
// for expecting -------------------------------------
expect("sum test", sum(1,2), 3);
// ---------------------------------------------------

// for timing on nanoseconds.-------------------------
time("sum timetest",()=>{ sum(1,2)});

// see all test results.------------------------------
result("Test1");
```