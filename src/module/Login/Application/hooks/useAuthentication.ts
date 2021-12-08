import { useMutation } from "react-query";
import { HttpError } from "../../../../core/types/HttpError";
import { AuthenticationRequest } from "../../Domain/entity/AuthenticationRequest.interface";
import { AuthenticationService } from "../../Domain/service/AuthenticationService";

export default function useAuthentication() {
  const mutation = useMutation<any, HttpError, AuthenticationRequest>((payload) =>
    AuthenticationService.execute(payload)
  );

  return mutation;
}
