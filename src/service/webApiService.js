import axios from 'axios';

const BASE_API_URL = "https://api.gamerzarena.com/api/"

class webApiService {
    get = (route) => {
        // axios.defaults.headers.common['Authorization'] = this.Authorization()
        return new Promise((resolve, reject) => {
            axios.get(BASE_API_URL + route).then(response => {
                if (response.status === 200) {
                    resolve(response.data);
                } else {
                    reject(response.message);
                }
            });
        });
    };
    post = (route, data) => {
        // axios.defaults.headers.common['Authorization'] = this.Authorization();
        return new Promise((resolve, reject) => {
            axios.post(BASE_API_URL + route, data).then(response => {
                if (response.status === 200) {
                    resolve(response.data);
                } else {
                    reject(response.message)
                }
            });
        });
    };
}

const instance = new webApiService();

export default instance;
