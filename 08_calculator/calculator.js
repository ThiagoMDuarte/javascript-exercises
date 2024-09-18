const add = function(num1,num2) {
	return num1 + num2
};

const subtract = function(num1,num2) {
	return num1 - num2
};

const sum = function(array) {
  if (array.length == 0) {
    return 0
  } else if (array.length == 1){
    return array[0]
  } return array.reduce((total,num) => {
    return total + num
  },0)
};

const multiply = function(array) {
  return array.reduce((total,num) => {
    return total * num
  },1)

};
const power = function(num1,num2) {
	return Math.pow(num1,num2)
};

const factorial = function(num) {
  var f = []
	if (num == 1 || num == 0) {
    return 1
  } if (f[num] > 0) {
    return f[num] }
  return f[num] = factorial(num-1) * num
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
