type info = {
    id: number,
    name: string,
    email: string
}

type AdminInfoList = info & {
    role: string,
    lastLogin: Date
}

export {type info, type AdminInfoList}