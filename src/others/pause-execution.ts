export const pauseExecution = async (ms: number) => {
  return await new Promise((resolve) => setTimeout(resolve, ms))
}
