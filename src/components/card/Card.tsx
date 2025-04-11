import React from 'react'

interface Props {
  children?: React.ReactNode
  title:string
}

function Card({title,children}:Props) {
  return (
    <div><h1>{title}</h1>{children}</div>
  )
}

export default Card