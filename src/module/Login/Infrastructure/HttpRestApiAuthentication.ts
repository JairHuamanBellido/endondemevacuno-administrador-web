import { HttpRestApi } from "core/api/HttpRestApi";
import { HttpRestApiAuthenticationRequest as Payload } from "./model/HttpApiRestAuthenticationRequest.model";
import { HttpRestApiAuthenticationResponse as Response } from "./model/HttpApiRestAuthenticationResponse.model";

export class HttpRestApiAuthentication {
  public static async login(payload: Payload): Promise<Response> {
    const { data } = await HttpRestApi.post<Response>(
      "/authentication/admin",
      payload
    );

    return data;
  }
}
