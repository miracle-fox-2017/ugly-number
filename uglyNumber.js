'use strict'

function maxDivide(number, divisible) {
  debugger

  while(number % divisible == 0) {
  number = number / divisible;
  }
  return number;
}

function isUgly(numberUgly) {
  debugger
  numberUgly = maxDivide(numberUgly, 2);
  numberUgly = maxDivide(numberUgly, 3);
  numberUgly = maxDivide(numberUgly, 5);

  return (numberUgly == 1) ? true : false;
}

function getUglyNo(input) {
  debugger
  let i = 1;
  let countUglyNumber = 1; // ugly number count

  while(input > countUglyNumber) {
    i++;
    if(isUgly(i) == true) {
      countUglyNumber++;
    }

  }
    return i;
}

//driver code
console.log(getUglyNo(150)); //5832
 console.log(getUglyNo(7)); //8
 console.log(getUglyNo(10)); //12
console.log(getUglyNo(15)); //24
