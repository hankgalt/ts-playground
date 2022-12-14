export const removeDuplicates = (nums: number[]): number[] => {
  let l = 0
  let r = l
  while (r < nums.length - 1) {
    while (nums[r] === nums[r + 1]) {
      r++
    }
    if (r < nums.length - 1) {
      nums[l + 1] = nums[r + 1]
      l++
      r++
    }
  }
  return nums.slice(0, l + 1)
}
