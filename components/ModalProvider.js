"use client";

import { createContext, useContext, useState, useCallback } from "react";

const ModalContext = createContext(null);

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useLeadModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error("useLeadModal deve ser usado dentro de <ModalProvider>");
  }
  return ctx;
}
