import { useState, useRef, FormEvent } from "react"


type contactFormType = {
    name: string,
    age: number,
    phoneNumber: number,
}

const Form = () => {

    const [details, setDetails] = useState<contactFormType>({
        name: '',
        age: 0,
        phoneNumber: 0,
    })

    const name = useRef<HTMLInputElement>(null)
    const age = useRef<HTMLInputElement>(null)
    const phoneNumber = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

       const nameValue = name.current!.value 
       const ageValue = age.current!.value 
       const phoneValue = phoneNumber.current!.value 

       setDetails({
        name: nameValue,
        age: +ageValue,
        phoneNumber: +phoneValue,
       })

    }


  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Name" ref={name}/>
        <input type="text" placeholder="Enter Age" ref={age}/>
        <input type="text" placeholder="Enter Phone Number" ref={phoneNumber}/>

        <button type="submit">Submit</button>

        <section>
            <p>Name: {details.name}</p>
            <p>Age: {details.age}</p>
            <p>Phone: {details.phoneNumber}</p>
        </section>
    </form>

  )
}

export default Form