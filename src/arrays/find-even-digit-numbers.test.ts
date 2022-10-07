import { findEvenDigitNumbers } from './find-even-digit-numbers'

const definedCases: Array<[number[], number]> = [
  [[12, 345, 2, 6, 7896], 2],
  [[555, 901, 482, 1771], 1],
]

describe('findEvenDigitNumbers ', () => {
  it('should return count for standard cases', () => {
    for (let x = 0; x < definedCases.length; x++) {
      const testcase = definedCases[x][0]
      const solution = definedCases[x][1]
      const answer = findEvenDigitNumbers(testcase)
      expect(answer).toBe(solution)
    }
  })
})
