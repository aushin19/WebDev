import "./App.css"
// import ContactForm from "./components/ContactForm"
// import EventHandling from "./components/EventHandling"
// import FocusInput from "./components/FocusInput"
// import Form from "./components/Form"
// import Todo from "./components/Todo"
// import Button from "./components/Button"
// import AdminInfo from "./components/AdminInfo"
// import UserInfo from "./components/UserInfo"
// import {info, AdminInfoList} from "./types/types"
// import { useState } from "react"
// import UserProfile from "./components/UserProfile"
import CounterContext from "./Context/CounterContext"
import ContextCounter from './components/ContextCounter';
import ReducerCounter from "./components/ReducerCounter";
import UseEffectItem from "./components/UseEffectItem";


// interface userInfo {
//   name: string,
//   age: number
// }

const App = () => {

  // const user: info = {
  //   id: 1,
  //   name: "shivam",
  //   email: "shivam@gmail.com"
  // }

  // const admin: AdminInfoList = {
  //   id: 2,
  //   name: "shivam2",
  //   email: "shivam2@gmail.com",
  //   role: "admin",
  //   lastLogin: new Date()
  // }

  // const [data, setData] = useState<userInfo>({name: "shivam", age: 20})

  return (
    <div>
      {/* <Button label="Click me" disabled={false} onClick={()=> window.alert("Clicked")}/>
      <Button label="Click me" disabled={true} onClick={()=> window.alert("Clicked")}/> */}

      {/* <UserInfo user={user} />
      <AdminInfo admin={admin} /> */}
      {/* <UserProfile userinfo={data}/> */}
      {/* <Todo/> */}
      {/* <Form/> */}
      {/* <FocusInput/> */}
      {/* <ContactForm/> */}
      {/* <EventHandling/> */}
      {/* <CounterContext>
        <ContextCounter/>
      </CounterContext> */}
      {/* <ReducerCounter/> */}
      <UseEffectItem/>
    </div>
  )
}

export default App