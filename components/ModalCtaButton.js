"use client";

import { useLeadModal } from "./ModalProvider";

export default function ModalCtaButton({ className, children }) {
  const { openModal } = useLeadModal();
  return (
    <button type="button" className={className} onClick={openModal}>
      {children}
    </button>
  );
}
