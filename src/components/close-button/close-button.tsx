import React, { useState, useEffect } from 'react'

const CloseButton: React.FC = () => {
  const [width, setWidth] = useState<number | null>(null)

  useEffect(() => {
    !width && setWidth(window.innerWidth)

    window.addEventListener("resize", () => setWidth(window.innerWidth))

    return () => window.removeEventListener("resize", () => setWidth(window.innerWidth))
  })

  return (
    width && width < 768
      ? <svg style={{ display: 'block' }} xmlns="http://www.w3.org/2000/svg" width="22.547" height="22.547" viewBox="0 0 22.547 22.547">
        <g id="Group_60" data-name="Group 60" transform="translate(0.354 0.354)">
          <g id="Group_10" data-name="Group 10">
            <line id="Line_13" data-name="Line 13" x2="10.92" y2="10.92" fill="none" stroke="#a5a4a4" strokeWidth="1" />
            <line id="Line_14" data-name="Line 14" x1="10.92" y2="10.92" transform="translate(10.92)" fill="none" stroke="#a5a4a4" strokeWidth="1" />
          </g>
          <g id="Group_11" data-name="Group 11" transform="translate(0 10.92)">
            <line id="Line_13-2" data-name="Line 13" y1="10.92" x2="10.92" fill="none" stroke="#a5a4a4" strokeWidth="1" />
            <line id="Line_14-2" data-name="Line 14" x1="10.92" y1="10.92" transform="translate(10.92)" fill="none" stroke="#a5a4a4" strokeWidth="1" />
          </g>
        </g>
      </svg>
      : <svg style={{ display: 'block' }} xmlns="http://www.w3.org/2000/svg" width="30.621" height="30.621" viewBox="0 0 30.621 30.621">
        <g id="Group_60" data-name="Group 60" transform="translate(-1365.439 -384.08)">
          <g id="Group_10" data-name="Group 10" transform="translate(1366.5 385.141)">
            <line id="Line_13" data-name="Line 13" x2="14.25" y2="14.25" fill="none" stroke="#a5a4a4" strokeWidth="3" />
            <line id="Line_14" data-name="Line 14" x1="14.25" y2="14.25" transform="translate(14.25)" fill="none" stroke="#a5a4a4" strokeWidth="3" />
          </g>
          <g id="Group_11" data-name="Group 11" transform="translate(1366.5 399.391)">
            <line id="Line_13-2" data-name="Line 13" y1="14.25" x2="14.25" fill="none" stroke="#a5a4a4" strokeWidth="3" />
            <line id="Line_14-2" data-name="Line 14" x1="14.25" y1="14.25" transform="translate(14.25)" fill="none" stroke="#a5a4a4" strokeWidth="3" />
          </g>
        </g>
      </svg>
  )
}

export default CloseButton
