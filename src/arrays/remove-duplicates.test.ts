import { removeDuplicates } from './remove-duplicates'

const definedCases: Array<[number[], number[]]> = [
  [[1, 1], [1]],
  [
    [1, 1, 2],
    [1, 2],
  ],
  [
    [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
    [0, 1, 2, 3, 4],
  ],
]

describe.only('removeDuplicates ', () => {
  it('should return count for standard cases', () => {
    for (let x = 0; x < definedCases.length; x++) {
      const testcase = definedCases[x][0]
      const solution = definedCases[x][1]
      const answer = removeDuplicates(testcase)
      answer.forEach((num, idx) => {
        expect(num).toBe(solution[idx])
      })
    }
  })
})
