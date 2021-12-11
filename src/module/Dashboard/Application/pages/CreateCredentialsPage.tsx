import Form from "../components/Form/CreateCredentialsForm";
import Header from "../components/Header/Header";

export default function CreateCredentialsPage() {
  return (
    <div className="create-credentials-container">
      <Header
        isBackIcon={true}
        title="Generar credenciales"
        description="Complete los siguientes campos para registrar al responsable del centro de vacunación"
      />
      <Form />
    </div>
  );
}
