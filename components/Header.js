"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLeadModal } from "./ModalProvider";

export default function Header() {
  const pathname = usePathname();
  const { openModal } = useLeadModal();

  const isActive = (href) => pathname === href;

  return (
    <header>
      <div className="nav">
        <Link className="logo" href="/">
          <img src="/images/connecta-logo.png" alt="Connecta Advisory" className="logo-img" />
        </Link>

        <nav className="nav-links">
          <Link href="/" className={isActive("/") ? "active" : ""}>
            Início
          </Link>
          <Link href="/servicos" className={isActive("/servicos") ? "active" : ""}>
            Serviços
          </Link>
          <Link href="/contacto" className={isActive("/contacto") ? "active" : ""}>
            Contacto
          </Link>
        </nav>

        <div className="nav-right">
          <button className="btn btn-primary" type="button" onClick={openModal}>
            Pedir análise gratuita
          </button>
          <Link
            className="staff-link"
            href="/login"
            title="Acesso de colaboradores"
            aria-label="Acesso de colaboradores"
          >
            <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
              <rect x="5" y="9" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
              <path
                d="M7 9V6.5C7 4.567 8.567 3 10.5 3C12.24 3 13.68 4.28 13.94 5.95"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
