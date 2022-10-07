import { uniqueCharacters } from './unique-characters'

const definedCases: Array<[string, string[]]> = [
  ['that this than', ['t', 'h']],
  ['  that this than  ', ['t', 'h']],
  ['That this than', ['h', 't']],
  ['that this than eeee', []],
]

describe('uniqueCharacters ', () => {
  it('should return unique character set', () => {
    for (let x = 0; x < definedCases.length; x++) {
      const testcase = definedCases[x][0]
      const solution = definedCases[x][1]
      const answer = uniqueCharacters(testcase)
      expect(answer.length).toBe(solution.length)
      if (answer.length > 0) {
        for (let i = 0; i < answer.length; i++) {
          expect(answer[i]).toBe(solution[i])
        }
      }
    }
  })
})
