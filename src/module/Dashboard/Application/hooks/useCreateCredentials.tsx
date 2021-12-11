import { HttpError as Error } from "core/types/HttpError";
import { CreateCredentialService } from "module/Dashboard/Domain/service/CreateCredentialService";
import { HttpRestApiCreateCredentialsRequest as Payload } from "module/Dashboard/Infrastructure/model/HttpRestApiCreateCredentialsRequest";
import { useMutation } from "react-query";

export default function useCreateCredentials() {
  const mutation = useMutation<void, Error, Payload>((payload) =>
    CreateCredentialService.execute(payload)
  );
  return mutation;
}
