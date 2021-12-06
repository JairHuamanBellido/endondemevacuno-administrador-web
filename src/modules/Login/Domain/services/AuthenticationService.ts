import { AuthenticationRequest } from "../entity/AuthenticationRequest.interface";

export class AuthenticationService {
  public static async execute(body: AuthenticationRequest) {
    // const httpResponse = await HttpRestApiLogin.login(body)
    // localStorage.setItem('id', httpResponse.id.toString())
    // localStorage.setItem('token', httpResponse.accessToken())
    // return httpResponse
  }
}
