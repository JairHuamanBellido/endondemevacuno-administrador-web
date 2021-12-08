import LoginForm from "./components/Form/LoginForm";
import LoginHeader from "./components/Header/LoginHeader";

export default function LoginPage() {
  return (
    <div className="loginpage-container flex f-column jc-center ai-center">
      <LoginHeader />
      <LoginForm />
    </div>
  );
}
