import {
  selectionSort,
  bubbleSort,
  insertionSort,
  mergeSort,
  quickSort,
  heapSort,
} from './sort'
import { numGenerator } from '../utils/utils'

const definedCases: Array<[number[], number[]]> = [
  [[], []],
  [[1], [1]],
  [
    [1, 2],
    [1, 2],
  ],
  [
    [2, 1],
    [1, 2],
  ],
  [
    [10, 3, 5],
    [3, 5, 10],
  ],
  [
    [2, 1, 6, 5, 6, 7, 4, 3],
    [1, 2, 3, 4, 5, 6, 6, 7],
  ],
]

const generatedCases: number[] = [10, 100, 1000, 10000, 20000, 40000, 60000]

describe('bubbleSort ', () => {
  it('should return sorted values for standard cases', () => {
    for (let x = 0; x < definedCases.length; x++) {
      const testcase = definedCases[x][0]
      const solution = definedCases[x][1]
      const sortedNums = bubbleSort(testcase)
      expect(sortedNums.length).toBe(solution.length)
      sortedNums.forEach((num, idx) => {
        expect(num).toBe(solution[idx])
      })
    }
  })

  it('should return sorted values for generated cases', () => {
    for (let x = 0; x < generatedCases.length; x++) {
      const numItems = generatedCases[x]
      const { nums, smallest, largest } = numGenerator(1, 34, numItems)
      const start = Date.now()
      const sortedNums = bubbleSort(nums)
      console.log(
        `bubbleSort took ${Date.now() - start} msecs to sort ${numItems} items`
      )
      expect(sortedNums.length).toBe(nums.length)
      expect(sortedNums[0]).toBe(smallest)
      expect(sortedNums[sortedNums.length - 1]).toBe(largest)
    }
  })
})

describe('selectionSort ', () => {
  it('should return sorted values for defined cases', () => {
    for (let x = 0; x < definedCases.length; x++) {
      const testcase = definedCases[x][0]
      const solution = definedCases[x][1]
      const sortedNums = selectionSort(testcase)
      expect(sortedNums.length).toBe(solution.length)
      sortedNums.forEach((num, idx) => {
        expect(num).toBe(solution[idx])
      })
    }
  })

  it('should return sorted values for generated cases', () => {
    for (let x = 0; x < generatedCases.length; x++) {
      const numItems = generatedCases[x]
      const { nums, smallest, largest } = numGenerator(1, 34, numItems)
      const start = Date.now()
      const sortedNums = selectionSort(nums)
      console.log(
        `selectionSort took ${
          Date.now() - start
        } msecs to sort ${numItems} items`
      )
      expect(sortedNums.length).toBe(nums.length)
      expect(sortedNums[0]).toBe(smallest)
      expect(sortedNums[sortedNums.length - 1]).toBe(largest)
    }
  })
})

describe('insertionSort ', () => {
  it('should return sorted values for standard cases', () => {
    for (let x = 0; x < definedCases.length; x++) {
      const testcase = definedCases[x][0]
      const solution = definedCases[x][1]
      const sortedNums = insertionSort(testcase)
      expect(sortedNums.length).toBe(solution.length)
      sortedNums.forEach((num, idx) => {
        expect(num).toBe(solution[idx])
      })
    }
  })

  it('should return sorted values for generated cases', () => {
    for (let x = 0; x < generatedCases.length; x++) {
      const numItems = generatedCases[x]
      const { nums, smallest, largest } = numGenerator(1, 34, numItems)
      const start = Date.now()
      const sortedNums = insertionSort(nums)
      console.log(
        `insertionSort took ${
          Date.now() - start
        } msecs to sort ${numItems} items`
      )
      expect(sortedNums.length).toBe(nums.length)
      expect(sortedNums[0]).toBe(smallest)
      expect(sortedNums[sortedNums.length - 1]).toBe(largest)
    }
  })
})

describe('mergeSort ', () => {
  it('should return sorted values for standard cases', () => {
    for (let x = 0; x < definedCases.length; x++) {
      const testcase = definedCases[x][0]
      const solution = definedCases[x][1]
      const sortedNums = mergeSort(testcase)
      expect(sortedNums.length).toBe(solution.length)
      sortedNums.forEach((num, idx) => {
        expect(num).toBe(solution[idx])
      })
    }
  })

  it('should return sorted values for generated cases', () => {
    for (let x = 0; x < generatedCases.length; x++) {
      const numItems = generatedCases[x]
      const { nums, smallest, largest } = numGenerator(1, 34, numItems)
      const start = Date.now()
      const sortedNums = mergeSort(nums)
      console.log(
        `mergeSort took ${Date.now() - start} msecs to sort ${numItems} items`
      )
      expect(sortedNums.length).toBe(nums.length)
      expect(sortedNums[0]).toBe(smallest)
      expect(sortedNums[sortedNums.length - 1]).toBe(largest)
    }
  })
})

describe('quickSort ', () => {
  it('should return sorted values for standard cases', () => {
    for (let x = 0; x < definedCases.length; x++) {
      const testcase = definedCases[x][0]
      const solution = definedCases[x][1]
      const sortedNums = quickSort(testcase)
      expect(sortedNums.length).toBe(solution.length)
      sortedNums.forEach((num, idx) => {
        expect(num).toBe(solution[idx])
      })
    }
  })

  it('should return sorted values for generated cases', () => {
    for (let x = 0; x < generatedCases.length; x++) {
      const numItems = generatedCases[x]
      const { nums, smallest, largest } = numGenerator(1, 34, numItems)
      const start = Date.now()
      const sortedNums = quickSort(nums)
      console.log(
        `quickSort took ${Date.now() - start} msecs to sort ${numItems} items`
      )
      expect(sortedNums.length).toBe(nums.length)
      expect(sortedNums[0]).toBe(smallest)
      expect(sortedNums[sortedNums.length - 1]).toBe(largest)
    }
  })
})

describe('heapSort ', () => {
  it('should return sorted values for standard cases', () => {
    for (let x = 0; x < definedCases.length; x++) {
      const testcase = definedCases[x][0]
      const solution = definedCases[x][1]
      const sortedNums = heapSort(testcase)
      expect(sortedNums.length).toBe(solution.length)
      sortedNums.forEach((num, idx) => {
        expect(num).toBe(solution[idx])
      })
    }
  })

  it('should return sorted values for generated cases', () => {
    for (let x = 0; x < generatedCases.length; x++) {
      const numItems = generatedCases[x]
      const { nums, smallest, largest } = numGenerator(1, 34, numItems)
      const start = Date.now()
      const sortedNums = heapSort(nums)
      console.log(
        `heapSort took ${Date.now() - start} msecs to sort ${numItems} items`
      )
      expect(sortedNums.length).toBe(nums.length)
      expect(sortedNums[0]).toBe(smallest)
      expect(sortedNums[sortedNums.length - 1]).toBe(largest)
    }
  })
})
