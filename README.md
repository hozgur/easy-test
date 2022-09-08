# easy-test
Easy Unit Tester

## Usage :

```javascript
import {result,expect} from '@hozgur/easy-test';

console.log("Test1 Starting.");

function sum(a,b) {
    return a+b;
}

expect("sum test", sum(1,2), 3);
result("Test1");
```