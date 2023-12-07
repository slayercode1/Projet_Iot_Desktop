import React, { FC, useEffect, useState } from 'react'

interface ISidePage {
  open: boolean
  children: React.ReactNode
}

const SidePage: FC<ISidePage> = ({ open = false, children }) => {
  const [isVisible, setVisible] = useState(false)
  useEffect(() => {
    if (open) {
      setVisible(true)
      document.body.style.overflowX = 'hidden'
    } else {
      setTimeout(() => {
        setVisible(false)
      }, 450)
    }
  }, [open])

  return isVisible ? (
    <div
      className={`side-page ${open ? 'open' : 'closed'} relative`}
      style={{
        transition: '0.5s',
        animation: `${open ? 'openSideModal' : 'closeSideModal'} .5s 1`,
      }}
    >
      {children}
    </div>
  ) : null
}

export default SidePage
