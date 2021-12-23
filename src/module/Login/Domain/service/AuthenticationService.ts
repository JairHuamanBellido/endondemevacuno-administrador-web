import { HttpRestApiAuthentication } from "module/Login/Infrastructure/HttpRestApiAuthentication";
import { AuthenticationRequest } from "../entity/AuthenticationRequest.interface";

export class AuthenticationService {
  public static async execute(body: AuthenticationRequest) {
    const httpResponse = await HttpRestApiAuthentication.login(body);
    localStorage.setItem("token", httpResponse.token);
    return httpResponse;
  }
}
