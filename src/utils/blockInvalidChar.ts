import { KeyboardEvent } from 'react'

const chars = ['e', 'E', '+', '-', '.']

export default (event: KeyboardEvent<HTMLInputElement>): void => {
  chars.includes(event.key) && event.preventDefault()
}
