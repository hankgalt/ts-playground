export const findMaxConsecutiveOnes = (nums: number[]): number => {
  var largest = 0
  var current = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      current++
      if (current > largest) {
        largest = current
      }
    } else {
      current = 0
    }
  }
  return largest
}
