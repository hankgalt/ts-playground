// import { heapSort } from './sort'

export const heightChecker = (nums: number[]): number => {
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
