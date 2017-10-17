'use strict'

function maxDivides(number, divisible) {
  debugger
  while(number % divisible == 0) {
    number = number / divisible;
  }
  return number;//numbers
}

function isUgly(numberUgly) {
  debugger
  numberUgly = maxDivides(numberUgly, 2);//maxDivide
  numberUgly = maxDivides(numberUgly, 3);
  numberUgly = maxDivides(numberUgly, 5);

  return (numberUgly == 1) ? true : false;
}

function getUglyNo(input) {
  let i = 1;
  let countUglyNumber = 1; // ugly number count *==

  debugger
  while(input > countUglyNumber) {

    i++;
    if(isUgly(i) == 1) {
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
