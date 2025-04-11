import React from 'react'

interface Props {
  children?: React.ReactNode
}

function Children ({children}:Props) {
  return (
    <button>{children}</button>
  )
}

export default Children