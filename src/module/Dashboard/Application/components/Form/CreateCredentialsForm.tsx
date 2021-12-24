import { HttpError } from "core/types/HttpError";
import { HttpRestApiCreateCredentialsRequest as Payload } from "module/Dashboard/Infrastructure/model/HttpRestApiCreateCredentialsRequest";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { Spinner } from "shared";
import ErrorContainer from "shared/Error/ErrorContainer";
import useCreateCredentials from "../../hooks/useCreateCredentials";

export default function CreateCredentialsForm() {
  const { register, handleSubmit } = useForm<Payload>();
  const { mutate, isLoading, isSuccess, isError, error } =
    useCreateCredentials();

  const onSubmit = (data: Payload) => {
    mutate(data);
  };

  if (isSuccess) return <Navigate replace to="/" />;
  return (
    <form data-testid="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex f-row jc-space-between ai-center">
        <div className="field flex f-column">
          <label htmlFor="">Nombres</label>
          <input
            {...register("name", { required: true })}
            type="text"
            data-testid="name"
            placeholder="Ingrese sus nombre"
          />
        </div>
        <div className="field flex f-column">
          <label htmlFor="">Apellidos</label>
          <input
            {...register("lastname", { required: true })}
            type="text"
            data-testid="lastname"
            placeholder="Ingrese sus apellidos"
          />
        </div>
      </div>
      <div className="flex f-row jc-space-between ai-center">
        <div className="field flex f-column">
          <label htmlFor="">DNI</label>
          <input
            {...register("dni", { required: true })}
            type="text"
            maxLength={8}
            data-testid="dni"
            placeholder="Ingrese su dni"
          />
        </div>
        <div className="field flex f-column">
          <label htmlFor="">Correo electrónico</label>
          <input
            {...register("email", { required: true })}
            type="email"
            data-testid="email"
            placeholder="Ingrese sus correo"
          />
        </div>
      </div>
      <div className="submit-container field flex f-column  ai-center jc-center">
        {isError && <ErrorContainer error={error as HttpError} />}
        {!isLoading && <input type="submit" value={"Generar credenciales"} />}
        {isLoading && <Spinner />}
      </div>
    </form>
  );
}
