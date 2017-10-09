//  RECURSION ----------------------------------------------------------

function multiplier(factor) {
  return function(number) {
    return Math.pow(number, factor);
  };
}

var square = multiplier(2);
var cube = multiplier(3);
square(10);
cube(5);

//  ----------------------------------------------------------

var power = function(base, exponent){
  if(exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
  
};

power(3, 2);

function power2(base, exponent) {
  if(exponent === undefined) {
    exponent = 2;
  }
  result = 1;
  for(var i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

power2(3);

//  ----------------------------------------------------------

function padding(num, width) {
  var pad = num.toString();
  while(pad.length < width) {
    pad = '0' + pad;
    // num.length++;
  }
  return pad;
}

function animal(cows, chickens, pigs) {
  console.log(padding(cows, 5) + " Cows");
  console.log(padding(chickens, 5) + " Chickens");
  console.log(padding(pigs, 5) + " Pigs");
  
}

animal(7, 14, 8);

//  ----------------------------------------------------------

function isEven(number) {
  if(number === 0) {
  		return true;
  }else if (number === -1) {
  		return false;
  }else {
  		return isEven(Math.abs(number) - 2);
  }
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??






