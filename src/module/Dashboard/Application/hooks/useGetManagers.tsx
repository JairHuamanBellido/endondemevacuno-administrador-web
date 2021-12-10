import { Manager } from "module/Dashboard/Domain/entity/Manager";
import { GetManagerService } from "module/Dashboard/Domain/service/GetManagerService";
import { useQuery } from "react-query";

export default function useGetManagers() {
  return useQuery<Manager[]>("fetchManager", () => GetManagerService.execute(),{retry: 2});
}
