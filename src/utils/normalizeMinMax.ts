export default (value: string, min?: number, max?: number): string => {
  if (!value) return value

  if (min) {
    if (+value < min) return min.toString()
  }

  if (max) {
    if (+value > max) return max.toString()
  }

  return value
}
