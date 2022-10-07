export const reverseNumber = (num: number): number => {
  let res = 0
  let left = num
  let right = num
  while (right > 0) {
    left = right % 10
    right = Math.floor(right / 10)
    res = res * 10 + left
  }
  return res
}
