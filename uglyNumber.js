'use strict'

function maxDivides(number, divisible) {
  while(number % divisible == 0) {
    number = number / divisible;
  }
  return number; // << 3
}

function isUgly(numberUgly) {
  numberUgly = maxDivides(numberUgly, 2); // << 2
  numberUgly = maxDivides(numberUgly, 3); // << 2
  numberUgly = maxDivides(numberUgly, 5); // << 2

  return (numberUgly == 1) ? true : false; // << 4
}

function getUglyNo(input) {
  let i = 1;
  let countUglyNumber = 1; // << 1 ugly number count

  while(input > countUglyNumber) {
    i++;
    if(isUgly(i) == 1) {
      countUglyNumber++; // << 5
    }
    // return i; // << 6
  }
  return i; // << 7
}

//driver code
console.log(getUglyNo(150)); //5832
console.log(getUglyNo(7)); //8
console.log(getUglyNo(10)); //12
console.log(getUglyNo(15)); //24
