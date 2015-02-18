var namespace = this.window === undefined ?
    (this.module !== undefined && this.module.exports !== undefined ? 
        module.exports : 
        undefined) :
    window

namespace.compose = (function(){
    "use strict";
    var reverseForEach = function(arr, fun) {
        var i = arr.length - 1
        for (i; i > -1; --i) {
            fun(arr[i], i, arr);
        }
    }
 
    var compose = function() {
        var funcs = Object.keys(arguments);
        var outterArgs = arguments;
        return function() {
            var value;
            var innerArgs = arguments;
            reverseForEach(funcs, function(funcName) {
                if (value !== undefined) {
                    value = outterArgs[funcName].call(null, value);
                } else {
                    value = outterArgs[funcName].apply(null, innerArgs);
                }
            });
            return value;
        };
    };
    return compose;
})()