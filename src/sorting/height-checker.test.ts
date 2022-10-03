import { heightChecker } from './height-checker'

const definedCases: Array<[number[], number]> = [
  [[1, 1, 4, 2, 1, 3], 3],
  [[5, 1, 2, 3, 4], 5],
  [[1, 2, 3, 4, 5], 0],
  [[10, 6, 6, 10, 10, 9, 8, 8, 3, 3, 8, 2, 1, 5, 1, 9, 5, 2, 7, 4, 7, 7], 22],
]

describe.only('heightChecker ', () => {
  it('should return count for standard cases', () => {
    for (let x = 0; x < definedCases.length; x++) {
      const testcase = definedCases[x][0]
      const solution = definedCases[x][1]
      const answer = heightChecker(testcase)
      expect(answer).toBe(solution)
    }
  })
})
