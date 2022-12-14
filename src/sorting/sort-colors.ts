import { swap } from './sort'

export const sortColors = (nums: number[]): number[] => {
  let low = 0
  let mid = 0
  let high = nums.length - 1

  while (mid <= high) {
    const curr = nums[mid]
    if (curr === 0) {
      swap(nums, low, mid)
      low++
      mid++
    } else if (curr === 2) {
      swap(nums, mid, high)
      high--
    } else {
      mid++
    }
  }

  return nums
}
