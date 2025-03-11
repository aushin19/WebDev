import { useReducer } from "react"

const initial = {
    count: 0
}

type StateType = {count: number}
type ActionType= {type: "incre"} | {type: "decre"}

const ReducerCounter = () => {
    const reducer = (state: StateType, action: ActionType) => {
        switch(action.type){
            case "incre": return {count: state.count + 1}
            case "decre": return {count: state.count - 1}
            default: return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initial)

  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type: "incre"})}>+</button>
        <button onClick={()=>dispatch({type: "decre"})}>-</button>
    </div>
  )
}

export default ReducerCounter