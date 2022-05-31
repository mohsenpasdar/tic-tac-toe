import { useState } from 'react'

const Test = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(1)

  const handlerFunction = () => {
    setX(5)

    function greet() {
      setY(x)
    }
    setTimeout(greet, 2000);

  }

  return (
    <div>
      <button onClick={handlerFunction}>click</button>
      <p>{x}</p>
      <p>{y}</p>
    </div>
  )
}

export default Test
