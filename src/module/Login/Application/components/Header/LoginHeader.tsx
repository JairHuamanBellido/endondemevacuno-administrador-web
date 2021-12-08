import Logo from "assets/logo.svg";
import "./index.scss";

export default function LoginHeader() {
  return (
    <div className="login-header flex jc-center f-row ai-center">
      <img data-testid="logo-login" src={Logo} alt="" />
      <div className="flex f-column ai-start jc-center">
        <h1 className="font-rubik">Helios</h1>
        <p className="font-rubik">Sistema administrador</p>
      </div>
    </div>
  );
}
