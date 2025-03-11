import { AdminInfoList } from "../types/types"

type adminType = {
    admin: AdminInfoList
}


const AdminInfo: React.FC<adminType> = ({admin}) => {
  return (
    <div>
        <h1>{admin.name}</h1>
        <p>{admin.id}</p>
        <p>{admin.email}</p>
        <p>{admin.role}</p>
        <p>{admin.lastLogin.toLocaleString()}</p>
    </div>
  )
}

export default AdminInfo