import { Link } from "react-router-dom";
import { RefreshIcon } from "shared";

interface IProps {
  onRefresh(): void;
  isFetching: boolean;
}

export default function ManagerOptions(props: IProps) {
  const { onRefresh, isFetching } = props;
  return (
    <div className="manager-options flex f-row jc-end ai-center">
      <Link data-testid="nav-create-credentials" className="border-radius-4" to={"/generate-credentials"}>
        Generar credenciales
      </Link>
      <button
        data-testid="refresh"
        disabled={isFetching}
        onClick={onRefresh}
        className="flex f-row ai-center border-radius-4"
      >
        <RefreshIcon />
        <span>Actualizar</span>
      </button>
    </div>
  );
}
