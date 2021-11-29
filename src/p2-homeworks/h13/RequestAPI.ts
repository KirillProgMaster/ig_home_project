import axios from "axios"


export const RequestAPI = {
    setSuccessStatus(success:boolean){
        return axios.post<ResponseType>('https://neko-cafe-back.herokuapp.com/auth/test', {success})
    },

}

export type ResponseType={
    errorText: string
    info: string
}