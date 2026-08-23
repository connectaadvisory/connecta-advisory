# Connecta Advisory — Site

Site institucional da Connecta Advisory, construído em Next.js 14 (App Router).

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

### 1. Colocar o código no GitHub
```bash
git init
git add .
git commit -m "Primeira versão do site"
```
Cria um repositório novo em [github.com/new](https://github.com/new) (pode ser privado) e segue as instruções para lhe associar este projeto (`git remote add origin ...` e `git push`).

### 2. Ligar à Vercel
1. Cria conta em [vercel.com](https://vercel.com) (podes entrar com a conta do GitHub).
2. Clica em "Add New Project" e escolhe o repositório que acabaste de criar.
3. A Vercel deteta automaticamente que é um projeto Next.js — não precisas de configurar nada, clica em "Deploy".
4. Em poucos minutos tens um link público do tipo `connecta-advisory.vercel.app` já a funcionar.

### 3. Ligar o domínio connectaadvisory.pt
1. Dentro do projeto na Vercel, vai a **Settings → Domains** e escreve `connectaadvisory.pt`.
2. A Vercel mostra-te os registos DNS que precisas de configurar (normalmente um registo `A` a apontar para um IP, e um `CNAME` para o `www`).
3. Vai ao painel onde compraste o domínio (ex: o teu registrador `.pt`) e adiciona esses registos na secção de gestão de DNS.
4. A propagação pode demorar entre alguns minutos e 24h. Quando estiver pronto, o site fica acessível diretamente em `https://connectaadvisory.pt`, com HTTPS automático.

### 4. Deploys seguintes
A partir daqui, sempre que fizeres `git push` para o GitHub, a Vercel publica automaticamente a nova versão — não precisas de repetir os passos 2 e 3.

## O que falta ligar antes de ir para produção a sério

- **Base de dados dos leads**: os formulários (`LeadForm.js`, `ContactForm.js`) neste momento só fazem `console.log` do que é submetido. É preciso criar o projeto no [Supabase](https://supabase.com) e substituir esse `console.log` por uma chamada `fetch` a uma rota de API (`app/api/leads/route.js`) que grava na base de dados — isto liga-se diretamente ao sistema interno de gestão de leads que planeámos.
- **Autenticação de colaboradores**: a página `/login` está pronta visualmente, mas ainda não valida contra nada real — falta ligar ao Supabase Auth.
- **Integração com WhatsApp Business**: fica para quando o sistema interno de leads estiver operacional (fase seguinte).
- **Analytics / Meta Pixel**: adicionar antes de começar a correr campanhas pagas no Facebook, para não perder dados de conversão.
