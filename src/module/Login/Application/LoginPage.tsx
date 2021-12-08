import Form from "./components/Form/LoginForm";
import Header from "./components/Header/LoginHeader";

export default function LoginPage() {
  return (
    <div className="loginpage-container flex f-column jc-center ai-center">
      <Header />
      <Form />
    </div>
  );
}
