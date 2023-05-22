import axios from "axios";

console.log(localStorage.getItem("token"))
const apiCustom = axios.create({
    baseURL: 'http://localhost:3001/',
    headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
    },
})
export default apiCustom;