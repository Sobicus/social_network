import axios from "axios";
import {ProfileType} from "../redux/store";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "978ec9e4-88e0-4331-b5bc-a8ba69be02cb"}
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<responseUsersType>(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    },
    followUser(userId: number) {
        return instance.post<FollowUnfollowType>(`follow/${userId}`)
    },
    unfollowUser(userId: number) {
        return instance.delete<FollowUnfollowType>(`follow/${userId}`)
    }
}
export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`)
    }
}
export const authAPI = {
    authMe() {
        return instance.get<responseAuthType>('auth/me')
    }
}

type responseUsersType = {
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
type FollowUnfollowType = {
    resultCode: number
    messages: Array<string>
    data: {}
}
type responseAuthType = {
    data: responseDataType
    resultCode: number
    messages: Array<string>

}
type responseDataType = {
    id: number
    email: string
    login: string
}