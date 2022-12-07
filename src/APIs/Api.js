import axios from "axios";

export const register = (name, email, nickName, password) => {
return axios.post("localhost:3333/users/register", {
    name,
    email,
    nickName,
    password
})
}