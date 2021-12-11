import { HttpRestApiManager } from "module/Dashboard/Infrastructure/HttpRestApiManager";
import { HttpRestApiUpdateAccountRequest as Payload } from "module/Dashboard/Infrastructure/model/HttpRestApiUpdateAccountRequest";

export class UpdateAccountStatusService {
  public static async execute(payload: Payload): Promise<void> {
    await HttpRestApiManager.updateAccountStatus(payload);
  }
}
