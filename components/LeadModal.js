"use client";

import { useEffect } from "react";
import { useLeadModal } from "./ModalProvider";
import LeadForm from "./LeadForm";

export default function LeadModal() {
  const { isOpen, closeModal } = useLeadModal();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") closeModal();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [closeModal]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay show"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div className="modal-box form-panel">
        <button className="modal-close" type="button" aria-label="Fechar" onClick={closeModal}>
          ✕
        </button>
        <h3>Pedir análise gratuita</h3>
        <p className="sub">Preencha os seus dados — entramos em contacto em 24h.</p>
        <LeadForm />
      </div>
    </div>
  );
}
