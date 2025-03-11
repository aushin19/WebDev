import { useState } from "react"

interface userInfo {
    name: string,
    age: number
}

type userType = {
    data: userInfo
}

const UserProfile: React.FC<userType> = ({data}) => {

    const [details, setDetails] = useState<userInfo>(data)

  return (
    <div>
        <h1>{details.name}</h1>
        <h1>{details.age}</h1>
    </div>
  )
}

export default UserProfile