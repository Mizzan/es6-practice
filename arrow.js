// function expression
const doubleIt = function myFunc(num) {
  return num * 2;
};

// function declaration
function numDoubleIt(num) {
  return num * 2;
}

// anon func
const multiIt = function (num) {
  return num * 2;
};

// arrow func
const arrowFuncDoubleIt = (num) => num * 2;
const add = (x, y) => x + y;
const noPara = () => 5;
const doMath = (x, y) => {
  const sum = x + y;
  const diff = x - y;
  const result = sum * diff;
  return result;
};

console.log(doMath(10, 3));
