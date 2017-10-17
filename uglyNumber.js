'use strict'

function maxDivides(number, divisible) {
	debugger
  // console.log('----> masuk fungsi')
  while(number % divisible == 0) {
  	// console.log('----> masuk while')
    number = number / divisible;
    // console.log(number)
  }
  // console.log('----> keluar while')
  return number;
}

// console.log(maxDivides(7, 2))

function isUgly(numberUgly) {
	debugger
  // console.log('----> masuk fungsi')
  numberUgly = maxDivides(numberUgly, 2);
  // console.log('----> masuk maxDivides 2 >> ' + numberUgly)
  numberUgly = maxDivides(numberUgly, 3);
  // console.log('----> masuk maxDivides 3 >> ' + numberUgly)
  numberUgly = maxDivides(numberUgly, 5);
  // console.log('----> masuk maxDivides 5 >> ' + numberUgly)

  return (numberUgly === 1) ? true : false;
}

// console.log(isUgly(4))

function getUglyNo(input) {
  let i = 1;
  let countUglyNumber = 1; // ugly number count

  while(input > countUglyNumber) {
  	debugger;
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