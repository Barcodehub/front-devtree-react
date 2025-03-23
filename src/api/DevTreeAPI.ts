import { isAxiosError } from "axios"
import api from "../config/axios"
import { ProfileForm, User } from "../types"

//conseguir token-auth permiso para acceder a la vista protegida
export async function getUser() {
    
    try {
        const {data} = await api<User>(`/user`, )
        return data
    } catch (error) {
       if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
       }
    }

}


export async function updateProfile(formData: ProfileForm) {
    
    try {
        const {data} = await api.patch<string>(`/user`, formData)
        return data
    } catch (error) {
       if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
       }
    }

}





export async function uploadImage(file: File) {
    let formData = new FormData()
    formData.append('file', file)           //en el backend lo leemos como file (files.file[0])
    try {
        const {data: {image} }: {data: {image: string}} = await api.post(`/user/image`, formData)
        return image
    } catch (error) {
       if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
       }
    }

}