import { HttpRestApiManager } from "module/Dashboard/Infrastructure/HttpRestApiManager";
import { HttpRestApiCreateCredentialsRequest as Payload } from "module/Dashboard/Infrastructure/model/HttpRestApiCreateCredentialsRequest";

export class CreateCredentialService {
  public static async execute(payload: Payload): Promise<void> {
    await HttpRestApiManager.createCredentials(payload);
  }
}
