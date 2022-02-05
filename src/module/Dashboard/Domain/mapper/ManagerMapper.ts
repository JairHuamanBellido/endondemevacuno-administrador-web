import { HttpRestApiManagerResponse } from "module/Dashboard/Infrastructure/model/HttpRestApiManagerResponse.model";
import { Manager } from "../entity/Manager";

export class ManagerMapper {
  public static fromHttpToDomain(
    httpManager: HttpRestApiManagerResponse
  ): Manager {
    httpManager.createdAt = new Date(httpManager.createdAt);
    return {
      id: httpManager.id,
      name: httpManager.name,
      lastname: httpManager.lastname,
      account: httpManager.account,
      isEnabled: httpManager.isEnabled,
      createdAt: `${httpManager.createdAt.getDate()}/${httpManager.createdAt.getMonth() + 1}/${httpManager.createdAt.getFullYear()}`,
    };
  }
}
