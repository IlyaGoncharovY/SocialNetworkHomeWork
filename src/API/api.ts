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
   getUsers2 (currentPage: number, pageSize: number)  {
        return instance.get(
            `users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow (userId:number) {
     return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
        })
    },
    unFollow (userId:number) {
       return  instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {

        })
    }

}

// export const getUsers = (currentPage: number, pageSize: number) => {
//     return instance.get(
//         `users?page=${currentPage}&count=${pageSize}`)
//         .then(response => response.data)
// }

// export const getUsers2 = (currentPage: number, pageSize: number) => {
//     return instance.get(
//         `users?page=${currentPage}&count=${pageSize}`)
//         .then(response => response.data)
// }
