import { HttpError } from "core/types/HttpError";
import { HttpRestApiCreateCredentialsRequest as Payload } from "module/Dashboard/Infrastructure/model/HttpRestApiCreateCredentialsRequest";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { Spinner } from "shared";
import ErrorContainer from "shared/Error/ErrorContainer";
import useCreateCredentials from "../../hooks/useCreateCredentials";
import { useNavigate } from "react-router-dom";

export default function CreateCredentialsForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Payload>();
  const { mutate, isLoading, isSuccess, isError, error } =
    useCreateCredentials();
  const navigate = useNavigate();

  const onSubmit = (data: Payload) => {
    mutate(data, {
      onSuccess: () => {
        setTimeout(() => {
          navigate("/");
        }, 1500);
      },
    });
  };

  const { dni, email, lastname, name } = watch();

  // if (isSuccess) return <Navigate replace to="/" />;
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
            {...register("dni", { required: true, minLength: 8 })}
            type="text"
            maxLength={8}
            data-testid="dni"
            placeholder="Ingrese su dni"
          />
          {errors.dni && (
            <p className="error">El dni debe de tener 8 dígitos</p>
          )}
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
        {!isLoading && !isSuccess && (
          <button
            disabled={
              dni === "" ||
              email === "" ||
              lastname === "" ||
              name === "" ||
              dni === undefined
            }
            type="submit"
          >
            Enviar Correo{" "}
          </button>
        )}
        {isLoading && <Spinner />}
        {isSuccess && (
          <div>
            <p style={{ color: "#1fff71", fontSize: 18 }}>
              El correo se ha enviado exitosamente
            </p>
            <div
              style={{ display: "flex", alignItems: "center", marginTop: 16 }}
            >
              <Spinner />
              <p style={{ marginLeft: 8, color: "#fff", opacity: 0.8 }}>
                Redireccionando a la vista principal
              </p>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}
