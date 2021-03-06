import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "3464b8a0-c9aa-4269-a1f1-731b09a66663"
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(
            `users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    // getUsers2 (currentPage: number, pageSize: number)  {
    //      return instance.get(
    //          `users?page=${currentPage}&count=${pageSize}`)
    //          .then(response => response.data)
    //  },
    follow(userId: number) {
        return instance.post(`follow/${userId}`, {}, {})
    },
    unFollow(userId: number) {
        return instance.delete(`follow/${userId}`, {})
    },
    getProfile(userId: number) {
        console.warn("Old method. Please profileApi obj")
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
    },
    getUserStatus(userId:number) {
        return instance.get("profile/status/" + userId)
    },
    updateStatus(status:string) {
        return instance.put("profile/status/", {status})
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}