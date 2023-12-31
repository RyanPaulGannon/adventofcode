import fs from "fs"

const file = fs.readFileSync("../input.txt", "utf8").toString().split("\n")
// const file = ["4ninecjzlk7nine4"]

// const file = [
//   "two1nine",
//   "eightwothree",
//   "abcone2threexyz",
//   "xtwone3four",
//   "4nineeightseven2",
//   "zoneight234",
//   "7pqrstsixteen",
// ]

const digits = [
  { word: "one", number: 1 },
  { word: "two", number: 2 },
  { word: "three", number: 3 },
  { word: "four", number: 4 },
  { word: "five", number: 5 },
  { word: "six", number: 6 },
  { word: "seven", number: 7 },
  { word: "eight", number: 8 },
  { word: "nine", number: 9 },
]

type Number = {
  index?: number
  number: number
  line?: string
}

let finalSum = 0
let lineNumber = 0
const total: Number[] = []

for (const line of file) {
  let firstNum: Number = { index: 0, number: 0 }
  let lastNum: Number = { index: 0, number: 0 }
  const numbers: Number[] = []

  for (const char of line) {
    const number = parseInt(char)
    if (!isNaN(number)) {
      const occurrences = findAllOccurrences(line, number.toString())
      for (const index of occurrences) {
        numbers.push({ index, number })
      }
    }
  }

  for (const digit of digits) {
    const occurrences = findAllOccurrences(line, digit.word)
    for (const index of occurrences) {
      numbers.push({ index, number: digit.number })
    }
  }

  numbers.forEach(() => {
    firstNum = numbers.reduce((lowest: Number, current: Number) => {
      return current.index < lowest.index ? current : lowest
    })
    lastNum = numbers.reduce((highest: any, current: any) => {
      return current.index > highest.index ? current : highest
    })
  })

  if (firstNum && lastNum) {
    total.push({
      number: parseInt(`${firstNum.number}${lastNum.number}`),
      line,
    })
  }
}

for (const number of total) {
  finalSum += number.number
  lineNumber++
  if (!isNaN(finalSum)) {
    console.log(`Line ${lineNumber}:`, finalSum, number)
  }
}

function findAllOccurrences(string: string, substring: string) {
  const indices: number[] = []
  let index = string.indexOf(substring)
  while (index !== -1) {
    indices.push(index)
    index = string.indexOf(substring, index + 1)
  }
  return indices
}
