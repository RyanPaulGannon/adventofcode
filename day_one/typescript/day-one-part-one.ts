import fs from "fs"

const file = fs.readFileSync("../input.txt", "utf8").toString().split("\n")

let total: number[] = []
for (const line of file) {
  let checkFirst: number[] = []

  for (const char of line) {
    let numbers = parseInt(char)
    if (!isNaN(numbers)) {
      checkFirst.push(numbers)
    }
  }
  let firstNum = checkFirst[0]
  let lastNum = checkFirst[checkFirst.length - 1]

  let sum = `${firstNum}${lastNum}`
  total.push(parseInt(sum))
}

let finalSum = 0
for (const number of total) {
  if (!isNaN(number)) {
    finalSum += number
    console.log(`Line ${number + 1}:`, finalSum, number)
  }
}

console.log(finalSum)
