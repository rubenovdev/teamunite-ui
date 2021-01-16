import { KeyboardEvent } from 'react'

const chars = ['e', 'E', '+', '-', '.']

export default (event: KeyboardEvent<HTMLInputElement>): void => {
  if (chars.includes(event.key)) {
    event.preventDefault()
  }
}
