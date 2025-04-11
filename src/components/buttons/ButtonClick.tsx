// import React, { useState } from 'react'

interface btnCount{
  countttt:string
}

function Button({countttt}:btnCount) {
  // const[count,setCount] = useState(0)
  // function handleClick(){
  //   setCount(count+1)
  // }
  return (
    <button> {countttt}</button>
  )
}

export default Button