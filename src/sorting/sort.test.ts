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
      console.time(`${numItems} items bubbleSort took`)
      const sortedNums = bubbleSort(nums)
      console.timeEnd(`${numItems} items bubbleSort took`)
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
      console.time(`${numItems} items selectionSort took`)
      const sortedNums = selectionSort(nums)
      console.timeEnd(`${numItems} items selectionSort took`)
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
      console.time(`${numItems} items insertionSort took`)
      const sortedNums = insertionSort(nums)
      console.timeEnd(`${numItems} items insertionSort took`)
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
      console.time(`${numItems} items mergeSort took`)
      const sortedNums = mergeSort(nums)
      console.timeEnd(`${numItems} items mergeSort took`)
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
      console.time(`${numItems} items quickSort took`)
      const sortedNums = quickSort(nums)
      console.timeEnd(`${numItems} items quickSort took`)
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
      console.time(`${numItems} items heapSort took`)
      const sortedNums = heapSort(nums)
      console.timeEnd(`${numItems} items heapSort took`)
      expect(sortedNums.length).toBe(nums.length)
      expect(sortedNums[0]).toBe(smallest)
      expect(sortedNums[sortedNums.length - 1]).toBe(largest)
    }
  })
})
