import axios from "axios";

export const requestAPI = {
    post(success: boolean) {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: success})
            .then(res => {
                return res.data.errorText
            }).catch(rej => {
                return rej.response.data.errorText
            })
    }
}

