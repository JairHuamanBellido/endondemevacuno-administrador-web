import ReactDOM from "react-dom";
import { Spinner } from "shared";

interface IProps {
  onConfirm(): void;
  onCancel(): void;
  isLoading: boolean;
  eventName: string;
}

export default function Modal(props: IProps) {
  const { eventName, onConfirm, onCancel, isLoading } = props;
  return ReactDOM.createPortal(
    <div data-testid="modal" className="modal flex jc-center ai-center">
      <div className="card">
        <h2>{eventName} cuenta</h2>
        <div className="line"></div>
        <p>¿Estas seguro de {eventName.toLowerCase()} esta cuenta?</p>
        <div className="flex f-row jc-center ai-center">
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <button
                data-testid="confirm-modal"
                onClick={onConfirm}
                className="border-radius-4 confirm-button"
              >
                {eventName} cuenta
              </button>
              <button
                data-testid="cancel-modal"
                onClick={onCancel}
                className="reject-button"
              >
                No
              </button>
            </>
          )}
        </div>
      </div>
    </div>,
    document.querySelector("#modal-root") as Element
  );
}
