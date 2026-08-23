"use client";

import { useState } from "react";

const REQUIRED_MSG = "Preenchimento obrigatório.";

function formatPhone(raw) {
  const digits = raw.replace(/\D/g, "").slice(0, 9);
  return digits.replace(/(\d{3})(?=\d)/g, "$1 ").trim();
}

const initialValues = {
  nome: "",
  email: "",
  tel: "",
  assunto: "",
  mensagem: "",
  consent: false,
};

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function setField(name, value) {
    setValues((v) => ({ ...v, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const telDigits = values.tel.replace(/\D/g, "");
    const newErrors = {
      nome:
        !values.nome.trim() ? REQUIRED_MSG
        : values.nome.trim().length < 3 ? "Introduza o seu nome completo."
        : "",
      email:
        !values.email.trim() ? REQUIRED_MSG
        : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) ? "Introduza um email válido."
        : "",
      tel:
        !values.tel.trim() ? REQUIRED_MSG
        : telDigits.length < 9 ? "Introduza um número válido."
        : "",
      assunto: values.assunto ? "" : REQUIRED_MSG,
      mensagem:
        !values.mensagem.trim() ? REQUIRED_MSG
        : values.mensagem.trim().length < 10 ? "Escreva uma mensagem um pouco mais detalhada."
        : "",
      consent: values.consent ? "" : "Tem de aceitar a Política de Privacidade e os Termos e Condições.",
    };
    setErrors(newErrors);

    const firstInvalidField = Object.keys(newErrors).find((k) => newErrors[k]);
    if (firstInvalidField) {
      const el = document.querySelector(`[data-field="${firstInvalidField}"]`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add("shake");
        setTimeout(() => el.classList.remove("shake"), 400);
      }
      return;
    }

    const payload = {
      nome: values.nome.trim(),
      email: values.email.trim(),
      telefone: "+351" + telDigits,
      assunto: values.assunto,
      mensagem: values.mensagem.trim(),
    };

    // TODO: substituir por chamada real à API (ex: fetch('/api/contact', {method:'POST', body: JSON.stringify(payload)}))
    console.log("Mensagem de contacto submetida:", payload);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form-success" style={{ display: "block" }}>
        <div className="ok-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 12.5L9.5 18L20 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3>Mensagem enviada!</h3>
        <p>Obrigado pelo contacto. Respondemos dentro de 24 horas úteis.</p>
      </div>
    );
  }

  return (
    <form className="lead-form" noValidate onSubmit={handleSubmit}>
      <div className="field" data-field="nome">
        <label>Nome completo</label>
        <input
          type="text"
          placeholder="O seu nome"
          autoComplete="name"
          className={errors.nome ? "invalid" : ""}
          value={values.nome}
          onChange={(e) => setField("nome", e.target.value)}
        />
        <span className="field-error">{errors.nome}</span>
      </div>

      <div className="field" data-field="email">
        <label>Email</label>
        <input
          type="email"
          placeholder="email@exemplo.pt"
          autoComplete="email"
          className={errors.email ? "invalid" : ""}
          value={values.email}
          onChange={(e) => setField("email", e.target.value)}
        />
        <span className="field-error">{errors.email}</span>
      </div>

      <div className="field" data-field="tel">
        <label>Telemóvel</label>
        <div className="phone-row">
          <span className="phone-prefix">+351</span>
          <input
            type="tel"
            inputMode="numeric"
            placeholder="912 345 678"
            maxLength={11}
            autoComplete="tel-national"
            className={errors.tel ? "invalid" : ""}
            value={values.tel}
            onChange={(e) => setField("tel", formatPhone(e.target.value))}
          />
        </div>
        <span className="field-error">{errors.tel}</span>
      </div>

      <div className="field" data-field="assunto">
        <label>Assunto</label>
        <select
          className={errors.assunto ? "invalid" : ""}
          value={values.assunto}
          onChange={(e) => setField("assunto", e.target.value)}
        >
          <option value="" disabled>
            Selecionar…
          </option>
          <option value="Contrato">Contrato</option>
          <option value="Outros assuntos">Outros assuntos</option>
        </select>
        <span className="field-error">{errors.assunto}</span>
      </div>

      <div className="field" data-field="mensagem">
        <label>Mensagem</label>
        <textarea
          placeholder="Escreva aqui a sua mensagem..."
          className={errors.mensagem ? "invalid" : ""}
          value={values.mensagem}
          onChange={(e) => setField("mensagem", e.target.value)}
        />
        <span className="field-error">{errors.mensagem}</span>
      </div>

      <div className="checkbox-row" data-field="consent">
        <input
          type="checkbox"
          id="consent"
          checked={values.consent}
          onChange={(e) => setField("consent", e.target.checked)}
        />
        <label htmlFor="consent">
          Li e aceito a <a href="/privacidade" target="_blank">Política de Privacidade</a> e os{" "}
          <a href="/termos" target="_blank">Termos e Condições</a>.
        </label>
      </div>
      <span className="field-error" style={{ marginBottom: 8, display: "block" }}>
        {errors.consent}
      </span>

      <button className="btn btn-primary btn-block" type="submit">
        Enviar mensagem →
      </button>
      <p className="form-note">Não partilhamos os seus dados com terceiros. RGPD.</p>
    </form>
  );
}
