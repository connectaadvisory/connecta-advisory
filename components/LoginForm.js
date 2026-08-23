"use client";

import { useState } from "react";

export default function LoginForm() {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {
      email: !values.email.trim()
        ? "Preenchimento obrigatório."
        : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
        ? "Introduza um email válido."
        : "",
      password: !values.password ? "Preenchimento obrigatório." : "",
    };
    setErrors(newErrors);
    if (newErrors.email || newErrors.password) return;

    // TODO: ligar à autenticação real (Supabase Auth) quando o sistema interno estiver pronto
    console.log("Tentativa de login:", { email: values.email.trim() });
    alert("Pré-visualização — a autenticação real será ligada ao sistema interno.");
  }

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className="field">
        <label>Email</label>
        <input
          type="email"
          placeholder="nome@connectaadvisory.pt"
          autoComplete="username"
          className={errors.email ? "invalid" : ""}
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
        />
        <span className="field-error">{errors.email}</span>
      </div>
      <div className="field">
        <label>Palavra-passe</label>
        <input
          type="password"
          placeholder="••••••••"
          autoComplete="current-password"
          className={errors.password ? "invalid" : ""}
          value={values.password}
          onChange={(e) => setValues((v) => ({ ...v, password: e.target.value }))}
        />
        <span className="field-error">{errors.password}</span>
      </div>
      <button className="btn btn-primary btn-block" type="submit">
        Entrar
      </button>
    </form>
  );
}
