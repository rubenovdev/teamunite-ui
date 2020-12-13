import { useState, ChangeEvent } from 'react'

const useInput = (initialValue: string | number): returnData => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setValue(e.target.value)
  }

  const clear = () => setValue('')

  return {
    value,
    onChange,
    clear,
  }
}

export default useInput

interface returnData {
  value: string | number
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  clear: () => void
}