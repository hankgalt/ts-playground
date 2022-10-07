import { sortColors } from './sort-colors'

const definedCases: Array<[number[], number[]]> = [
  [
    [2, 0, 2, 1, 1, 0],
    [0, 0, 1, 1, 2, 2],
  ],
  [
    [2, 0, 1],
    [0, 1, 2],
  ],
]

describe('sortColors ', () => {
  it('should return sorted values for standard cases', () => {
    for (let x = 0; x < definedCases.length; x++) {
      const testcase = definedCases[x][0]
      const solution = definedCases[x][1]
      const sortedNums = sortColors(testcase)
      expect(sortedNums.length).toBe(solution.length)
      sortedNums.forEach((num, idx) => {
        expect(num).toBe(solution[idx])
      })
    }
  })
})
