const compose = function(direction) {
  const execute = (value, func) => Array.isArray(value) ? func(...value) : func(value);

  const composeFactory = (implementation) => (...funcs) => (...args) => implementation(funcs, args);

  return direction === 'left'
    ? composeFactory((funcs, args) => funcs.reverse().reduce(execute, args))
    : composeFactory((funcs, args) => funcs.reduce(execute, args));
};

export const right = compose('right');
export const left = compose('left');
