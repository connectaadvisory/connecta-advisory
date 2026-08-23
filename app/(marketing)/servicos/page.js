import ModalCtaButton from "@/components/ModalCtaButton";

export const metadata = {
  title: "Serviços — Connecta Advisory",
};

export default function ServicosPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">
            <span className="dot"></span> Serviços
          </div>
          <h1 className="display">Telecomunicações, sem complicações.</h1>
          <p className="lead">
            Uma proposta pensada para a sua casa — completa para quem quer simplicidade,
            ajustável para quem tem uma família para pensar.
          </p>
        </div>
      </section>

      <div className="strip">
        <div className="wrap strip-inner">
          <span className="strip-label">Comparamos ofertas de</span>
          <div className="strip-logos">
            <span>MEO</span>
            <span>NOS</span>
            <span>Vodafone</span>
            <span>NOWO</span>
            <span>DIGI</span>
          </div>
        </div>
      </div>

      <section id="pacote-completo">
        <div className="wrap">
          <div className="feature-block">
            <div>
              <span className="feature-tag">Serviço principal</span>
              <h2 className="display">Pacote completo: Internet, TV e Voz.</h2>
              <p className="desc">
                Para a maioria das casas, esta é a solução mais equilibrada — fibra ótica de
                alta velocidade, os canais que já vê e chamadas fixas incluídas, tudo numa única
                fatura e com o melhor custo-benefício disponível para a sua morada.
              </p>
              <ul className="service-list">
                <ListItem>Verificação da cobertura real da sua morada</ListItem>
                <ListItem>Internet de fibra, TV por cabo e chamadas fixas</ListItem>
                <ListItem>Acompanhamento até à instalação em sua casa</ListItem>
              </ul>
              <div className="hero-actions" style={{ marginTop: 26 }}>
                <ModalCta variant="primary">Pedir a minha análise</ModalCta>
              </div>
            </div>
            <div className="feature-visual">
              <img src="/images/servico-pacote-completo.jpg" alt="Sala de estar moderna com router de fibra e televisão" />
            </div>
          </div>
        </div>
      </section>

      <section id="familia">
        <div className="wrap">
          <div className="feature-block reverse">
            <div>
              <span className="feature-tag">Personalização</span>
              <h2 className="display">Ajustado ao número de pessoas em sua casa.</h2>
              <p className="desc">
                Nem toda a casa é igual — se precisa de linhas móveis para si e para quem vive
                consigo, incluímos isso na mesma proposta, sem complicar a fatura nem multiplicar
                os contactos. Fala sempre com o mesmo consultor, do início ao fim.
              </p>
              <ul className="service-list">
                <ListItem>Cartões de dados móveis adicionais</ListItem>
                <ListItem>Uma só fatura para toda a casa</ListItem>
                <ListItem>Sem burocracia extra por cada linha</ListItem>
              </ul>
              <div className="example-row">
                <div className="example-card">
                  <div className="ex-people">Pessoa sozinha</div>
                  <div className="ex-lines">1 linha móvel</div>
                </div>
                <div className="example-card">
                  <div className="ex-people">Casal</div>
                  <div className="ex-lines">2 linhas móveis</div>
                </div>
                <div className="example-card">
                  <div className="ex-people">Casal + 1 filho</div>
                  <div className="ex-lines">3 linhas móveis</div>
                </div>
              </div>
              <div className="hero-actions" style={{ marginTop: 26 }}>
                <ModalCta variant="primary">Pedir a minha análise</ModalCta>
              </div>
            </div>
            <div className="feature-visual">
              <img src="/images/servico-familia.jpg" alt="Vários telemóveis em cima de uma mesa, representando linhas móveis para a família" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head" style={{ margin: "0 auto 44px", textAlign: "center" }}>
            <span className="section-tag">Dúvidas sobre os serviços</span>
            <h2 className="display">Perguntas frequentes</h2>
          </div>
          <div className="faq">
            <details className="faq-item" open>
              <summary>
                Posso ter apenas internet, sem TV nem voz? <span className="plus">+</span>
              </summary>
              <p>
                Sim. O pacote completo costuma ser a opção mais vantajosa, mas se preferir apenas
                internet, analisamos também essa alternativa e dizemos-lhe honestamente qual
                compensa mais no seu caso.
              </p>
            </details>
            <details className="faq-item">
              <summary>
                Quantas linhas móveis posso adicionar? <span className="plus">+</span>
              </summary>
              <p>
                O número ajusta-se a quem vive consigo — não há um limite fixo, avaliamos caso a
                caso consoante a operadora e a proposta mais vantajosa.
              </p>
            </details>
            <details className="faq-item">
              <summary>
                A instalação tem custos? <span className="plus">+</span>
              </summary>
              <p>
                Depende da operadora e da promoção em vigor no momento da sua análise — isso é
                algo que verificamos por si e explicamos com total transparência antes de avançar.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="cta-final">
            <h2 className="display">Vamos encontrar o pacote certo para si?</h2>
            <p>Análise gratuita em 24 horas. Sem compromisso.</p>
            <ModalCta />
          </div>
        </div>
      </section>
    </>
  );
}

function ListItem({ children }) {
  return (
    <li>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 8.5L6.5 12L13 4.5" stroke="#1F7A57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {children}
    </li>
  );
}

// Botão que abre o modal de formulário (client component, ver components/ModalCtaButton.js)
function ModalCta({ variant = "white", children = "Pedir a minha análise gratuita" }) {
  const cls = variant === "white" ? "btn btn-white btn-lg" : "btn btn-primary";
  return <ModalCtaButton className={cls}>{children}</ModalCtaButton>;
}
