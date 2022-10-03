import { swap } from '../sorting/sort'

export const moveZeroes = (nums: number[]): void => {
  var l = 0
  var r = l
  while (r < nums.length) {
    while (nums[r] === 0) {
      r++
    }
    if (r < nums.length) {
      swap(nums, l, r)
      l++
      r++
    }
  }
}
