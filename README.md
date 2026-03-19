# Portfólio — Rodrigo de Barros

Portfólio pessoal desenvolvido do zero para apresentar minha trajetória como Engenheiro de Software, projetos, habilidades e formas de contato. Construído com foco em performance, acessibilidade, internacionalização e experiência visual cuidadosa em tema claro e escuro.

---

## Visão Geral

Single Page Application (SPA) organizada em seções contínuas — Hero, Sobre, Habilidades, Experiência, Projetos e Contato — com navegação via âncoras suaves. Suporta três idiomas (Português, Inglês e Espanhol), alternância de tema claro/escuro e é totalmente responsiva.

---

## Stack Tecnológica

| Tecnologia | Versão | Motivo |
|---|---|---|
| React | 19.2.0 | Base consolidada; versão 19 traz melhorias de performance com o React Compiler |
| TypeScript | 5.6.3 | Tipagem estática para maior confiabilidade e manutenibilidade |
| Vite | 7.1.9 | Build tool rápida com HMR nativo |
| Tailwind CSS | 4.1.14 | v4 com `@theme inline` e CSS Variables nativas — sem `tailwind.config.ts` |
| Framer Motion | 12.23.24 | Animações declarativas e fluidas com API intuitiva |
| Wouter | 3.3.5 | Router minimalista (~2 kb) — suficiente para SPA com poucas rotas |
| TanStack Query | 5.60.5 | Gerenciamento de estado assíncrono e cache |
| React Hook Form + Zod | 7.66.0 + 3.25.76 | Validação tipada de formulários com schema Zod |
| i18next + react-i18next | 25.8.4 + 16.5.4 | Internacionalização com suporte a PT, EN e ES |
| next-themes | 0.4.6 | Tema sistema/claro/escuro com persistência via localStorage |
| shadcn/ui + Radix UI | — | Componentes headless, acessíveis e customizáveis com Tailwind |
| Embla Carousel | 8.6.0 | Carrossel leve e performático para Projetos, Educação e Certificações |
| Lucide React | 0.545.0 | Ícones SVG tree-shakeable |
| React Icons | 5.5.0 | Ícones de tecnologias (Java, Spring, AWS, etc.) para a seção de Skills |

---

## Arquitetura

O projeto é uma SPA 100% estática, sem backend próprio. Toda a lógica reside no cliente.

### Estrutura de Pastas

```
portfolio-rodrigo/
├── client/
│   ├── public/
│   │   ├── assets/            # Foto de perfil + currículos (PT, EN, ES)
│   │   ├── thumb/             # Thumbnails dos projetos
│   │   └── favicon.png
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/            # Componentes base do shadcn/ui (apenas os utilizados)
│   │   │   ├── Hero.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ThemeToggle.tsx
│   │   │   ├── LanguageSwitcher.tsx
│   │   │   └── CodeBackground.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx       # Página principal — compõe todas as seções
│   │   │   └── not-found.tsx  # Página 404
│   │   ├── data/
│   │   │   └── resume.ts      # Fonte única de dados: skills, experiências, projetos, educação
│   │   ├── hooks/
│   │   │   ├── use-toast.ts
│   │   │   └── use-mobile.tsx
│   │   ├── lib/
│   │   │   ├── i18n.ts        # Configuração do i18next com traduções embutidas
│   │   │   ├── queryClient.ts # Instância global do TanStack Query
│   │   │   └── utils.ts       # Helper `cn` para merge de classes Tailwind
│   │   ├── App.tsx            # Providers + roteamento
│   │   ├── main.tsx           # Entry point
│   │   └── index.css          # Tokens de design e estilos globais via @theme
│   └── index.html             # HTML base com meta tags Open Graph
├── vite.config.ts
├── tsconfig.json
├── postcss.config.js
├── components.json            # Configuração do CLI do shadcn/ui
└── vite-plugin-meta-images.ts # Plugin Vite customizado para Open Graph
```

### Padrão de Separação de Dados e Apresentação

Todo o conteúdo do portfólio — experiências, habilidades, projetos, educação e certificações — está centralizado em `client/src/data/resume.ts`. Os componentes apenas consomem esses dados, sem nenhum conteúdo embutido no JSX. Isso permite atualizar qualquer informação em um único lugar, sem tocar na camada de apresentação.

Cada entidade de dado tem campos multilíngues (`{ pt, en, es }`), o que elimina a necessidade de arquivos de tradução separados para conteúdo estruturado.

---

## Decisões Técnicas

### Tailwind CSS v4

A v4 elimina o `tailwind.config.ts`. Toda a customização de tokens — cores, tipografia, raios de borda, animações — é declarada diretamente no `index.css` via `@theme inline`, usando CSS Custom Properties nativas. O resultado é um CSS mais limpo e sem dependência de configuração em JavaScript.

### Internacionalização sem arquivos externos

As traduções de UI estão embutidas diretamente em `lib/i18n.ts` como objetos JavaScript, sem carregamento assíncrono de arquivos JSON. Para um portfólio de escopo fixo, isso elimina flashes de conteúdo não traduzido e simplifica o build. Os dados de conteúdo (bio, descrições de projetos, experiências) usam campos `{ pt, en, es }` diretamente nas interfaces de `resume.ts`.

### Sistema de Temas

`next-themes` com `attribute="class"` alterna o tema injetando uma classe no `<html>`. O tema padrão segue a preferência do sistema operacional. Dois conjuntos completos de CSS Custom Properties são definidos no `index.css`: tema claro com fundo quase branco, tema escuro com fundo preto puro (`#000`) para maior contraste.

### shadcn/ui — Componentes no Código, não como Dependência

shadcn/ui não é uma biblioteca instalada como pacote npm — os componentes são copiados diretamente para `src/components/ui/`. Apenas os 11 componentes efetivamente utilizados estão presentes no repositório. Isso mantém o bundle enxuto e dá controle total sobre o código de cada componente.

**Componentes ui/ presentes:**
`badge`, `button`, `card`, `dropdown-menu`, `form`, `input`, `label`, `textarea`, `toast`, `toaster`, `tooltip`

### Roteamento com Wouter

Wouter foi escolhido sobre o React Router por ter ~2 kb minificado contra os ~50 kb do React Router. O portfólio tem apenas duas rotas (`/` e 404), então não há motivo para carregar uma biblioteca de roteamento pesada.

### Formulário de Contato

React Hook Form + Zod para validação tipada no cliente. O envio abre o cliente de e-mail do usuário via `mailto:`, sem necessidade de backend ou serviço externo. A validação é feita antes do envio e mensagens de erro são exibidas por campo.

### CodeBackground — Animação CSS Pura

O efeito visual de código rolando ao fundo da Hero e da seção de Skills é implementado com CSS puro (`animate-code-scroll` / `animate-code-scroll-reverse` definidos no `index.css`), sem JavaScript de animação em tempo de execução. Isso evita o overhead do Framer Motion para algo puramente decorativo e mantém a performance do scroll fluida.

### Download de Currículo Localizado

O botão de download na Hero detecta o idioma atual da interface via `i18n.language` e faz o download do PDF correspondente (`resume-pt.pdf`, `resume-en.pdf` ou `resume-es.pdf`) automaticamente, sem lógica adicional no componente.

### Plugin Vite: `vite-plugin-meta-images`

Plugin customizado que atualiza as meta tags `og:image` e `twitter:image` durante o build com a URL absoluta do ambiente de deploy (detectada via variáveis de ambiente do Replit). Garante que previews de link em redes sociais funcionem corretamente sem configuração manual.

---

## Seções do Portfólio

| Seção | Componente | Descrição |
|---|---|---|
| Hero | `Hero.tsx` | Apresentação com foto, cargo, CTA de currículo/contato e redes sociais |
| Sobre | `About.tsx` | Bio com estatísticas de experiência e certificação |
| Habilidades | `Skills.tsx` | Grid de tecnologias com tooltips |
| Experiência | `Experience.tsx` | Timeline de experiências + carrossel de educação e certificações |
| Projetos | `Projects.tsx` | Carrossel de projetos com thumbnail, stack, links de código e demo |
| Contato | `Contact.tsx` | Formulário validado com envio via `mailto:` |
| Footer | `Footer.tsx` | Links para redes sociais e créditos |

---

## Como Rodar Localmente

**Pré-requisitos:** Node.js 20+

```bash
# Clone o repositório
git clone https://github.com/digonexs/portfolio-rodrigo.git
cd portfolio-rodrigo

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O servidor inicia em `http://localhost:5173` com Hot Module Replacement ativo.

### Outros comandos

```bash
# Build de produção (output em /dist)
npm run build

# Preview da build de produção
npm run preview

# Verificação de tipos TypeScript
npm run check
```

---

## Currículos

Disponíveis em `client/public/assets/`:

| Arquivo | Idioma |
|---|---|
| `resume-pt.pdf` | Português |
| `resume-en.pdf` | Inglês |
| `resume-es.pdf` | Espanhol |

O download é acionado pelo botão na Hero e seleciona automaticamente o PDF correspondente ao idioma ativo na interface.

---

## SEO e Open Graph

`client/index.html` contém as meta tags `og:title`, `og:description`, `twitter:card` e `twitter:title` configuradas. O plugin `vite-plugin-meta-images` injeta a URL absoluta da imagem Open Graph durante o build em ambientes de deploy com as variáveis `REPLIT_INTERNAL_APP_DOMAIN` ou `REPLIT_DEV_DOMAIN`.

---

## Contato

- **LinkedIn:** [linkedin.com/in/rodrigocavalcantedebarros](https://www.linkedin.com/in/rodrigocavalcantedebarros/)
- **GitHub:** [github.com/digonexs](https://github.com/digonexs)
- **E-mail:** rodrigocavalcantedebarros@hotmail.com

---

## Licença

MIT
