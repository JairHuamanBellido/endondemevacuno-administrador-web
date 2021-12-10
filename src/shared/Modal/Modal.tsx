import ReactDOM from "react-dom";

export default function Modal() {
  return ReactDOM.createPortal(
    <div className="modal flex jc-center ai-center">
      <div className="card">
        <h2>Bloquear cuenta</h2>
        <div className="line"></div>
        <p>¿Estas seguro de bloquear esta cuenta?</p>
        <div className="flex f-row">
          <button className="border-radius-4 confirm-button">
            Bloquear cuenta
          </button>
          <button className="reject-button">No</button>
        </div>
      </div>
    </div>,
    document.querySelector("#modal-root") as Element
  );
}
