export const reverseString = (str: string[]): string[] => {
  const n = str.length
  let l = 0
  let r = n - 1

  while (l < r) {
    const tmp = str[l]
    str[l] = str[r]
    str[r] = tmp
    l++
    r--
  }
  return str
}
