interface HandleBtn{
  click:number,
  onClick:()=>void
}

function Btn({...obj}:HandleBtn) {
  return (
    <button onClick={obj.onClick}>{obj.click}</button>
  )
}

export default Btn