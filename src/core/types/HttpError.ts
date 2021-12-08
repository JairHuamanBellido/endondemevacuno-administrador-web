import { AxiosError } from "axios";

type HttpErrorResponse = {
  readonly message: string;
};
export type HttpError = AxiosError<HttpErrorResponse>;
