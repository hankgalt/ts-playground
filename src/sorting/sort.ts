export const selectionSort = (nums: number[]): number[] => {
  if (nums.length <= 1) {
    return nums
  }
  // Traverse through all the elements in the number array.
  for (let i = 0; i < nums.length; i++) {
    // Set the current item to be the smallest/minimum.
    let minIdx = i
    // Find the minimum element in remaining unsorted array.
    for (let j = i + 1; j < nums.length; j++) {
      // If the next number is smaller than the current number,
      // reassign our reference to the the index of the smallest number
      if (nums[j] < nums[minIdx]) {
        minIdx = j
      }
    }
    // If the number we're looking at is the smallest in size, swap it with the first element.
    if (minIdx !== i) {
      swap(nums, i, minIdx)
    }
  }
  return nums
}

export const bubbleSort = (nums: number[]): number[] => {
  if (nums.length <= 1) {
    return nums
  }
  let isSorted = false
  while (!isSorted) {
    isSorted = true
    // Iterate until we get to the last element
    for (let i = 1; i < nums.length; i++) {
      // If the element to the left is bigger, then swap the element
      // that we're currently looking at with its left neighbor.
      if (nums[i - 1] > nums[i]) {
        isSorted = false
        // Swap elements by creating a temporary reference.
        swap(nums, i, i - 1)
      }
    }
  }
  return nums
}

export const insertionSort = (nums: number[]): number[] => {
  if (nums.length <= 1) {
    return nums
  }

  // Traverse through length of array, starting with the element at index 0.
  for (let i = 0; i < nums.length; i++) {
    // current place in the unsorted portion of the array.
    // currentUnsortedItem is the item we will be moving into the "sorted" subset of our array.
    const current = nums[i]
    // Iterate through sorted items.
    // If the current unsorted item is smaller than the item to its left,
    // move the current item back one position in the array.
    // This loop will never run for the very first unsorted item at index 0.
    let j = i
    while (j > 0 && current < nums[j - 1]) {
      // Shift item left in the sorted subset of the array.
      nums[j] = nums[j - 1]
      j--
    }
    // Shift item to the right in the sorted subset fo the array.
    nums[j] = current
  }
  return nums
}

export const mergeSort = (nums: number[]): number[] => {
  if (nums.length <= 1) {
    return nums
  }

  // If array contains more than one element,
  // split it into two left and right parts.
  const mid = Math.floor(nums.length / 2)
  const left = nums.slice(0, mid)
  const right = nums.slice(mid)

  // Recursively call mergeSort() on left and right sublists.
  mergeSort(left)
  mergeSort(right)

  // After the mergeSort functions above finish executing,
  // merge the sorted left and right parts together.
  merge(left, right, nums)

  return nums
}

export const quickSort = (nums: number[]): number[] => {
  if (nums.length <= 1) {
    return nums
  }

  return quickSorter(nums, 0, nums.length - 1)
}

export const heapSort = (nums: number[]): number[] => {
  // Build our max heap.
  buildMaxHeap(nums)

  // Find size
  let last = nums.length - 1

  // Continue heap sorting until we have
  // just one element left in the array.
  while (last > 0) {
    swap(nums, 0, last)
    heapify(nums, 0, last)
    last -= 1
  }

  return nums
}

const quickSorter = (nums: number[], left: number, right: number): number[] => {
  if (nums.length <= 1) {
    return nums
  }

  const pivotIdx = partition(nums, left, right)

  // If the left reference hasn't been incremented to
  // reach the pivot yet, we want to keep comparing it.
  if (left < pivotIdx - 1) {
    quickSorter(nums, left, pivotIdx - 1)
  }

  // If the right reference hasn't reached the
  // pivotIndex yet, we need to keep comparing it.
  if (pivotIdx < right) {
    quickSorter(nums, pivotIdx, right)
  }

  return nums
}

const merge = (left: number[], right: number[], nums: number[]): void => {
  let idx = 0
  while (left.length > 0 && right.length > 0) {
    if (right[0] < left[0]) {
      const num = right.shift()
      if (num) {
        nums[idx++] = num
      }
    } else {
      const num = left.shift()
      if (num) {
        nums[idx++] = num
      }
    }
  }

  while (left.length > 0) {
    const num = left.shift()
    if (num) {
      nums[idx++] = num
    }
  }

  while (right.length > 0) {
    const num = right.shift()
    if (num) {
      nums[idx++] = num
    }
  }
}

// The partition() method takes a list of items, and a left
// reference, as well as a right reference. Both left and right
// are indexes to indicate where the pointers should start.
const partition = (nums: number[], left: number, right: number): number => {
  // Find the pivot by adding the two indexes together
  // and dividing by two (the middle element, effectively).
  const pivot = nums[Math.floor((right + left) / 2)]
  let l = left
  let r = right

  // Once the left reference is greater than the right reference,
  // we have finished sorting this set of items, and we can return.
  while (l <= r) {
    // If the left pointer is less than the pivot, increment it.
    // In other words, move the pointer to the right.
    while (nums[l] < pivot) {
      l++
    }
    // If the right pointer is greater than the pivot, decrement it.
    // In other words, move the pointer to the left.
    while (nums[r] > pivot) {
      r--
    }

    // If the left pointer is larger than the pivot, and the right
    // pointer is not bigger than the pivot, swap the two elements.
    if (l <= r) {
      swap(nums, l, r)
      // After swapping, increment/decrement the pointers respectively.
      l++
      r--
    }
  }
  return l
}

const buildMaxHeap = (nums: number[]): void => {
  let i = Math.floor(nums.length / 2 - 1)
  while (i >= 0) {
    heapify(nums, i, nums.length)
    i -= 1
  }
}

const heapify = (nums: number[], i: number, max: number): void => {
  let idx, left, right

  while (i < max) {
    idx = i
    left = 2 * i + 1
    right = left + 1

    if (left < max && nums[left] > nums[idx]) {
      idx = left
    }

    if (right < max && nums[right] > nums[idx]) {
      idx = right
    }

    if (idx === i) {
      return
    }

    swap(nums, i, idx)
    i = idx
  }
}

export const swap = (nums: number[], i: number, j: number): void => {
  const temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}
