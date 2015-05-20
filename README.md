##Composanator

A small library to compose functions togeather.

###Use

Functions can be composed from either the left, or right. 

####CommonJS / Webpack / Browserify

#####Right to left Composition
```
var compose = require("componanator";
//...
var newFunc = compose.right(lastFunc,firstFunc);
```
#####Left to right Composition
```
var compose = require("componanator");
//...
var newFunc = compose.left(firstFunc, lastFunc);
```
###Window

```
var compose = window.compose
//...
// same as above
```
