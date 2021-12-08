import { HttpError } from "core/types/HttpError";
import "./index.scss";

interface IProps {
  message: HttpError | null;
}
export default function LoginError(props: IProps) {
  const nsg = props.message?.response?.data.message;
  // console.log(props.message.response.data.message);
  return (
    <div data-testid="error" className="border-radius-4 container-error">
      <p>{nsg}</p>
      {/* <p>Credenciales incorrectas</p> */}
    </div>
  );
}
