import { reverseString } from './reverse-string'

const definedCases: Array<[string, string]> = [
  ['that', 'taht'],
  ['howdy', 'ydwoh'],
  ['Thatthisthan', 'nahtsihttahT'],
]

describe('reverseString ', () => {
  it('should return reversed string', () => {
    for (let x = 0; x < definedCases.length; x++) {
      const answer = reverseString(definedCases[x][0])
      expect(answer).toBe(definedCases[x][1])
    }
  })
})
