import axios from "axios";

const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers: {"API-KEY":"978ec9e4-88e0-4331-b5bc-a8ba69be02cb"}
    })

export const usersAPI={
    getUsers (currentPage: number, pageSize: number) {
        return instance.get<responseType>(`users?page=${currentPage}&count=${pageSize}`).then(res=>res.data)
}}

type responseType = {
    items: Array<responseItemType>
    totalCount: number
    error: string
}
type responseItemType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: usersPhotosStateType
    status: string
    followed: boolean
}
type usersPhotosStateType = {
    small: string
    large: string
}