import { reverseNumber } from './reverse-number'

const definedCases: Array<[number, number]> = [
  [1234, 4321],
  [45567, 76554],
  [1110011, 1100111],
]

describe('reverseNumber ', () => {
  it('should return reversed number', () => {
    for (let x = 0; x < definedCases.length; x++) {
      const answer = reverseNumber(definedCases[x][0])
      expect(answer).toBe(definedCases[x][1])
    }
  })
})
