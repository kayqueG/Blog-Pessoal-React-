import axios from "axios";

export const api = axios.create({
    baseURL: "https://blogkg.herokuapp.com"
})


export const registerUser =async (url: any,data: any,setData:any) => {
    const response= await api.post(url,data)
    setData(response.data)
}

export const login =async (url: any,data: any,setData:any) => {
    const response= await api.post(url,data)
    setData(response.data.token)
}
export const search =async (url: any,setData:any,header: any) => {
    const response= await api.get(url,header)
    setData(response.data)
}