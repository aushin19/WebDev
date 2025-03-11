import { useRef } from "react"

const FocusInput = () => {
    const inputValue = useRef<HTMLInputElement>(null)
  return (
    <div>
        <input type="text"  placeholder="Enter here..." ref={inputValue}/>
        <button onClick={() => inputValue.current!.focus()}>Focus</button>
    </div>
  )
}

export default FocusInput