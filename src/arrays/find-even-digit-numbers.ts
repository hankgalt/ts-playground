export const findEvenDigitNumbers = (nums: number[]): number => {
  let count = 0

  for (let i = 0; i < nums.length; i++) {
    const digitCount = numDigits(nums[i])
    const isEven = digitCount !== 0 && digitCount % 2 === 0
    if (isEven) {
      count++
    }
  }
  return count
}

const numDigits = (num: number): number => {
  // return Math.max(Math.floor(Math.log10(Math.abs(num))), 0) + 1
  // return `${num}`.length // faster, extra space
  let count = 0
  let curr = num
  while (curr > 0) {
    curr = Math.floor(curr / 10)
    count++
  }

  return count
}
