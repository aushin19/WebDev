import { useContext } from "react"
import {counter} from "../Context/CounterContext"

const ContextCounter = () => {

  const data = useContext(counter)
  return (
    <div>
      <h1>{data.count}</h1>
      <button onClick={data.increament}>+</button>
      <button onClick={data.decreament}>-</button>
    </div>
  )
}

export default ContextCounter