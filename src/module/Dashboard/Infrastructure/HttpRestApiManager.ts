import { HttRestApiWithInterceptor } from "core/api/HttpRestApi";
import { HttpDefaultResponse } from "core/types/HttpDefaultResponse";
import { HttpRestApiManagerResponse } from "./model/HttpRestApiManagerResponse.model";
import { HttpRestApiUpdateAccountRequest } from "./model/HttpRestApiUpdateAccountRequest";

export class HttpRestApiManager {
  public static async getManagers(): Promise<HttpRestApiManagerResponse[]> {
    const { data } = await HttRestApiWithInterceptor.get<
      HttpRestApiManagerResponse[]
    >("/managers");

    return data;
  }

  public static async updateAccountStatus(
    payload: HttpRestApiUpdateAccountRequest
  ): Promise<HttpDefaultResponse> {
    const { data } = await HttRestApiWithInterceptor.put<HttpDefaultResponse>(
      "/manager",
      payload
    );

    return data;
  }
}
