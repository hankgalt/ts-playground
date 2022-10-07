import { moveZeroes } from './move-zeroes'

const definedCases: Array<[number[], number[]]> = [
  [
    [0, 1, 0, 3, 12],
    [1, 3, 12, 0, 0],
  ],
  [[0], [0]],
  [[1], [1]],
]

describe('moveZeroes ', () => {
  it('should return count for standard cases', () => {
    for (let x = 0; x < definedCases.length; x++) {
      const testcase = definedCases[x][0]
      const solution = definedCases[x][1]
      moveZeroes(testcase)
      testcase.forEach((num, idx) => {
        expect(num).toBe(solution[idx])
      })
    }
  })
})
