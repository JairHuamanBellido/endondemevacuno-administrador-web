import { HttpError } from "core/types/HttpError";
import "./index.scss";

interface IProps {
  message: HttpError | null;
}
export default function LoginError(props: IProps) {
  const errorMessage = props.message?.response?.data.message;
  return (
    <div data-testid="error" className="border-radius-4 container-error">
      <p>{errorMessage}</p>
    </div>
  );
}
