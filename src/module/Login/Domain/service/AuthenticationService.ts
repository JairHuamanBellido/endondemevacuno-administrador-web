import { HttpRestApiAuthentication } from "../../Infrastructure/HttpRestApiAuthentication";
import { AuthenticationRequest } from "../entity/AuthenticationRequest.interface";

export class AuthenticationService {
  public static async execute(body: AuthenticationRequest) {
    const httpResponse = await HttpRestApiAuthentication.login(body);
    return httpResponse;
  }
}
