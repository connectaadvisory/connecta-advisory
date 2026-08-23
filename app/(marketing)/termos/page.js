export const metadata = {
  title: "Termos e Condições — Connecta Advisory",
};

export default function TermosPage() {
  return (
    <>
      <section className="page-hero" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="dot"></span> Legal
          </div>
          <h1 className="display" style={{ fontSize: "clamp(30px,3.6vw,42px)" }}>
            Termos e Condições
          </h1>
        </div>
      </section>

      <section>
        <div className="wrap legal-doc">
          <p className="legal-updated">Última atualização: 23 de agosto de 2026</p>
          <div className="legal-note">
            Este documento é um modelo de referência gerado nesta fase de construção do site e
            deve ser revisto por um profissional jurídico antes da publicação em produção.
          </div>

          <h2>1. Âmbito</h2>
          <p>
            Estes Termos e Condições regulam o acesso e a utilização do website da Connecta
            Advisory e dos serviços de consultoria em telecomunicações prestados pela empresa.
            Ao utilizar este site ou submeter um dos nossos formulários, aceita os termos aqui
            descritos.
          </p>

          <h2>2. O que fazemos</h2>
          <p>
            A Connecta Advisory presta um serviço de consultoria gratuito, que consiste em
            comparar as ofertas de telecomunicações disponíveis no mercado português e
            recomendar a solução mais adequada às necessidades de cada pessoa. Não somos uma
            operadora de telecomunicações.
          </p>

          <h2>3. Gratuitidade do serviço</h2>
          <p>
            A análise e o acompanhamento prestados pela Connecta Advisory são gratuitos para o
            utilizador. A Connecta Advisory pode receber uma comissão da operadora escolhida
            caso o utilizador decida avançar com uma mudança de serviço, sem qualquer custo
            adicional para o utilizador.
          </p>

          <h2>4. Sem obrigação de contratação</h2>
          <p>
            A recomendação apresentada não implica qualquer obrigação de contratação por parte
            do utilizador. A decisão final de mudar, ou não, de operadora é sempre do
            utilizador.
          </p>

          <h2>5. Responsabilidade</h2>
          <p>
            As informações apresentadas neste site, incluindo preços, promoções e condições de
            operadoras terceiras, têm caráter meramente informativo e podem estar sujeitas a
            alteração pelas respetivas operadoras. A Connecta Advisory não se responsabiliza por
            alterações feitas por terceiros a ofertas previamente comunicadas.
          </p>

          <h2>6. Propriedade intelectual</h2>
          <p>
            Todo o conteúdo deste website, incluindo textos, logótipo e design, é propriedade da
            Connecta Advisory, salvo indicação em contrário, e não pode ser reproduzido sem
            autorização prévia.
          </p>

          <h2>7. Alterações a estes termos</h2>
          <p>
            A Connecta Advisory pode atualizar estes Termos e Condições periodicamente. A data
            da última atualização está indicada no topo desta página.
          </p>

          <h2>8. Contacto</h2>
          <p>
            Para qualquer questão relacionada com estes termos, contacte-nos através de{" "}
            <a href="mailto:geral@connectaadvisory.pt">geral@connectaadvisory.pt</a>.
          </p>
        </div>
      </section>
    </>
  );
}
