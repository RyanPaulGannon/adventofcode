import fs from "fs"

const file = fs.readFileSync("../input.txt", "utf8").toString().split("\n")

let total: number[] = []
for (let i = 0; i < file.length; i++) {
  let checkFirst: number[] = []

  for (let j = 0; j < file[i].length; j++) {
    let numbers = parseInt(file[i][j])
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
for (let i = 0; i < total.length; i++) {
  if (!isNaN(total[i])) {
    finalSum += total[i]
    console.log(`Line ${i + 1}:`, finalSum, total[i], file[i])
  }
}

console.log(finalSum)
