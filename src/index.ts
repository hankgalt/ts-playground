console.log('Hey there,', process.argv[2])
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`)
})

console.time('For loop time')
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const query = 'What is your name?\n'
rl.question(query, (answer: string) => {
  console.trace(`Hello ${answer}!`)

  rl.close()
})
console.timeEnd('For loop time')
console.table([
  { Fruit: 'Apple', Quantity: 5 },
  { Fruit: 'Mango', Quantity: 7 },
])

// console.warn('This is a warning!');

// console.error('This is an error');

// console.error(new Error('This is a different error'));
