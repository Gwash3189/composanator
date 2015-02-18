##Composanator

A small library to compose functions togeather.

###Use

Functions are composed in a right to left order.

####CommonJS / Webpack / Browserify

```
var compose = require("componanator").compose;
//...
var newFunc = compose(lastFunc,firstFunc);
```

###Window

```
var compose = window.compose
//...
var newFunc = compose(lastFunc,firstFunc);
```
