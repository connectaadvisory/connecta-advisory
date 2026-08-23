import ModalCtaButton from "@/components/ModalCtaButton";

export const metadata = {
  title: "Sobre Nós — Connecta Advisory",
};

export default function SobreNosPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">
            <span className="dot"></span> Sobre nós
          </div>
          <h1 className="display">Do lado de quem paga a fatura.</h1>
          <p className="lead">
            A Connecta Advisory nasceu de uma ideia simples: em telecomunicações, quem decide
            deveria ter alguém do seu lado — não do lado de quem vende.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap story">
          <p>
            A maioria das pessoas descobre que está a pagar a mais só quando compara por acaso
            com um vizinho ou um familiar. Entre pacotes, promoções temporárias e letras
            pequenas, perceber qual é realmente a melhor oferta acaba por ser mais complicado do
            que devia.
          </p>
          <p>
            Foi a pensar nisso que criámos a Connecta Advisory: uma consultoria dedicada a
            analisar o mercado das telecomunicações em Portugal e a traduzir essa informação
            numa recomendação simples e honesta, adaptada a cada casa.
          </p>
          <p>
            Não somos uma operadora, nem representamos uma em particular. O nosso trabalho só
            faz sentido se a recomendação que damos for a que melhor serve quem nos procura —
            mesmo quando isso significa dizer para não mudar de nada.
          </p>
          <p>
            Trabalhamos com um princípio simples: a mesma pessoa que faz a sua análise inicial
            acompanha o processo até à instalação, e continua disponível depois disso. Sem call
            centers, sem repetir a sua história a cada chamada.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head" style={{ margin: "0 auto 44px", textAlign: "center" }}>
            <span className="section-tag">Os nossos princípios</span>
            <h2 className="display">O que nos guia no dia a dia.</h2>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">
                <ShieldIcon />
              </div>
              <h3>Transparência antes de tudo</h3>
              <p>
                Explicamos sempre a lógica por trás de uma recomendação — coberturas, prazos de
                fidelização, letras pequenas — para que a decisão final seja informada, e não
                apenas confiada.
              </p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <ClockIcon />
              </div>
              <h3>O seu tempo é o bem mais escasso</h3>
              <p>
                Tratamos das chamadas, da papelada e das comparações técnicas por si, para que o
                único trabalho do seu lado seja decidir se quer avançar.
              </p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <PeopleIcon />
              </div>
              <h3>Uma relação, não uma transação</h3>
              <p>
                O nosso trabalho não termina na instalação. Continuamos por perto para o que
                precisar depois — é isso que entendemos por pós-venda a sério.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="cta-final">
            <h2 className="display">Vamos conhecer o seu caso?</h2>
            <p>Análise gratuita em 24 horas. Sem compromisso.</p>
            <ModalCtaButton className="btn btn-white btn-lg">
              Pedir a minha análise gratuita
            </ModalCtaButton>
          </div>
        </div>
      </section>
    </>
  );
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2L17 5.5V10C17 14 14 17.5 10 18.5C6 17.5 3 14 3 10V5.5L10 2Z" stroke="#C41230" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7.5" stroke="#C41230" strokeWidth="1.6" />
      <path d="M10 6V10L12.5 12" stroke="#C41230" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 17V15C3 12.7909 4.79086 11 7 11H9C11.2091 11 13 12.7909 13 15V17" stroke="#C41230" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="8" cy="6.5" r="3" stroke="#C41230" strokeWidth="1.6" />
      <path d="M14 11C16.2091 11 18 12.7909 18 15V17" stroke="#C41230" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M13 4.5C14.3 4.9 15.2 6.1 15.2 7.5C15.2 8.9 14.3 10.1 13 10.5" stroke="#C41230" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
