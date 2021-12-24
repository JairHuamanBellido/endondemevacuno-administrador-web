import { AuthenticationRequest } from "module/Login/Domain/entity/AuthenticationRequest.interface";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router";
import { Spinner } from "shared";
import useAuthentication from "../../hooks/useAuthentication";

import Error from "../../../../../shared/Error/ErrorContainer";
import "./index.scss";
import { HttpError } from "core/types/HttpError";

export default function LoginForm() {
  const { register, handleSubmit } = useForm<AuthenticationRequest>();
  const { mutate, isLoading, isError, isSuccess, error } = useAuthentication();

  const onSubmit = (data: AuthenticationRequest) => {
    mutate(data);
  };
  if (isSuccess) return <Navigate replace to="/" />;
  return (
    <form
      data-testid="form"
      onSubmit={handleSubmit(onSubmit)}
      className="login-form flex f-column ai-center"
    >
      <div className="field flex f-column">
        <label htmlFor="email">Correo electrónico</label>
        <input
          placeholder="Ingrese su correo electrónico"
          type="text"
          data-testid="email"
          {...register("email", { required: true })}
        />
      </div>
      <div className="field flex f-column">
        <label htmlFor="password">Contraseña</label>
        <input
          data-cy="s"
          placeholder="Ingrese su contraseña"
          type="password"
          data-testid="password"
          {...register("password", { required: true })}
        />
      </div>

      {isError && <Error error={error as HttpError} />}

      {!isLoading && (
        <input data-testid="submit-btn" type="submit" value="Ingresar" />
      )}

      {isLoading && (
        <div
          className="loading-container flex f-row ai-center"
          data-testid="loading"
        >
          <Spinner />
          <p>Validando credenciales... </p>
        </div>
      )}
    </form>
  );
}
