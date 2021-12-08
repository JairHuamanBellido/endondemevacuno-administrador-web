import { HttpRestApi } from "core/api/HttpRestApi";
import { AuthenticationRequest } from "../Domain/entity/AuthenticationRequest.interface";
import { HttpRestApiAuthenticationResponse } from "./model/HttpApiRestAuthenticationResponse.model";

export class HttpRestApiAuthentication {
  public static async login(
    payload: AuthenticationRequest
  ): Promise<HttpRestApiAuthenticationResponse> {
    const { data } = await HttpRestApi.post<HttpRestApiAuthenticationResponse>(
      "/auth",
      payload
    );

    return data;
  }
}
