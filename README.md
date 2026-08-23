# Connecta Advisory — Site

Site institucional da Connecta Advisory, construído em Next.js 14 (App Router), **exportado como site estático** e hospedado na **Cloudflare Pages** (plano gratuito, uso comercial permitido).

## Estrutura do projeto

```
app/
  layout.js              -> Layout raiz (fontes, CSS global)
  globals.css             -> Todo o design system (cores, tipografia, componentes)
  (marketing)/             -> Grupo de rotas com Header/Footer/Modal/Cookies
    layout.js
    page.js               -> Homepage
    servicos/page.js
    contacto/page.js
    sobre-nos/page.js
    privacidade/page.js
    termos/page.js
  login/page.js            -> Fora do grupo "marketing" (sem header/footer públicos)

components/
  Header.js
  Footer.js
  LeadForm.js               -> Formulário completo (nome, email, tel, whatsapp, operadora, CP)
  ContactForm.js             -> Formulário da página de contacto (com assunto/mensagem/consentimento)
  LoginForm.js
  ModalProvider.js           -> Contexto React que controla o modal de formulário
  LeadModal.js
  ModalCtaButton.js           -> Botão reutilizável que abre o modal, em qualquer página
  CookieBanner.js

public/images/               -> Logótipo e imagens dos serviços
```

## Como correr localmente

Precisas de ter o [Node.js](https://nodejs.org) instalado (versão 18 ou superior).

```bash
npm install
npm run dev
```

Depois abre [http://localhost:3000](http://localhost:3000) no browser.

## Como publicar (deploy) — passo a passo

Este projeto está configurado para **exportação estática** (`output: "export"` no `next.config.mjs`), o que significa que o `npm run build` gera uma pasta `out/` com ficheiros HTML/CSS/JS puros — sem precisar de um servidor Node.js a correr. Isto permite usar a Cloudflare Pages, que tem um plano gratuito que permite uso comercial (ao contrário do plano gratuito da Vercel).

### 1. Colocar o código no GitHub
```bash
git init
git add .
git commit -m "Primeira versão do site"
```
Cria um repositório novo em [github.com/new](https://github.com/new) (pode ser privado) e segue as instruções para lhe associar este projeto (`git remote add origin ...` e `git push`).

### 2. Ligar à Cloudflare Pages
1. Cria conta em [dash.cloudflare.com](https://dash.cloudflare.com) (podes usar o mesmo email da empresa).
2. No menu lateral, vai a **Workers & Pages → Create → Pages → Connect to Git**.
3. Autoriza o acesso ao GitHub e escolhe o repositório `connecta-advisory`.
4. Nas definições de build, usa exatamente isto:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
5. Clica em **Save and Deploy**. Em 1-2 minutos tens um link público do tipo `connecta-advisory.pages.dev` já a funcionar.

### 3. Ligar o domínio connectaadvisory.pt
1. Dentro do projeto na Cloudflare, vai a **Custom domains** e escreve `connectaadvisory.pt`.
2. Se o domínio já estiver registado noutro sítio (ex: um registrador `.pt`), a Cloudflare vai pedir-te para migrar a gestão de DNS para lá (é gratuito) ou, alternativamente, apenas adicionar um registo `CNAME` no teu registrador atual a apontar para o link `.pages.dev` — a Cloudflare mostra-te a opção mais simples consoante o teu caso.
3. A propagação pode demorar entre alguns minutos e 24h. Quando estiver pronto, o site fica acessível diretamente em `https://connectaadvisory.pt`, com HTTPS automático e gratuito.

### 4. Deploys seguintes
A partir daqui, sempre que fizeres `git push` para o GitHub (ex: via GitHub Desktop), a Cloudflare Pages publica automaticamente a nova versão — não precisas de repetir os passos 2 e 3.

### Nota sobre custo
O plano gratuito da Cloudflare Pages permite uso comercial e inclui largura de banda ilimitada — para este site, é muito provável que nunca precises de pagar nada. Se mais tarde precisares de mais builds por mês ou funcionalidades de equipa, o plano pago (Workers Paid) custa $5/mês — uma fração do que custaria a Vercel.


## O que falta ligar antes de ir para produção a sério

- **Base de dados dos leads**: os formulários (`LeadForm.js`, `ContactForm.js`) neste momento só fazem `console.log` do que é submetido. Como o site é exportado como estático (sem servidor Next.js), a gravação dos leads vai ser feita com uma chamada direta do browser para a Supabase, usando o SDK deles (`@supabase/supabase-js`) — é este o modelo de utilização standard da Supabase e funciona perfeitamente com sites estáticos, com segurança garantida pelas regras de Row Level Security configuradas do lado da Supabase.
- **Autenticação de colaboradores**: a página `/login` está pronta visualmente, mas ainda não valida contra nada real — falta ligar ao Supabase Auth (também feito diretamente do browser, pela mesma razão acima).
- **Integração com WhatsApp Business**: fica para quando o sistema interno de leads estiver operacional (fase seguinte).
- **Analytics / Meta Pixel**: adicionar antes de começar a correr campanhas pagas no Facebook, para não perder dados de conversão.
