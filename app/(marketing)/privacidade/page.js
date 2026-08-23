export const metadata = {
  title: "Política de Privacidade — Connecta Advisory",
};

export default function PrivacidadePage() {
  return (
    <>
      <section className="page-hero" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="dot"></span> Legal
          </div>
          <h1 className="display" style={{ fontSize: "clamp(30px,3.6vw,42px)" }}>
            Política de Privacidade
          </h1>
        </div>
      </section>

      <section>
        <div className="wrap legal-doc">
          <p className="legal-updated">Última atualização: 23 de agosto de 2026</p>
          <div className="legal-note">
            Este documento é um modelo de referência gerado nesta fase de construção do site e
            deve ser revisto por um profissional jurídico antes da publicação em produção, de
            forma a garantir total conformidade com o RGPD e a legislação portuguesa aplicável.
          </div>

          <h2>1. Quem somos</h2>
          <p>
            A Connecta Advisory (&quot;nós&quot;, &quot;a Connecta&quot;) é uma consultoria em
            telecomunicações que ajuda pessoas em Portugal a comparar ofertas do mercado e a
            escolher a solução mais adequada às suas necessidades. Esta política explica que
            dados pessoais recolhemos, para que fins, e quais os seus direitos.
          </p>

          <h2>2. Que dados recolhemos</h2>
          <p>Quando preenche um dos nossos formulários, podemos recolher:</p>
          <ul>
            <li>Nome completo</li>
            <li>Endereço de email</li>
            <li>Número de telemóvel (incluindo se corresponde a um número com WhatsApp)</li>
            <li>Código postal e operadora atual</li>
            <li>Conteúdo de mensagens que nos envie através dos nossos formulários</li>
          </ul>

          <h2>3. Para que usamos os seus dados</h2>
          <p>Usamos os seus dados exclusivamente para:</p>
          <ul>
            <li>Analisar e preparar uma proposta personalizada de telecomunicações</li>
            <li>Entrar em contacto consigo, incluindo por telefone, email ou WhatsApp, sobre o pedido que efetuou</li>
            <li>Dar seguimento ao processo de mudança de operadora, caso decida avançar</li>
          </ul>

          <h2>4. Partilha de dados</h2>
          <p>
            Não vendemos nem partilhamos os seus dados pessoais com terceiros para fins de
            marketing. Os seus dados só são partilhados com a operadora escolhida caso decida
            avançar com uma mudança de serviço, e apenas na medida necessária para concretizar
            esse processo.
          </p>

          <h2>5. Quanto tempo guardamos os seus dados</h2>
          <p>
            Conservamos os seus dados enquanto for necessário para os fins descritos nesta
            política, ou enquanto exista uma relação comercial ativa. Pode solicitar a eliminação
            dos seus dados a qualquer momento, conforme descrito na secção seguinte.
          </p>

          <h2>6. Os seus direitos</h2>
          <p>
            Ao abrigo do RGPD, tem o direito de aceder, corrigir, eliminar ou solicitar a
            portabilidade dos seus dados pessoais, bem como de se opor ou limitar o seu
            tratamento. Para exercer qualquer um destes direitos, contacte-nos através de{" "}
            <a href="mailto:geral@connectaadvisory.pt">geral@connectaadvisory.pt</a>.
          </p>

          <h2>7. Cookies</h2>
          <p>
            Este site utiliza cookies para melhorar a experiência de navegação e analisar o
            desempenho do site. Pode gerir as suas preferências de cookies a qualquer momento
            através do banner apresentado na primeira visita.
          </p>

          <h2>8. Contacto</h2>
          <p>
            Para qualquer questão relacionada com esta política, contacte-nos através de{" "}
            <a href="mailto:geral@connectaadvisory.pt">geral@connectaadvisory.pt</a>.
          </p>
        </div>
      </section>
    </>
  );
}
