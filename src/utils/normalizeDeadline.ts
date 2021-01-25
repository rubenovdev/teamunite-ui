export default (value: string): string => {
  return (
    value
      .replace(/\./g, '')
      .match(/.{1,2}/g)
      ?.join('.')
      .substr(0, 8) || ''
  )
}
