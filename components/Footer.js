import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="logo" href="/">
              <img src="/images/connecta-logo-white.png" alt="Connecta Advisory" className="logo-img" />
            </Link>
            <p>
              Ajudamos famílias em Portugal a poupar nas telecomunicações, com uma análise
              gratuita e acompanhamento até ao fim do processo.
            </p>
            <div className="social-row">
              <a className="social-link" href="#" aria-label="Facebook">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M14 21V13H17L17.5 10H14V8.2C14 7.2 14.3 6.5 15.7 6.5H17.6V3.8C17.3 3.75 16.2 3.65 15 3.65C12.4 3.65 10.7 5.25 10.7 8V10H8V13H10.7V21H14Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Serviços</h4>
            <Link href="/servicos#pacote-completo">Pacote completo</Link>
            <Link href="/servicos#familia">À medida da família</Link>
          </div>

          <div className="footer-col">
            <h4>Empresa</h4>
            <Link href="/sobre-nos">Sobre Nós</Link>
            <Link href="/contacto">Contacto</Link>
          </div>

          <div className="footer-col">
            <h4>Contacto</h4>
            <a href="mailto:geral@connectaadvisory.pt">geral@connectaadvisory.pt</a>
            <span>Seg-Sáb: 10:30 - 21:00</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Connecta Advisory · Consultoria em Telecomunicações</span>
          <div className="legal-links">
            <Link href="/privacidade">Política de Privacidade</Link>
            <Link href="/termos">Termos e Condições</Link>
            <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener noreferrer">
              Livro de Reclamações
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
