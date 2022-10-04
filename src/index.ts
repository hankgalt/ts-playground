import { EMITTER_EVENTS, LOG_LEVEl } from './types'
import { Emitter } from './utils/emitter'

Emitter.emit(EMITTER_EVENTS.LOG, {
  level: LOG_LEVEl.INFO,
  msg: 'Hey there, %s info',
  args: [process.argv[2]]
})
Emitter.emit(EMITTER_EVENTS.LOG, {
  level: LOG_LEVEl.WARN,
  msg: 'Hey there, %s warn',
  args: [process.argv[2]]
})
Emitter.emit(EMITTER_EVENTS.LOG, {
  level: LOG_LEVEl.DEBUG,
  msg: 'Hey there, %s debug',
  args: [process.argv[2]]
})
Emitter.emit(EMITTER_EVENTS.LOG, {
  level: LOG_LEVEl.ERROR,
  msg: `Hey there, ${process.argv[2]} error`,
  args: [{ name: process.argv[2] }]
})

process.argv.forEach((val, index) => {
  Emitter.emit(EMITTER_EVENTS.LOG, {
    level: LOG_LEVEl.INFO,
    msg: `info ${index}: ${val}`,
    args: [{ index, val }]
  })
})
