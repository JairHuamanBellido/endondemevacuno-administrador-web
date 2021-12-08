import { useForm } from "react-hook-form";
import { Spinner } from "../../../../../shared";
import { AuthenticationRequest } from "../../../Domain/entity/AuthenticationRequest.interface";
import useAuthentication from "../../hooks/useAuthentication";
import LoginError from "../Error/ErroLogin";
import "./index.scss";

export default function LoginForm() {
  const { register, handleSubmit } = useForm<AuthenticationRequest>();
  const { mutate, isLoading, isError, error } = useAuthentication();

  const onSubmit = (data: AuthenticationRequest) => {
    mutate(data);
  };

  return (
    <form
      data-testid="form"
      onSubmit={handleSubmit(onSubmit)}
      className="login-form flex f-column ai-center"
    >
      <div className="field flex f-column">
        <label htmlFor="username">Usuario</label>
        <input
          placeholder="Ingrese su usuario"
          type="text"
          data-testid="username"
          {...register("username", { required: true })}
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

      {isError && <LoginError message={error} />}

      {!isLoading && (
        <input data-testid="submit-btn" type="submit" value="Ingresar" />
      )}

      {isLoading && (
        <div
          className="loading-container flex f-row ai-center"
          data-testid="loading"
        >
          <Spinner />
          <p className="font-rubik">Validando credenciales... </p>
        </div>
      )}
    </form>
  );
}
