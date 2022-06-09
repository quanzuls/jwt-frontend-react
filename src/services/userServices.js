import axios from "axios";
import { defaults } from "lodash";

const registerNewUser = (email, fullName, password, phone) => {
    return axios.post('http://localhost:8080/api/v1/register', {
        email, fullName, password, phone
    })
}
const loginUser = (valueLogin, password) => {
    return axios.post('http://localhost:8080/api/v1/login', {
        valueLogin, password
    })
    // return `>> check FE API axios username: ${valueLogin}`;

}
const fetchAllUsers = (page, limit) => {
    return axios.get(`http://localhost:8080/api/v1/user/read?page=${page}&limit=${limit}`);
}
export {
    registerNewUser, loginUser, fetchAllUsers,
}