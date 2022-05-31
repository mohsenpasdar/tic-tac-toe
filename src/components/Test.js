import { useState } from 'react'

const Test = () => {
  const [q, setQ] = useState({x: 0, y: -99})
  

  const handlerFunction = () => {
    setQ(q => ({...q, x: q.x + 1}))
    setQ(q => ({...q, y: q.x + 1}))
    

  }

  return (
    <div>
      <button onClick={handlerFunction}>click</button>
      <p>{q.x}</p>
      <p>{q.y}</p>
    </div>
  )
}

export default Test
