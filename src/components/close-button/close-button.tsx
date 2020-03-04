import React, { useState, useEffect } from 'react'
import boldCloseButton from '../../assests/svgs/bold-close-button.svg'
import lightCloseButton from '../../assests/svgs/light-close-button.svg'

const CloseButton: React.FC = () => {
  const [width, setWidth] = useState<number | null>(null)

  useEffect(() => {
    !width && setWidth(window.innerWidth)

    window.addEventListener("resize", () => setWidth(window.innerWidth))

    return () => window.removeEventListener("resize", () => setWidth(window.innerWidth))
  })

  return (
    width && width < 768
      ? <img style={{ display: 'block' }} src={lightCloseButton} alt="close button" />
      : <img style={{ display: 'block' }} src={boldCloseButton} alt="close button" />
  )
}

export default CloseButton
