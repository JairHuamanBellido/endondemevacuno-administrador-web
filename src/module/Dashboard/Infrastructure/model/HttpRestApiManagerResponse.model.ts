import { Account } from "module/Dashboard/Domain/entity/Account";

export interface HttpRestApiManagerResponse {
  id: string;
  name: string;
  lastname: string;
  isEnabled: boolean;
  createdAt: Date;
  account: Account;
}
