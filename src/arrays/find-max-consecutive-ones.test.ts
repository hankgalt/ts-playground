import { findMaxConsecutiveOnes } from './find-max-consecutive-ones'

const definedCases: Array<[number[], number]> = [
  [[1, 1, 0, 1, 1, 1], 3],
  [[1, 0, 1, 1, 0, 1], 2],
]

describe.only('findMaxConsecutiveOnes ', () => {
  it('should return count for standard cases', () => {
    for (let x = 0; x < definedCases.length; x++) {
      const testcase = definedCases[x][0]
      const solution = definedCases[x][1]
      const answer = findMaxConsecutiveOnes(testcase)
      expect(answer).toBe(solution)
    }
  })
})
