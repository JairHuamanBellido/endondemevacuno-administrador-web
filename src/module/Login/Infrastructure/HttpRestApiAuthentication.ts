import { HttpRestApi } from "../../../core/api/HttpRestApi";
import { AuthenticationRequest } from "../Domain/entity/AuthenticationRequest.interface";

export class HttpRestApiAuthentication {

    public static async login(payload:AuthenticationRequest){
        const {data} = await HttpRestApi.post('/auth', payload)

        return data;
    }
}