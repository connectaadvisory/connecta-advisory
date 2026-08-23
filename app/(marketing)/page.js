import LeadForm from "@/components/LeadForm";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">
              <span className="dot"></span> Consultoria gratuita · resposta em 24h
            </div>
            <h1 className="display">
              Pare de pagar a mais pelas suas <em>telecomunicações</em>.
            </h1>
            <p className="lead">
              Comparamos as melhores ofertas de internet, TV e voz do mercado para a sua morada —
              e tratamos de toda a mudança por si.
            </p>
            <div className="trust-row">
              <TrustItem>100% gratuito</TrustItem>
              <TrustItem>Sem compromisso</TrustItem>
              <TrustItem>Acompanhamento humano</TrustItem>
            </div>
            <div className="hero-actions">
              <a className="btn btn-outline btn-lg" href="#como-funciona">
                Ver como funciona
              </a>
            </div>
          </div>

          <div id="form" className="form-panel">
            <h3>Pedir análise gratuita</h3>
            <p className="sub">Preencha os seus dados — entramos em contacto em 24h.</p>
            <LeadForm />
          </div>
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

      <section id="servicos">
        <div className="wrap">
          <div className="section-head">
            <span className="section-tag">Serviços</span>
            <h2 className="display">Uma proposta pensada para a sua casa.</h2>
            <p>
              Trabalhamos sempre para lhe entregar o pacote com melhor custo-benefício — e
              ajustamos à realidade de cada família.
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <WifiIcon />
              </div>
              <h3>Pacote completo</h3>
              <p>
                Internet, televisão e voz num único pacote — a solução mais equilibrada em
                qualidade e preço para a maioria das casas.
              </p>
              <ul className="service-list">
                <ListItem>Fibra ótica de alta velocidade</ListItem>
                <ListItem>Televisão com os canais que já vê</ListItem>
                <ListItem>Chamadas fixas incluídas</ListItem>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <PhoneIcon />
              </div>
              <h3>À medida da sua família</h3>
              <p>
                Precisa de linhas móveis para toda a casa? Adaptamos a proposta ao número de
                pessoas — tudo numa só fatura.
              </p>
              <ul className="service-list">
                <ListItem>Cartões móveis adicionais para a família</ListItem>
                <ListItem>Um único ponto de contacto</ListItem>
                <ListItem>Flexibilidade conforme quem vive em casa</ListItem>
              </ul>
              <div className="badge-tip">Ex.: casal + 1 filho → 3 cartões móveis no mesmo pacote</div>
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona">
        <div className="wrap">
          <div className="how">
            <div className="section-head">
              <span className="section-tag" style={{ color: "#FF6B7F" }}>
                Como funciona
              </span>
              <h2 className="display">Três passos. Zero esforço.</h2>
              <p>Da primeira mensagem à instalação em sua casa, a mesma equipa acompanha cada momento.</p>
            </div>
            <div className="steps">
              <Step num="01" title="Diga-nos onde mora">
                Preencha o formulário com a sua morada e a operadora atual. Leva menos de um minuto.
              </Step>
              <Step num="02" title="Comparamos por si">
                Verificamos a cobertura real da sua zona e cruzamos as melhores ofertas disponíveis
                para o seu caso.
              </Step>
              <Step num="03" title="Tratamos da mudança">
                Cuidamos da burocracia e do agendamento até à instalação — e mantemo-nos por
                perto depois, no pós-venda.
              </Step>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="section-tag">Porque a Connecta</span>
            <h2 className="display">Não somos operadora. Somos a sua consultoria.</h2>
            <p>Trabalhamos do seu lado, não do lado de quem vende.</p>
          </div>
          <div className="why-grid">
            <WhyCard icon={<ShieldIcon />} title="Independência total">
              Não representamos nenhuma operadora. Olhamos para o mercado todo e dizemos-lhe a
              verdade, ainda que a melhor decisão seja não mexer em nada.
            </WhyCard>
            <WhyCard icon={<ClockIcon />} title="Resposta em 24h">
              Sem esperar em fila de call center. Recebe a sua proposta personalizada em menos de
              um dia útil.
            </WhyCard>
            <WhyCard icon={<PeopleIcon />} title="Acompanhamento humano">
              Do primeiro contacto à instalação, fala sempre com a mesma pessoa — sem call
              centers nem números a repetir a sua história.
            </WhyCard>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head" style={{ margin: "0 auto 44px", textAlign: "center" }}>
            <span className="section-tag">Dúvidas</span>
            <h2 className="display">Perguntas frequentes</h2>
          </div>
          <div className="faq">
            <Faq question="Quanto custa a vossa consultoria?" defaultOpen>
              Nada. A análise e o acompanhamento são 100% gratuitos para si. Quando decide mudar,
              recebemos uma comissão da operadora escolhida — se preferir ficar onde está,
              continua sem pagar nada.
            </Faq>
            <Faq question="Sou obrigado a mudar de operadora?">
              Não. A nossa recomendação assenta na comparação que fazemos, mas quem decide é
              sempre você — inclusive optar por manter o que já tem.
            </Faq>
            <Faq question="Quanto tempo demora a receber a proposta?">
              Respondemos em menos de 24 horas úteis, com a verificação de cobertura da sua
              morada e as ofertas mais vantajosas para o seu caso.
            </Faq>
            <Faq question="Tratam de todo o processo de mudança?">
              Sim. Tratamos da burocracia e do agendamento, e mantemo-nos disponíveis mesmo
              depois de mudar de operadora.
            </Faq>
          </div>
        </div>
      </section>

      <section id="contacto">
        <div className="wrap">
          <div className="cta-final">
            <h2 className="display">Pronto para deixar de pagar a mais?</h2>
            <p>Análise gratuita em 24 horas. Sem compromisso.</p>
            <a className="btn btn-white btn-lg" href="#form">
              Pedir a minha análise gratuita ↑
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function TrustItem({ children }) {
  return (
    <div className="trust-item">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 8.5L6.5 12L13 4.5" stroke="#1F7A57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {children}
    </div>
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

function Step({ num, title, children }) {
  return (
    <div className="step">
      <div className="step-line"></div>
      <div className="step-num">{num}</div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

function WhyCard({ icon, title, children }) {
  return (
    <div className="why-card">
      <div className="why-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

function Faq({ question, children, defaultOpen }) {
  return (
    <details className="faq-item" open={defaultOpen}>
      <summary>
        {question} <span className="plus">+</span>
      </summary>
      <p>{children}</p>
    </details>
  );
}

function WifiIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 18C4 12.4772 8.47715 8 14 8" stroke="#C41230" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 18C4 15.7909 5.79086 14 8 14" stroke="#C41230" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="4" cy="19" r="1.5" fill="#C41230" />
      <path d="M4 18C4 9.16344 11.1634 2 20 2" stroke="#C41230" strokeWidth="1.8" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="7" y="2" width="10" height="20" rx="2" stroke="#C41230" strokeWidth="1.8" />
      <path d="M11 18H13" stroke="#C41230" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
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
