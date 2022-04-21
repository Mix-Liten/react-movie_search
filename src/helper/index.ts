const delay = async (fn: () => any, time: number = 1000): Promise<any> => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), time))
  return fn()
}

export { delay }
