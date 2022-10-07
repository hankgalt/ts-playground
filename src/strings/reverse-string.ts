export const reverseString = (str: string): string => {
  let res = ''
  for (let i = str.length - 1; i >= 0; i--) {
    res = res + str[i]
  }
  return res
  // return [...str].reverse().join('')
}
