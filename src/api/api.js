import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "557ec186-1694-44c3-ab31-abf563eede9a"
    }
});


export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
    },
    follow (userId) {
        return instance.post(`/follow/${userId}`)
    },
    unfollow (userId) {
        return instance.delete(`/follow/${userId}`)
    }
}

export const authoring = (setAuthUserData) => {
    instance.get(`/auth/me`)
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                setAuthUserData({id, login, email});
            }
        });
}
