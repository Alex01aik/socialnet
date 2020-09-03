import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "557ec186-1694-44c3-ab31-abf563eede9a"
    }
});


export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
    },
    follow (userId) {
        return instance.post(`follow/${userId}`);
    },
    unfollow (userId) {
        return instance.delete(`follow/${userId}`);
    }
}

export const profileAPI = { 
    getProfile (userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus (userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus (status) {
        return instance.put(`profile/status`, { status });
    }
}

export const authAPI = {
    me () {
        return instance.get(`auth/me`);
    }
}
