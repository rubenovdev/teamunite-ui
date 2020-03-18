import React, { useState, useEffect } from '../Modal/node_modules/react'
import boldCloseButton from '../../assets/images/bold-close-button.svg'
import lightCloseButton from '../../assets/images/light-close-button.svg'

const CloseButton: React.FC = () => {
  const [width, setWidth] = useState<number | null>(null)

  useEffect(() => {
    !width && setWidth(window.innerWidth)

    window.addEventListener('resize', () => setWidth(window.innerWidth))

    return (): void =>
      window.removeEventListener('resize', () => setWidth(window.innerWidth))
  }, [width])

  return width && width < 768 ? (
    <img
      style={{ display: 'block' }}
      src={lightCloseButton}
      alt="Закрыть модальное окно"
    />
  ) : (
    <img
      style={{ display: 'block' }}
      src={boldCloseButton}
      alt="Закрыть модальное окно"
    />
  )
}

export default CloseButton
