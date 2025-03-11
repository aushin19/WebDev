import { createContext, ReactNode, FC, useState } from "react";

type counterType = {
    count: number,
    increament: ()=>void,
    decreament: ()=>void
}

export const counter = createContext<counterType>({
    count: 0,
    increament: ()=>{},
    decreament: ()=>{}
})

type MyContextCounter = {
    children: ReactNode
}

const ContextCounter: FC<MyContextCounter> = ({children}) => {
    const [count, setCount] = useState(0)

    const increament = () => {
        setCount(count + 1)
    }

    const decreament = () => {
        setCount(count - 1)
    }

  return (
    <counter.Provider value={{count, increament, decreament}}>
        {children}
    </counter.Provider>
  )
}

export default ContextCounter