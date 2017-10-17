'use strict'

function maxDivide(number, divisible)
{
  while(number % divisible == 0) //2 % 2 = 0
  {
    number = number / divisible; // 2 / 2 = 1
  }
  return number;
}

function isUgly(numberUgly)
{
  numberUgly = maxDivide(numberUgly, 2);
  // console.log("2 " + numberUgly);
  numberUgly = maxDivide(numberUgly, 3);
  // console.log("3 " + numberUgly);
  numberUgly = maxDivide(numberUgly, 5);
  // console.log("5 " + numberUgly);

  return (numberUgly === 1) ? true : false;
}

function getUglyNo(input)
{
  let i = 0;
  let countUglyNumber = 1; // ugly number count

  while(input >= countUglyNumber)
  {
    i++;
    // console.log("i = " + i);
    // console.log("isUgly i = " + isUgly(i));
    if(isUgly(i) === true)
    {
      countUglyNumber++;
    }
  }
  return i;
}


// console.log(isUgly(12));


//driver code
console.log(getUglyNo(150)); //5832
console.log(getUglyNo(7)); //8
console.log(getUglyNo(10)); //12
console.log(getUglyNo(15)); //24
