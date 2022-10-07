import { pauseExecution } from './pause-execution'

describe('pauseExecution', () => {
  it('should pause execution', async () => {
    console.time(`execution paused for`)
    await pauseExecution(40)
    console.timeEnd(`execution paused for`)
  })
})
