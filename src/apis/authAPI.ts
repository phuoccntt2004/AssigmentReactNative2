import { appInfo } from "./appInfo"
import axiosClient from "./axiosClient"

class AuthAPI {
    handleAuthentication = async (
        url: string,
        data?: any,
        method?: 'get' | 'post' | 'delete' | 'put'
    ) => {
        return await axiosClient(`${appInfo.BASE_URL}/auth${url}`, {
            method: method ?? 'get',
            data
        })
    }
}
const authenticationAPI = new AuthAPI();
export default authenticationAPI;