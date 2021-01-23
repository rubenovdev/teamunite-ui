export default (value: string): string => {
  if (value.length >= 2 && value[0] === '0') return value.slice(1)
  return value
}
