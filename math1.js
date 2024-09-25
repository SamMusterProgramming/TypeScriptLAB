const n1 = 11;
const n2 = 14;
const n3 = 18;
const n4 = 7;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(isSum50? "yes Valid ,the Four numbers sum up to 50":"Invalid numbers , could't sum up to 50")

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(isTwoOdd?"correct , there are at least two odd numbers":"incorrect, there are't two odd number")
// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
let isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(!isOver25?"correct , all numbers are less than 25":"incorrect,there is at least one number over 25")
// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(isUnique?"correct , all numbers are differents and unique":"incorrect, there are at least two same numbers")
// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
let isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
console.log(isValid?`perfect, these numbers ${n1},${n2},${n3},${n4} meet all the requirements`:`Sorry,these number${n1},${n2},${n3},${n4} don't meet the requirements`)
// Finally, log the results.


// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

// check if all number divisible by 5  

      // --------simple way-----------
console.log( ((n1%5 === 0)&&(n2%5 === 0)&&(n3%5 === 0)&&(n4%5 === 0)))
      // ----------different way using variable 
 let divby5 = (n1%5 === 0)&&(n2%5 === 0)&&(n3%5 === 0)&&(n4%5 === 0)
 console.log(divby5?"all numbers are divisible by 5":"sorry , numbers provided are't divisible by 5")
      



 // check if the first number larger than last one
let fnGreaterln = n1 > n4
console.log(fnGreaterln?"n1 is greater than n2":`n1 is not larger than n2`)


// substract first number from second number
 let subFnfromSn = n2 -n1
 console.log("substract first number from second number :"+subFnfromSn)

 // multiplication of  result by third number 
 let result = subFnfromSn * n3 
 console.log("multiplication of  result by third number "+result)

 // remainder of dividing the result by the 4 th number
 let remainder = result % n4 ;
 console.log("remainder of dividing the result by the 4 th number"+remainder)

 // change the variable isOver25 to new logic where ! sign is not needed

 isOver25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;

 // let's test the variable valid  again with no (!) on isOver25 and see if it gives us true result
 //also isValid and IsOver25 variables needs to be changes to let cause const variable can't be changed in value

 isValid = isSum50 && isTwoOdd && isOver25 && isUnique;

 console.log(isValid)