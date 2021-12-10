import { HttpRestApiManager } from "module/Dashboard/Infrastructure/HttpRestApiManager";
import { Manager } from "../entity/Manager";
import { ManagerMapper } from "../mapper/ManagerMapper";

export class GetManagerService {
  public static async execute(): Promise<Manager[]> {
    const httpResponse = await HttpRestApiManager.getManagers();

    return httpResponse.map((e) => ManagerMapper.fromHttpToDomain(e));
  }
}
