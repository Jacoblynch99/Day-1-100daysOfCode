const isEven = require("is-even")
const isOdd = require("is-odd")
const isNumber = require("is-number")

const checkIfNumber = (num) => {
  return isNumber(num)
}

const checkIfEvenNumber = (num) => {
  return isEven(num)
}

const checkIfOddNumber = (num) => {
  return isOdd(num)
}

console.log(checkIfEvenNumber(14))
console.log(checkIfOddNumber(13))
console.log(checkIfNumber(12))
