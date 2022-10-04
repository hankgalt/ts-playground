export enum EMITTER_EVENTS {
  LOG = 'log',
}

export enum LOG_LEVEl {
  INFO = 'info',
  ERROR = 'error',
  DEBUG = 'debug',
  WARN = 'warn',
}

export interface LoggingInput {
  level: LOG_LEVEl
  msg: string
  args: any[]
  err?: Error
}
