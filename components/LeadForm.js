"use client";

import { useState } from "react";

const REQUIRED_MSG = "Preenchimento obrigatório.";
const OPERADORAS = ["MEO", "NOS", "Vodafone", "NOWO", "DIGI", "Outra", "Não tenho serviço"];

function formatPhone(raw) {
  const digits = raw.replace(/\D/g, "").slice(0, 9);
  return digits.replace(/(\d{3})(?=\d)/g, "$1 ").trim();
}

function formatCp(raw) {
  const digits = raw.replace(/\D/g, "").slice(0, 7);
  return digits.length > 4 ? `${digits.slice(0, 4)}-${digits.slice(4)}` : digits;
}

function validatePhone(raw) {
  const digits = raw.replace(/\D/g, "");
  if (!digits) return REQUIRED_MSG;
  if (digits.length !== 9) return "O número deve ter 9 dígitos.";
  if (digits[0] !== "9") return "O número deve começar por 9.";
  if (digits === "900000000") return "Introduza um número válido.";
  return "";
}

function validateCp(raw) {
  if (!raw.trim()) return REQUIRED_MSG;
  if (!/^\d{4}-\d{3}$/.test(raw)) return "Formato esperado: 0000-000";
  return "";
}

function validateEmail(raw) {
  if (!raw.trim()) return REQUIRED_MSG;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(raw)) return "Introduza um email válido.";
  return "";
}

function validateNome(raw) {
  if (!raw.trim()) return REQUIRED_MSG;
  if (raw.trim().length < 3) return "Introduza o seu nome completo.";
  return "";
}

const initialValues = {
  nome: "",
  email: "",
  tel: "",
  whatsapp: "",
  operadora: "",
  cp: "",
};

export default function LeadForm({ onSuccess }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function setField(name, value) {
    setValues((v) => ({ ...v, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {
      nome: validateNome(values.nome),
      email: validateEmail(values.email),
      tel: validatePhone(values.tel),
      cp: validateCp(values.cp),
      operadora: values.operadora ? "" : REQUIRED_MSG,
      whatsapp: values.whatsapp ? "" : REQUIRED_MSG,
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
      telefone: "+351" + values.tel.replace(/\D/g, ""),
      whatsapp: values.whatsapp === "sim",
      operadora: values.operadora,
      codigoPostal: values.cp,
    };

    // TODO: substituir por chamada real à API (ex: fetch('/api/leads', {method:'POST', body: JSON.stringify(payload)}))
    console.log("Lead submetido:", payload);

    setSubmitted(true);
    if (onSuccess) onSuccess(payload);
  }

  if (submitted) {
    return (
      <div className="form-success" style={{ display: "block" }}>
        <div className="ok-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 12.5L9.5 18L20 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3>Pedido recebido!</h3>
        <p>Obrigado. A nossa equipa entra em contacto consigo dentro de 24 horas úteis.</p>
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

      <div className="field" data-field="whatsapp">
        <label>Este número tem WhatsApp?</label>
        <div className="toggle-row">
          <button
            type="button"
            className={`toggle-btn ${values.whatsapp === "sim" ? "selected yes" : ""}`}
            onClick={() => setField("whatsapp", "sim")}
          >
            Sim
          </button>
          <button
            type="button"
            className={`toggle-btn ${values.whatsapp === "nao" ? "selected" : ""}`}
            onClick={() => setField("whatsapp", "nao")}
          >
            Não
          </button>
        </div>
        <span className="field-error">{errors.whatsapp}</span>
      </div>

      <div className="field-row">
        <div className="field" data-field="operadora">
          <label>Operadora atual</label>
          <select
            className={errors.operadora ? "invalid" : ""}
            value={values.operadora}
            onChange={(e) => setField("operadora", e.target.value)}
          >
            <option value="" disabled>
              Selecionar…
            </option>
            {OPERADORAS.map((op) => (
              <option key={op} value={op}>
                {op}
              </option>
            ))}
          </select>
          <span className="field-error">{errors.operadora}</span>
        </div>
        <div className="field" data-field="cp">
          <label>Código Postal</label>
          <input
            type="text"
            inputMode="numeric"
            placeholder="0000-000"
            maxLength={8}
            className={errors.cp ? "invalid" : ""}
            value={values.cp}
            onChange={(e) => setField("cp", formatCp(e.target.value))}
          />
          <span className="field-error">{errors.cp}</span>
        </div>
      </div>

      <button className="btn btn-primary btn-block" type="submit">
        Pedir a minha análise →
      </button>
      <p className="form-note">Não partilhamos os seus dados com terceiros. RGPD.</p>
    </form>
  );
}
