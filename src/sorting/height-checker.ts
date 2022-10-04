// import { heapSort } from './sort'
const logger = require('./utils/logger')

export const heightChecker = (nums: number[]): number => {
  logger.info
  let count = 0
  const sorted: number[] = [...nums].sort((x: number, y: number): number => {
    return x - y
  })
  // var sorted = heapSort([...nums])

  for (let i = 0; i < nums.length; i++) {
    if (sorted[i] !== nums[i]) {
      count++
    }
  }
  return count
}
