import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contacto — Connecta Advisory",
};

export default function ContactoPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">
            <span className="dot"></span> Contacto
          </div>
          <h1 className="display">Fale connosco.</h1>
          <p className="lead">
            Prefere escrever-nos diretamente? Preencha o formulário ou use um dos contactos
            abaixo — respondemos em menos de 24 horas úteis.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap contact-grid">
          <div>
            <div className="contact-info-card">
              <div className="contact-row">
                <div className="ci">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M4 6L12 13L20 6" stroke="#C41230" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="3" y="4" width="18" height="16" rx="2.5" stroke="#C41230" strokeWidth="1.7" />
                  </svg>
                </div>
                <div className="ct">
                  <h4>Email</h4>
                  <p>geral@connectaadvisory.pt</p>
                </div>
              </div>
              <div className="contact-row">
                <div className="ci">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="#C41230" strokeWidth="1.7" />
                    <path d="M12 7V12L15.5 14" stroke="#C41230" strokeWidth="1.7" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="ct">
                  <h4>Horário</h4>
                  <p>Seg-Sáb: 10:30 - 21:00</p>
                </div>
              </div>
              <div className="contact-row">
                <div className="ci">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M14 21V13H17L17.5 10H14V8.2C14 7.2 14.3 6.5 15.7 6.5H17.6V3.8C17.3 3.75 16.2 3.65 15 3.65C12.4 3.65 10.7 5.25 10.7 8V10H8V13H10.7V21H14Z"
                      stroke="#C41230"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="ct">
                  <h4>Redes sociais</h4>
                  <p>facebook.com/connectaadvisory</p>
                </div>
              </div>
            </div>
            <div className="badge-tip" style={{ width: "100%", boxSizing: "border-box", justifyContent: "center" }}>
              100% gratuito · Sem compromisso
            </div>
          </div>

          <div className="form-panel">
            <h3>Enviar mensagem</h3>
            <p className="sub">Preencha os seus dados — entramos em contacto em 24h.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
