import axios from "axios";

export const api = axios.create({
    baseURL: "https://blogkg.herokuapp.com"
})

export const login =async (url,data,setData) => {
    const response= await api.post(url,data)
    setData(response.data)
}