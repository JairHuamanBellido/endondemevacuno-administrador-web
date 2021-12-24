import { HttpError } from "core/types/HttpError";
import "./index.scss";

interface IProps {
  error: HttpError;
}
export default function ErrorContainer(props: IProps) {
  const { message } = props.error.response?.data as HttpError;
  return (
    <div data-testid="error" className="border-radius-4 container-error">
      <p>{message}</p>
    </div>
  );
}
