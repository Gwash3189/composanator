var ex = typeof exports === 'undefined' ?
     this['composanator'] = {} :
     exports;
var req;
try{
    if(require !== undefined){
        req = require;
    }
} catch(e) {
    ex.require = function(name){return window[name];};
    req = ex.require;
}
(function(exports, require) {
    "use strict";

    var directionEnum = {
        "left": "left",
        "right": "right"
    };

    var forEach = function(direction, arr, func) {
        if (direction === directionEnum.left) {
            return normalForEach(arr, func);
        } else if (direction === directionEnum.right) {
            return reverseForEach(arr, func);
        }
    };

    var normalForEach = function(arr, fun) {
        arr.forEach(fun);
    };

    var reverseForEach = function(arr, fun) {
        var i = arr.length - 1;
        for (i; i > -1; --i) {
            fun(arr[i], i, arr);
        }
    };

    var compose = function(direction) {
        return function() {
            var funcs = Object.keys(arguments);
            var outterArgs = arguments;
            return function() {
                var value;
                var innerArgs = arguments;
                var loopFunc = function(funcName) {
                    if (value !== undefined) {
                        value = outterArgs[funcName].call(null, value);
                    } else {
                        value = outterArgs[funcName].apply(null, innerArgs);
                    }
                };
                forEach(direction, funcs, loopFunc);
                return value;
            };
        };

    };

    exports.right = function() {
        return compose(directionEnum.right)
            .apply(null, arguments);
    };

    exports.left = function() {
        return compose(directionEnum.left)
            .apply(null, arguments);
    };

})(ex,req)