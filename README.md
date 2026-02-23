# Meu Portfólio — Rodrigo de Barros

Este é o meu portfólio pessoal, desenvolvido do zero para apresentar minha trajetória como Engenheiro de Software, meus projetos, habilidades e formas de contato. Todo o projeto foi construído com foco em performance, acessibilidade, internacionalização e uma experiência visual cuidadosa tanto no tema claro quanto no escuro.

## Visão Geral

O site é uma Single Page Application (SPA) composta por seções: Hero, Sobre, Habilidades, Experiência, Projetos e Contato. Decidi manter tudo em uma única página para proporcionar uma navegação fluida e sem interrupções, com âncoras suaves entre as seções.

A aplicação suporta três idiomas (Português, Inglês e Espanhol), alternância entre tema claro e escuro, e é totalmente responsiva para dispositivos móveis.

---

## Stack Tecnológica

### Frontend

| Tecnologia | Versão | Motivo da escolha |
|---|---|---|
| React | 19.2.0 | Biblioteca consolidada que domino bem; a versão 19 traz melhorias de performance com o compilador React Compiler |
| TypeScript | 5.6.3 | Tipagem estática garante maior confiabilidade e facilita a manutenção do código |
| Vite | 7.1.9 | Build tool extremamente rápida com HMR nativo, ideal para projetos frontend modernos |
| Tailwind CSS | 4.1.14 | Nova versão com `@theme inline` e CSS Variables nativas, sem necessidade de `tailwind.config.ts` |
| Framer Motion | 12.23.24 | Animações declarativas e fluidas com uma API intuitiva no React |
| Wouter | 3.3.5 | Router minimalista (~2kb), suficiente para o escopo de uma SPA com poucas rotas |
| React Query | 5.60.5 | Gerenciamento de estado assíncrono e cache, mesmo que o projeto seja majoritariamente estático |
| React Hook Form + Zod | 7.66.0 + 3.25.76 | Combinação poderosa para validação de formulários com tipagem completa via Zod |
| i18next + react-i18next | 25.8.4 + 16.5.4 | Solução madura para internacionalização; suporte a PT, EN e ES |
| next-themes | 0.4.6 | Gerenciamento de tema sistema/claro/escuro com persistência via localStorage |
| shadcn/ui + Radix UI | — | Componentes acessíveis, headless e totalmente customizáveis com Tailwind |
| Embla Carousel | 8.6.0 | Carrossel leve e performático para as seções de Projetos, Educação e Certificações |
| Lucide React + React Icons | 0.545.0 + 5.5.0 | Ícones SVG otimizados e tree-shakeable |
| Sonner | 2.0.7 | Notificações toast modernas e elegantes |

---

## Arquitetura e Decisões Técnicas

### Estrutura de Pastas

```
meu-portifolio/
├── client/
│   ├── src/
│   │   ├── components/        # Componentes de seção e UI
│   │   │   └── ui/            # Componentes base do shadcn/ui
│   │   ├── pages/             # Páginas roteáveis (Home, NotFound)
│   │   ├── lib/               # Configurações globais (i18n, queryClient, utils)
│   │   ├── hooks/             # Custom hooks (use-toast, use-mobile)
│   │   ├── data/              # Dados estáticos (resume.ts)
│   │   ├── App.tsx            # Raiz com providers e roteamento
│   │   ├── main.tsx           # Entry point do React
│   │   └── index.css          # Estilos globais e tokens de design
│   ├── public/
│   │   ├── assets/            # Imagem de perfil e currículos (PT, EN, ES)
│   │   └── thumb/             # Thumbnails dos projetos
│   └── index.html             # HTML base com meta tags Open Graph
├── vite.config.ts             # Configuração do Vite com aliases e plugins
├── tsconfig.json              # Configuração TypeScript com path aliases
├── postcss.config.js          # PostCSS com Tailwind e autoprefixer
├── components.json            # Configuração do shadcn/ui
└── vite-plugin-meta-images.ts # Plugin customizado para Open Graph
```

### Separação de Dados e Apresentação

Toda a informação do portfólio (experiências, habilidades, projetos, educação, certificações) está centralizada em `client/src/data/resume.ts`. Isso me permite atualizar o conteúdo em um único lugar sem tocar nos componentes. É uma decisão simples, mas que facilita muito a manutenção.

### Internacionalização (i18n)

Configurei o i18next com três namespaces de tradução embutidos diretamente no `lib/i18n.ts`, sem necessidade de arquivos JSON externos ou carregamento assíncrono. Como o portfólio é relativamente pequeno, isso simplifica o build e elimina flashes de conteúdo não traduzido. O idioma padrão é detectado automaticamente pelo navegador e persiste entre sessões.

Os três idiomas disponíveis — Português, Inglês e Espanhol — foram escolhidos para alcançar tanto o mercado nacional quanto oportunidades internacionais.

### Sistema de Temas

Utilizei o `next-themes` com `attribute="class"` para alternar entre temas via classe CSS. O tema segue a preferência do sistema operacional por padrão. Defini dois conjuntos completos de CSS Variables no `index.css`: o tema claro tem um fundo quase branco com texto escuro, enquanto o tema escuro usa preto puro (`#000`) para maior contraste e uma estética mais profissional.

### Tailwind CSS v4

Migrei para o Tailwind CSS v4, que traz mudanças significativas na configuração. Em vez do arquivo `tailwind.config.ts`, toda a customização de tokens (cores, raios, fontes) é feita via `@theme inline` diretamente no CSS, usando as CSS Custom Properties do browser nativamente. Isso resulta em um output CSS mais limpo e elimina a dependência de configuração em JavaScript.

### Tipografia

Escolhi duas fontes do Google Fonts:
- **Inter** para textos e parágrafos: legível, moderna e amplamente usada em interfaces profissionais
- **JetBrains Mono** para títulos e headings: traz uma personalidade de developer/tech sem perder a clareza

### Animações com Framer Motion

As animações foram pensadas para serem sutis e não distrativas. Usei `variants` com `staggerChildren` para animar listas de habilidades e experiências em cascata, dando uma sensação de profundidade sem sobrecarregar o usuário. O componente `CodeBackground` usa uma animação CSS pura (`scroll-code`) para o efeito de código rolando ao fundo da Hero section, evitando o overhead do JavaScript para algo puramente decorativo.

### Plugin Customizado: `vite-plugin-meta-images`

Criei um plugin Vite personalizado para atualizar dinamicamente as meta tags Open Graph (`og:image` e `twitter:image`) com a URL de deployment correta. Ele detecta variáveis de ambiente do ambiente de deploy e injeta a URL absoluta da imagem no HTML durante o build, garantindo que o preview do link funcione corretamente em redes sociais.

### Roteamento com Wouter

Optei pelo Wouter em vez do React Router porque o portfólio tem apenas duas rotas (`/` e `*` para 404). O Wouter tem ~2kb minificado contra os ~50kb do React Router, e sua API é quase idêntica para casos de uso simples. Não faz sentido adicionar peso desnecessário.

### Formulário de Contato

O formulário usa React Hook Form com resolução de schema Zod para validação tipada. A validação acontece no cliente com mensagens de erro localizadas por idioma. Como o projeto é estático (sem backend próprio), o envio pode ser integrado com serviços como EmailJS, Formspree ou similar.

### Componentes UI com shadcn/ui

Escolhi o shadcn/ui porque não é uma biblioteca de componentes instalada como dependência — são componentes copiados diretamente para o código, totalmente sob meu controle. Isso significa que posso customizar cada componente sem lutar contra estilos externos ou versões de pacotes. O estilo `new-york` do shadcn/ui com `baseColor: neutral` se encaixa na paleta neutra que escolhi.

---

## Seções do Portfólio

| Seção | Componente | Descrição |
|---|---|---|
| Hero | `Hero.tsx` | Apresentação principal com foto, cargo, botões de CTA e redes sociais |
| Sobre | `About.tsx` | Breve bio com estatísticas de anos de experiência e projetos |
| Habilidades | `Skills.tsx` | Grid com 21+ tecnologias organizadas por categoria com tooltips |
| Experiência | `Experience.tsx` | Timeline de experiências profissionais, carrossel de educação e certificações |
| Projetos | `Projects.tsx` | Carrossel de projetos em destaque com thumbnails, links e stack usada |
| Contato | `Contact.tsx` | Formulário validado com campos de nome, e-mail e mensagem |
| Footer | `Footer.tsx` | Links para redes sociais e créditos |

---

## Como Executar Localmente

### Pré-requisitos

- Node.js 20+
- npm ou pnpm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/rodrigodebarros/meu-portifolio.git
cd meu-portifolio

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
npm run dev
```

O servidor de desenvolvimento inicia em `http://localhost:5173` com Hot Module Replacement (HMR) ativo.

### Build de Produção

```bash
npm run build
```

O output é gerado na pasta `/dist` na raiz do projeto.

### Preview da Build

```bash
npm run preview
```

### Verificação TypeScript

```bash
npm run check
```

---

## Currículos

Os currículos estão disponíveis em três idiomas na pasta `client/public/assets/`:

- `resume-pt.pdf` — Português
- `resume-en.pdf` — Inglês
- `resume-es.pdf` — Espanhol

O botão de download na seção Hero detecta o idioma atual da interface e faz o download do PDF correspondente automaticamente.

---

## Open Graph e SEO

O arquivo `client/index.html` contém as meta tags Open Graph e Twitter Card configuradas para uma prévia adequada ao compartilhar o link em redes sociais. O plugin `vite-plugin-meta-images` garante que a URL da imagem de preview seja absoluta e correta no ambiente de deploy.

---

## Sobre Mim

Sou Engenheiro de Software com mais de 4 anos de experiência, focado principalmente em backend com Java e Spring Boot. Trabalho com arquiteturas de microsserviços, DDD, Clean Architecture e sistemas distribuídos em projetos de grande escala como Comgás e Bradesco. Este portfólio é minha vitrine pública e está em constante evolução.

- LinkedIn: [linkedin.com/in/rodrigo-de-barros](https://linkedin.com/in/rodrigo-de-barros)
- GitHub: [github.com/rodrigodebarros](https://github.com/rodrigodebarros)
- E-mail: rodrigodebarros.dev@gmail.com

---

## Licença

MIT — fique à vontade para usar este projeto como referência ou inspiração para o seu próprio portfólio.
