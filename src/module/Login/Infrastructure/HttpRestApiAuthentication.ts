import { HttpRestApi } from "core/api/HttpRestApi";
import { AuthenticationRequest as Payload } from "../Domain/entity/AuthenticationRequest.interface";
import { HttpRestApiAuthenticationResponse as Response } from "./model/HttpApiRestAuthenticationResponse.model";

export class HttpRestApiAuthentication {
  public static async login(payload: Payload): Promise<Response> {
    const { data } = await HttpRestApi.post<Response>("/auth", payload);

    return data;
  }
}
