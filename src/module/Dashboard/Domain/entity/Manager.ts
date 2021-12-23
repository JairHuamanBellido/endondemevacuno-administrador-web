import { Account } from "./Account";

export interface Manager {
  id: string;
  name: string;
  lastname: string;
  isEnabled: boolean;
  createdAt: string;
  account: Account;
}
