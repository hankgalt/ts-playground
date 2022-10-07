import { reverseString } from './reverse-string'

const definedCases: Array<[string[], string[]]> = [
  [
    ['t', 'h', 'a', 't'],
    ['t', 'a', 'h', 't'],
  ],
  [
    ['h', 'o', 'w', 'd', 'y'],
    ['y', 'd', 'w', 'o', 'h'],
  ],
]

describe('reverseString ', () => {
  it('should return reversed string', () => {
    for (let x = 0; x < definedCases.length; x++) {
      const testCase = definedCases[x][0]
      const sol = definedCases[x][1]
      const answer = reverseString(testCase)
      expect(answer.length).toBe(sol.length)
      for (let i = 0; i < sol.length - 1; i++) {
        expect(answer[i]).toBe(sol[i])
      }
    }
  })
})
