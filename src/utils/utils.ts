export const getRandomInt = (min: any, max: any): number => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const numGenerator = (
  min: number,
  max: number,
  len: number
): {
  nums: number[]
  smallest: number | undefined
  largest: number | undefined
} => {
  const nums: number[] = []
  let smallest, largest
  for (let z = 0; z < len; z++) {
    const num = getRandomInt(min, max)
    if (!smallest || num < smallest) {
      smallest = num
    }
    if (!largest || num > largest) {
      largest = num
    }
    nums.push(num)
  }
  return { nums, smallest, largest }
}
