import { HttRestApiWithInterceptor } from "core/api/HttpRestApi";
import { HttpRestApiManagerResponse } from "./model/HttpRestApiManagerResponse.model";

export class HttpRestApiManager {
  public static async getManagers(): Promise<HttpRestApiManagerResponse[]> {
    const { data } = await HttRestApiWithInterceptor.get<
      HttpRestApiManagerResponse[]
    >("/managers");

    return data;
  }
}
