import { info } from "../types/types"

type userType = {
    user: info
}

const UserInfo: React.FC<userType> = ({user}) => {
  return (
    <div>
        <h1>{user.name}</h1>
        <p>{user.id}</p>
        <p>{user.email}</p>
    </div>

  )
}

export default UserInfo