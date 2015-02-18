##Composanator

A small library to compose functions togeather.

###Use

Functions are composed in a right to left order.

```
var compose = require("componanator").compose;
//...
var newFunc = compose(lastFunc,firstFunc);
```

