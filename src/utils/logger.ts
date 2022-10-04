import { EMITTER_EVENTS, LOG_LEVEl, LoggingInput } from '../types'
import { Emitter } from './emitter'
require('colors')
const pino = require('pino')

const streams = [
  { stream: process.stdout },
  {
    level: LOG_LEVEl.ERROR,
    stream: pino.destination({ dest: './stderr.log', sync: false })
  },
  { stream: pino.destination({ dest: './stdout.log', sync: false }) }
]

const logger = pino(
  {
    level: process.env.PINO_LOG_LEVEL || LOG_LEVEl.INFO
  },
  pino.multistream(streams, { dedupe: true })
)

const handleLogging = ({ level, msg, args, err }: LoggingInput) => {
  console.log('handleLogging() - loggingInput: ', { level, msg, args, err })
  switch (level) {
    case LOG_LEVEl.INFO:
      logger.info(msg, ...args)
      break
    case LOG_LEVEl.DEBUG:
      logger.debug(msg, ...args)
      break
    case LOG_LEVEl.WARN:
      logger.warn(msg, ...args)
      break
    case LOG_LEVEl.ERROR:
      logger.error(err, msg, ...args)
      break
    default:
      logger.info(msg, ...args)
  }
}

Emitter.on(EMITTER_EVENTS.LOG, handleLogging)
