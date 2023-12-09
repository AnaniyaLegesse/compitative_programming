
const functions = [];

const curry = (fn) => {
  
  return (x) => {
    return fn(x);
  };
};

const compose = (funcs) => {
  return (...args) => {
    return funcs.reduce((acc, cur) => cur(acc), args[0]);
  };
};

const fn = compose(curry(functions));

