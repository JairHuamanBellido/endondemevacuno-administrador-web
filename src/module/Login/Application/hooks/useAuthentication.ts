import { HttpError } from "core/types/HttpError";
import { AuthenticationRequest } from "module/Login/Domain/entity/AuthenticationRequest.interface";
import { AuthenticationService } from "module/Login/Domain/service/AuthenticationService";
import { useMutation } from "react-query";

export default function useAuthentication() {
  const mutation = useMutation<any, HttpError, AuthenticationRequest>(
    (payload) => AuthenticationService.execute(payload)
  );

  return mutation;
}
