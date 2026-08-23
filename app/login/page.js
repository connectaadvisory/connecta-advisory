import Link from "next/link";
import LoginForm from "@/components/LoginForm";

export const metadata = {
  title: "Acesso de Colaboradores — Connecta Advisory",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <div className="login-wrap">
      <div className="login-card">
        <div className="login-mark">C</div>
        <h1>Acesso de colaboradores</h1>
        <p className="sub">Área reservada à equipa da Connecta Advisory.</p>
        <LoginForm />
        <div className="login-foot">
          <a href="#">Esqueceu-se da palavra-passe?</a>
        </div>
        <div className="login-foot">
          <Link href="/">← Voltar ao site</Link>
        </div>
      </div>
    </div>
  );
}
