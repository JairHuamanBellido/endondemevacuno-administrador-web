import { HttpError as Error } from "core/types/HttpError";
import { UpdateAccountStatusService } from "module/Dashboard/Domain/service/UpdateAccountStatusService";
import { HttpRestApiUpdateAccountRequest as Payload } from "module/Dashboard/Infrastructure/model/HttpRestApiUpdateAccountRequest";
import { useMutation } from "react-query";

export default function useUpdateAccountStatus() {
  const mutation = useMutation<void, Error, Payload>((payload) =>
    UpdateAccountStatusService.execute(payload)
  );
  return mutation;
}
