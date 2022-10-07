export const uniqueCharacters = (str: string): string[] => {
  const charMap: { [key: string]: number } = {}
  let chars: string[] = []
  let spaceCount = 0

  const testStr = str.trim()

  for (let i = 0; i < testStr.length; i++) {
    if (testStr[i] !== ' ') {
      if (!charMap[testStr[i]]) {
        charMap[testStr[i]] = 0
      }

      if (!chars.includes(testStr[i])) {
        chars.push(testStr[i])
        charMap[testStr[i]]++
      }
    } else {
      spaceCount++
      chars = []
    }
  }

  const result = []

  for (const key in charMap) {
    if (charMap[key] / (spaceCount + 1) >= 1) {
      result.push(key)
    }
  }

  return result
}
