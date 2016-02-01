'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var compose = function compose(direction) {
  var execute = function execute(value, func) {
    return Array.isArray(value) ? func.apply(undefined, _toConsumableArray(value)) : func(value);
  };

  var composeFactory = function composeFactory(implementation) {
    return function () {
      for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
        funcs[_key] = arguments[_key];
      }

      return function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return implementation(funcs, args);
      };
    };
  };

  return direction === 'left' ? composeFactory(function (funcs, args) {
    return funcs.reverse().reduce(execute, args);
  }) : composeFactory(function (funcs, args) {
    return funcs.reduce(execute, args);
  });
};

var right = exports.right = compose('right');
var left = exports.left = compose('left');