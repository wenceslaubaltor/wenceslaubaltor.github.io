# Tutorial: Página de Perfil Responsiva com HTML + CSS

Documento de referência do tutorial completo, desde a estrutura HTML até o deploy no GitHub Pages.

- **Site no ar:** https://wenceslaubaltor.github.io/
- **Repositório:** https://github.com/wenceslaubaltor/wenceslaubaltor.github.io
- **Pasta local:** `~/projetos/perfil-web/`
- **Stack:** HTML5 + CSS3 puros (sem frameworks, sem JavaScript)

---

## Índice

- [Parte 1 — Construção da página (HTML + CSS)](#parte-1--construção-da-página-html--css)
  - [Etapa 1: Estrutura HTML semântica](#etapa-1--estrutura-html-semântica)
  - [Etapa 2: CSS básico (reset, variáveis, tipografia)](#etapa-2--css-básico-reset-variáveis-tipografia)
  - [Etapa 3: Flexbox e layout centralizado](#etapa-3--flexbox-e-layout-centralizado)
  - [Etapa 4: Lista de links como botões](#etapa-4--lista-de-links-como-botões)
  - [Etapa 5: Foto responsiva e circular](#etapa-5--foto-responsiva-e-circular)
  - [Etapa 6: Media queries (mobile-first)](#etapa-6--media-queries-mobile-first)
  - [Etapa 7: Hover, transições e dark mode](#etapa-7--hover-transições-e-dark-mode)
- [Parte 2 — Deploy no GitHub Pages](#parte-2--deploy-no-github-pages)
  - [Deploy 1: Pré-requisitos](#deploy-1--pré-requisitos)
  - [Deploy 2: GitHub CLI](#deploy-2--github-cli)
  - [Deploy 3: Git local e primeiro commit](#deploy-3--git-local-e-primeiro-commit)
  - [Deploy 4: Criar repo no GitHub e push](#deploy-4--criar-repo-no-github-e-push)
  - [Deploy 5: GitHub Pages no ar](#deploy-5--github-pages-no-ar)
- [Parte 3 — CSS Grid (seção de projetos)](#parte-3--css-grid-seção-de-projetos)
  - [Grid 1: Flexbox vs Grid + ativação básica](#grid-1--flexbox-vs-grid--ativação-básica)
  - [Grid 2: Controle fino de larguras e espaçamentos](#grid-2--controle-fino-de-larguras-e-espaçamentos)
  - [Grid 3: repeat() e minmax()](#grid-3--repeat-e-minmax)
  - [Grid 4: auto-fit (responsivo sem media queries)](#grid-4--auto-fit-responsivo-sem-media-queries)
  - [Grid 5: Posicionamento (span, grid-column, grid-row)](#grid-5--posicionamento-span-grid-column-grid-row)
  - [Grid 6: grid-template-areas (layout em palavras)](#grid-6--grid-template-areas-layout-em-palavras)
  - [Grid 7: Polimento, commit e deploy](#grid-7--polimento-commit-e-deploy)
- [Anexo A — Código final](#anexo-a--código-final)
- [Anexo B — Glossário de conceitos](#anexo-b--glossário-de-conceitos)
- [Anexo C — Comandos úteis](#anexo-c--comandos-úteis)
- [Próximos passos](#próximos-passos)

---

# Parte 1 — Construção da página (HTML + CSS)

## Etapa 1 — Estrutura HTML semântica

HTML semântico significa usar tags que **descrevem o significado** do conteúdo, não só sua aparência. Em vez de `<div>` para tudo, usamos `<header>`, `<main>`, `<section>` etc.

### Por que importa
- **Acessibilidade:** leitores de tela entendem a estrutura
- **SEO:** o Google entende o que é título, conteúdo principal, navegação
- **Manutenção:** o nome da tag já documenta a função

### Tags principais

| Tag | Significado |
|------|--------------|
| `<!DOCTYPE html>` | Diz ao navegador "isto é HTML5" |
| `<html lang="pt-BR">` | Raiz do documento, com idioma declarado |
| `<head>` | Metadados invisíveis |
| `<meta charset="UTF-8">` | Permite acentos e caracteres especiais |
| `<meta name="viewport"...>` | **Essencial para responsividade** — impede o celular de "encolher" a página |
| `<main>` | Conteúdo principal (uma vez por página) |
| `<section>` | Agrupa conteúdo relacionado |
| `<img>` com `alt` | Imagem, com texto alternativo obrigatório |
| `<h1>` único | Título mais importante (1 por página) |
| `<ul>`, `<li>`, `<a>` | Lista, item, link |

### Recap

| Conceito | Onde aparece |
|----------|--------------|
| HTML semântico | `<main>`, `<section>` em vez de `<div>` |
| Meta viewport (responsividade) | `<meta name="viewport"...>` no `<head>` |
| Acessibilidade | atributo `alt` na `<img>`, `lang="pt-BR"` no `<html>` |
| Hierarquia de títulos | `<h1>` único + `<h2>` para subseções |
| `mailto:` | Prefixo de link que abre cliente de e-mail |

---

## Etapa 2 — CSS básico (reset, variáveis, tipografia)

Três alicerces antes de qualquer layout:

1. **Reset** — zera os defaults inconsistentes entre navegadores
2. **Variáveis CSS (custom properties)** — define cores, espaçamentos e fontes uma vez só
3. **Tipografia** — define a "vibe" visual do site

### Conceitos

| Sintaxe | O que faz |
|---------|-----------|
| `<link rel="stylesheet" href="style.css">` | Liga o CSS ao HTML |
| `* { ... }` | Seletor universal (aplica a todos os elementos) |
| `:root { --nome: valor }` | Declara variável no elemento raiz |
| `var(--nome)` | Lê o valor da variável |
| `rem` | Unidade relativa à fonte do `<html>` (padrão 16px) |
| `@import url(...)` | Importa fonte do Google Fonts |
| `box-sizing: border-box` | `width` passa a incluir padding/borda |

### Por que `rem` em vez de `px`
Se o usuário aumenta a fonte do navegador para acessibilidade, tudo escala junto. Em `px`, nada se ajusta.

### Por que variáveis com nomes semânticos
`--cor-destaque` em vez de `--azul`. Se um dia trocar a cor para roxo, o nome continua fazendo sentido.

### Recap

| Conceito | Onde aparece |
|----------|--------------|
| Linkar CSS ao HTML | `<link rel="stylesheet">` no `<head>` |
| Reset universal | `*, *::before, *::after { ... }` |
| `box-sizing: border-box` | Dentro do reset |
| Variáveis CSS | `:root { --cor-fundo: ... }` |
| Usar variável | `var(--cor-fundo)` |
| Tipografia escalável | `rem` em vez de `px` |
| Hierarquia visual | Tamanhos e pesos diferentes em `h1` e `h2` |

---

## Etapa 3 — Flexbox e layout centralizado

**Flexbox** é o sistema do CSS para distribuir elementos em **uma direção** (linha ou coluna).

### Propriedades-chave

| Propriedade | Onde se aplica | Função |
|-------------|----------------|--------|
| `display: flex` | No container | Ativa o Flexbox |
| `flex-direction` | No container | `row` (padrão) ou `column` |
| `justify-content` | No container | Eixo **principal** |
| `align-items` | No container | Eixo **cruzado** |
| `gap` | No container | Espaço entre filhos |
| `min-height: 100vh` | No `body` | Mínimo da altura da viewport |

### Pegadinha importante
`justify-content` e `align-items` **trocam de eixo** dependendo do `flex-direction`:
- `row` → `justify-content` é horizontal, `align-items` é vertical
- `column` → `justify-content` é vertical, `align-items` é horizontal

### Padrão de container responsivo
`width: 100% + max-width: 420px` — em telas pequenas ocupa tudo, em telas grandes não fica gigante.

### Recap

| Conceito | Onde aparece |
|----------|--------------|
| Ativar Flexbox | `display: flex` |
| Direção da linha vs coluna | `flex-direction: column` no `.perfil` |
| Alinhamento eixo principal | `justify-content: center` no `body` |
| Alinhamento eixo cruzado | `align-items: center` no `.perfil` |
| Espaço entre filhos | `gap: var(--espaco-medio)` |
| Container responsivo | `width: 100% + max-width: 420px` |
| Altura da viewport | `min-height: 100vh` |
| Card visual | `padding + border-radius + box-shadow` |

---

## Etapa 4 — Lista de links como botões

HTML não tem tag `<button-link>`. O padrão é estilizar `<a>` para parecer um botão.

### Defaults a combater

| Default | Solução |
|---------|---------|
| `<ul>` vem com bolinhas | `list-style: none` |
| `<a>` vem sublinhado | `text-decoration: none` |
| `<a>` é `inline` | `display: block` (vira "blocão" clicável) |

### Regra de ouro de UX
Área clicável de botão no celular: **mínimo 44×44px** (recomendação Apple). Padding generoso resolve.

### Por que `display: block` no link
- **Inline:** ocupa só o espaço do texto. Padding vertical ignorado.
- **Block:** ocupa a largura inteira do pai, padding por todos os lados, clica em qualquer parte do retângulo.

### Sintaxe de padding

| Valores | Significado |
|---------|-------------|
| 1 valor | Todos os lados |
| 2 valores | Vertical / horizontal |
| 4 valores | Top / right / bottom / left (sentido horário) |

### Recap

| Conceito | Onde aparece |
|----------|--------------|
| Remover bullets | `list-style: none` |
| Tirar sublinhado | `text-decoration: none` |
| Link como área clicável | `display: block` |
| Padding 2-valores | `padding: 0.75rem var(--espaco-medio)` |
| Sintaxe curta de borda | `border: 1px solid #e5e7eb` |
| Seletor descendente | `.links a` (só dentro de `.links`) |

---

## Etapa 5 — Foto responsiva e circular

Duas coisas: tirar o `style=` inline do HTML e tornar imagens "à prova de bala".

### Por que evitar `style=` inline
- **Mistura responsabilidades:** HTML deveria descrever estrutura, CSS deveria descrever aparência
- **Especificidade altíssima:** estilos inline ganham de quase qualquer regra externa

### Regra global de proteção
```css
img {
    max-width: 100%;
    height: auto;
    display: block;
}
```
Essa é uma das regras mais valiosas de CSS — vale colocar em **todo** projeto novo.

### Foto circular: combo essencial
- `width: 140px` + `aspect-ratio: 1 / 1` → caixa quadrada de tamanho fixo
- `object-fit: cover` → recorta a imagem para preencher sem distorcer
- `border-radius: 50%` → vira círculo (só funciona em caixa quadrada!)

**Atenção:** `border-radius: 50%` em caixa retangular vira **elipse**, não círculo.

### Recap

| Conceito | Onde aparece |
|----------|--------------|
| HTML limpo (sem inline) | Removemos do `<img>` |
| Imagem nunca estoura o pai | `img { max-width: 100% }` global |
| Manter proporção | `height: auto` |
| Caixa quadrada forçada | `aspect-ratio: 1 / 1` |
| Círculo perfeito | `border-radius: 50%` em caixa quadrada |
| Recorte sem distorção | `object-fit: cover` |
| Profundidade visual | borda + `box-shadow` |

---

## Etapa 6 — Media queries (mobile-first)

Media queries = blocos de CSS que só se aplicam quando uma condição da tela é verdadeira.

### Mobile-first vs desktop-first

| Abordagem | Como funciona | Quando usar |
|-----------|---------------|-------------|
| Desktop-first (antigo) | Base = desktop. `@media (max-width)` remove para mobile | Sites legados |
| **Mobile-first** (moderno) | Base = mobile. `@media (min-width)` adiciona para desktop | **Padrão atual** |

### Por que mobile-first ganhou
- Maioria do tráfego é mobile
- Layouts mobile são mais simples (uma coluna) → base mais limpa
- Você **adiciona** complexidade em vez de tentar **desfazer**

### Sintaxe
```css
@media (min-width: 768px) {
    /* só vale se a tela tiver ≥ 768px */
}
```

### Breakpoints comuns

| Largura | Representa |
|---------|------------|
| 480px | Smartphones grandes em paisagem |
| 768px | Tablets |
| 1024px | Laptops |
| 1280px | Desktops |

**Regra de ouro:** escolha o breakpoint pelo conteúdo, não pelo dispositivo. Onde seu layout começa a parecer feio = breakpoint.

### `flex: 1`
Atalho para `flex-grow: 1; flex-shrink: 1; flex-basis: 0`. Tradução: "estica para ocupar espaço, encolhe se necessário, base zero". Faz cards dividirem espaço igualmente.

### Recap

| Conceito | Onde aparece |
|----------|--------------|
| Filosofia mobile-first | CSS base = mobile, `@media (min-width)` adiciona desktop |
| Sintaxe de media query | `@media (min-width: 768px) { ... }` |
| Sobrescrita condicional | Mudar `flex-direction` no desktop |
| Dividir espaço entre flex items | `flex: 1` em ambos os cards |
| Esticar cards à mesma altura | `align-items: stretch` |
| Ajustar tipografia por viewport | `h1 { font-size: 2rem }` dentro do @media |

---

## Etapa 7 — Hover, transições e dark mode

Quatro acabamentos transformam página estática em página viva:

1. **`:hover`** — Pseudo-classe acionada quando o cursor está em cima
2. **`transition`** — Anima a mudança entre dois estados de forma suave
3. **`:focus-visible`** — Mostra contorno quando o usuário navega por teclado (acessibilidade)
4. **`@media (prefers-color-scheme: dark)`** — Detecta modo escuro do SO

### Anatomia da `transition`

```css
transition: <propriedade> <duração> <curva>;
```

- **Duração:** `0.15s` é o sweet spot para UI (rápido mas não brusco)
- **Múltiplas propriedades:** separa por vírgula
- **Curva:** `ease`, `ease-out`, `linear`...

### Erro comum
Colocar `transition` dentro de `:hover`. Resultado: anima a "entrada" mas não a "saída". **Sempre coloque `transition` na regra base.**

### Propriedades performáticas
**Anime sem medo:** `transform`, `opacity`.
**Evite animar:** `width`, `top`, `left` — forçam o navegador a recalcular layout.

### Acessibilidade: `:focus-visible` em vez de `:focus`
- `:focus` dispara em clique de mouse (visualmente poluído)
- `:focus-visible` só dispara em navegação por teclado (Tab)

**Nunca use `outline: none` sem alternativa.** Quebra navegação por teclado.

### Dark mode em 8 linhas
Por usar variáveis em todo lugar, **basta sobrescrever as variáveis** dentro do `@media (prefers-color-scheme: dark)` e a página inteira muda. Esse é o pagamento do investimento da Etapa 2.

### Testar dark mode no DevTools
F12 → Ctrl+Shift+P → "Rendering" → "Emulate CSS media feature prefers-color-scheme" → dark

### Recap

| Conceito | Onde aparece |
|----------|--------------|
| Estado de hover | `.links a:hover { ... }` |
| Animação suave | `transition` na **base**, não no `:hover` |
| Movimento performático | `transform: translateY(-2px)` |
| Acessibilidade do teclado | `:focus-visible` com `outline` |
| Detectar preferência do SO | `@media (prefers-color-scheme: dark)` |
| Tema via variáveis | Sobrescrever `--cor-...` em `:root` |

---

# Parte 2 — Deploy no GitHub Pages

## Deploy 1 — Pré-requisitos

Necessários:
- Conta no GitHub (login real: `wenceslaubaltor`)
- `git` instalado (já tinha — v2.51.2)
- `git config --global user.name` e `user.email` configurados (já estavam)

---

## Deploy 2 — GitHub CLI

### Instalação no NixOS (3 opções)

| Modo | Comando | Persistência |
|------|---------|--------------|
| Permanente no sistema | Editar `configuration.nix` | Reboot resiliente |
| Permanente no usuário | `nix profile install nixpkgs#gh` | Por usuário |
| **Temporário** | `nix-shell -p gh` | Só na sessão |

### Fluxo do `gh auth login`
1. GitHub.com (não Enterprise)
2. HTTPS
3. Autenticar git operations: **Yes**
4. **Login with a web browser**
5. Cola o código no navegador, autoriza

### Truque: comandos interativos no Claude Code
Prefixar com `!` no prompt roda na sessão do usuário:
```
! nix-shell -p gh --run "gh auth login"
```

---

## Deploy 3 — Git local e primeiro commit

### Fluxo básico do git

```
arquivo modificado  →  git add  →  staging  →  git commit  →  histórico
```

A **staging area** permite escolher quais mudanças entram no próximo commit.

### Comandos essenciais

| Comando | Função |
|---------|--------|
| `git init -b main` | Cria repo com branch principal `main` |
| `git status` | Mostra estado dos arquivos |
| `git add .` | Move tudo para staging |
| `git commit -m "msg"` | Cria snapshot |
| `git log --oneline` | Histórico resumido |

### `main` vs `master`
Padrão antigo era `master`. Em 2020 a comunidade migrou para `main`. Sempre force com `-b main` em repos novos.

### Convenção de mensagem de commit
- Linha 1 com ≤72 caracteres
- Modo imperativo: "Adicionar X", não "Adicionado X"
- Pense: "Esse commit vai _____"

### Hash do commit
Identificador único (SHA-1 abreviado, ex: `be50475`). Permite referenciar qualquer commit no histórico.

---

## Deploy 4 — Criar repo no GitHub e push

### Conceito: `remote`
Um "apelido" para a URL de um repo remoto. Por convenção o principal se chama `origin`.

### Atalho do `gh` CLI
```bash
gh repo create wenceslaubaltor.github.io \
    --public \
    --source=. \
    --remote=origin \
    --push
```

| Flag | Função |
|------|--------|
| `--public` | Repo público (**obrigatório para GitHub Pages grátis**) |
| `--source=.` | Usa o repo git da pasta atual |
| `--remote=origin` | Adiciona como remote `origin` |
| `--push` | Faz `git push -u origin main` |

### Lição aprendida nesta etapa
**O nome do repo importa.** Para virar site de usuário automático, deve ser **exatamente** `<seuuser>.github.io`. Eu inicialmente criei com `baltorw.github.io` (confundindo username com prefixo de e-mail) e tive que renomear para `wenceslaubaltor.github.io` com:

```bash
gh repo rename wenceslaubaltor.github.io --yes
```

O `gh repo rename` atualiza tanto o GitHub quanto o URL do remote local automaticamente.

---

## Deploy 5 — GitHub Pages no ar

### Comportamento de site de usuário
Para repos no padrão `<usuario>.github.io`:
- GitHub Pages **ativa sozinho**
- Não precisa mexer em configurações
- Primeira build leva ~30-60 segundos
- Cada `push` na `main` dispara rebuild automático

### Verificar status
```bash
gh api repos/<user>/<repo>/pages --jq '.status'
# "building" → "built"
```

### Verificar HTTP
```bash
curl -sI https://wenceslaubaltor.github.io/ | head -5
# HTTP/2 200 = no ar
```

### Características do plano grátis
- HTTPS automático com certificado válido
- CDN global (Fastly)
- 1 GB de banda/mês
- 10 builds/hora
- Para perfil pessoal: infinito na prática

---

# Parte 3 — CSS Grid (seção de projetos)

Adição posterior ao tutorial: uma seção `.projetos` com 5 cards renderizados em grid responsivo. Cobre o sistema CSS Grid do zero, terminando com layout via `grid-template-areas`.

## Grid 1 — Flexbox vs Grid + ativação básica

**Flexbox e Grid não competem — se complementam.**

| Sistema | Dimensão | Tipicamente usado para |
|---------|----------|------------------------|
| **Flexbox** | 1D (linha **ou** coluna) | Navegação, lista de botões, distribuir num eixo |
| **Grid** | 2D (linhas **e** colunas simultaneamente) | Galerias, dashboards, layouts de página |

Outra forma de pensar:
- **Flexbox** é "content-out": "tenho 3 itens, distribui no espaço"
- **Grid** é "layout-in": "tenho uma grade 3×2, coloca itens nas células"

### Sintaxe básica

| Propriedade | Onde vai | Função |
|-------------|----------|--------|
| `display: grid` | No container | Ativa o Grid |
| `grid-template-columns` | No container | Define colunas e larguras |
| `gap` | No container | Espaço entre células (igual ao Flexbox) |
| `fr` | Unidade | "Fração" do espaço disponível |

### Unidade `fr`
`1fr 1fr 1fr` = três colunas iguais. Inclui o `gap` no cálculo (porcentagens não fariam isso).

### Recap

| Conceito | Onde apareceu |
|----------|---------------|
| Flexbox = 1D, Grid = 2D | Conceito teórico |
| Misturar os dois | `.projetos` flex, `.grid-projetos` grid |
| Ativar Grid | `display: grid` |
| Grid sem template-columns | Default = 1 coluna |
| 3 colunas iguais | `grid-template-columns: 1fr 1fr 1fr` |
| HTML semântico para cards | `<article>` |
| Acomodar layout flex existente | `flex-wrap: wrap` + `flex-basis: 100%` |

---

## Grid 2 — Controle fino de larguras e espaçamentos

### Unidades em `grid-template-columns`

| Unidade | Comportamento |
|---------|---------------|
| `1fr` | Fração do espaço **livre** |
| `px` | Tamanho fixo absoluto |
| `%` | Porcentagem do container (raro — `fr` é melhor) |
| `auto` | "O que o conteúdo precisar" |
| `min-content` | Largura da maior palavra |
| `max-content` | Largura do texto sem quebra |
| `minmax(min, max)` | Limites inferior e superior |

### Por que `fr` ganha de `%`

Container de 400px, `gap: 16px`, 3 colunas:
- `33.33%` cada → 133px × 3 + 32px gaps = **431px** (estoura!)
- `1fr` cada → (400 − 32) / 3 = **122.67px** (bate certo)

`fr` é **gap-aware**, `%` é cego ao gap.

### `gap` separado

| Sintaxe | O que faz |
|---------|-----------|
| `gap: 16px` | Igual nas duas direções |
| `gap: 24px 16px` | Vertical / horizontal (igual ao padding) |
| `row-gap: 24px` + `column-gap: 16px` | Versão expandida |

### Padrões clássicos de `template-columns`

```css
grid-template-columns: 240px 1fr;             /* sidebar + conteúdo */
grid-template-columns: 200px 1fr 300px;       /* sidebar + main + aside */
grid-template-columns: auto 1fr;              /* ícone + texto */
grid-template-columns: 1fr 2fr;               /* segunda 2× a primeira */
```

### Recap

| Conceito | Onde apareceu |
|----------|---------------|
| Unidades em Grid | `fr`, `px`, `%`, `auto`, `min-content`, `max-content` |
| `fr` > `%` | `fr` desconta o `gap` antes de dividir |
| `gap` 2 valores | row / column |
| Linhas automáticas | Grid cria linhas conforme itens chegam |
| Padrões de sidebar | `240px 1fr`, `auto 1fr` |

---

## Grid 3 — `repeat()` e `minmax()`

### `repeat()`: fim da repetição

| Antes | Depois |
|-------|--------|
| `1fr 1fr 1fr` | `repeat(3, 1fr)` |
| `100px 100px 100px 100px` | `repeat(4, 100px)` |
| `1fr 1fr 2fr 1fr 1fr 2fr` | `repeat(2, 1fr 1fr 2fr)` |
| `200px 1fr 1fr 1fr 1fr 200px` | `200px repeat(4, 1fr) 200px` |

`repeat()` pode ser misturado com colunas fixas.

### `minmax(min, max)`

| Uso | O que faz |
|-----|-----------|
| `minmax(200px, 1fr)` | Nunca menor que 200px, pode crescer |
| `minmax(200px, 400px)` | Fica entre 200 e 400px |
| `minmax(100px, auto)` | Mínimo 100px, cresce com conteúdo |
| `minmax(0, 1fr)` | Tira a "trava" do `auto` que faz estourar com conteúdo grande |

### A armadilha do `1fr`

`1fr` é tecnicamente `minmax(auto, 1fr)`. O `auto` no mínimo = "tamanho do conteúdo". Conteúdo gigante (URL longa, imagem sem CSS) estoura a coluna. Conserto: `minmax(0, 1fr)`.

### `grid-template-rows` vs `grid-auto-rows`

| Propriedade | Função |
|-------------|--------|
| `grid-template-rows` | Define linhas **explicitamente** |
| `grid-auto-rows` | Define tamanho de linhas **criadas automaticamente** |

Sem `grid-template-rows`, **todas** as linhas são auto, e `grid-auto-rows` controla todas.

### Recap

| Conceito | Onde apareceu |
|----------|---------------|
| `repeat(N, padrão)` | `repeat(3, 1fr)` |
| Misturar repeat com fixos | `200px repeat(4, 1fr) 200px` |
| `minmax(min, max)` | Limites de tamanho |
| Altura mínima das linhas | `grid-auto-rows: minmax(120px, auto)` |
| Conserto de estouro | `minmax(0, 1fr)` |

---

## Grid 4 — `auto-fit` (responsivo sem media queries)

**A etapa mais transformadora do tutorial.**

### `auto-fit` vs `auto-fill`

| Modo | Quando sobra espaço |
|------|----------------------|
| **`auto-fit`** | Estica colunas existentes para preencher |
| **`auto-fill`** | Cria colunas vazias invisíveis para reservar |

**Regra prática:** quase sempre você quer `auto-fit`.

### O one-liner mágico

```css
grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
```

> "Repita colunas quantas couberem, cada uma com mínimo 180px e podendo crescer."

Comportamento em diferentes larguras (com `gap: 16px`):

| Largura | Colunas |
|---------|---------|
| 300px | 1 |
| 500px | 2 |
| 800px | 3 |
| 1200px | 5 |

Sem **nenhuma** media query.

### Comparação direta

**Sem `auto-fit`** (6 blocos de @media):
```css
.grid { grid-template-columns: 1fr; }
@media (min-width: 500px)  { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 700px)  { .grid { grid-template-columns: repeat(3, 1fr); } }
@media (min-width: 1000px) { .grid { grid-template-columns: repeat(4, 1fr); } }
@media (min-width: 1300px) { .grid { grid-template-columns: repeat(5, 1fr); } }
```

**Com `auto-fit`** (1 linha):
```css
.grid { grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); }
```

### Quando media queries continuam valendo

`auto-fit` resolve **número de colunas de uma grade homogênea**. Ainda precisa de media queries para:
- Mudar `flex-direction` ou `grid-template-areas`
- Mostrar/esconder elementos
- Mudar tipografia drasticamente
- Reorganizar layout estrutural

### Recap

| Conceito | Onde apareceu |
|----------|---------------|
| Decidir colunas dinamicamente | `auto-fit` |
| `auto-fit` vs `auto-fill` | Estica vs reserva |
| One-liner mágico | `repeat(auto-fit, minmax(180px, 1fr))` |
| Mobile-first natural | Já na base, sem @media |
| Escolher o `minmax` mínimo | Pelo conteúdo, não pelo dispositivo |

---

## Grid 5 — Posicionamento (`span`, `grid-column`, `grid-row`)

### Grid lines: numeração

Grid numera **linhas** (não células). Para 3 colunas, linhas verticais são numeradas de 1 a 4.

```
linha 1     linha 2     linha 3     linha 4
   |           |           |           |
   v           v           v           v
   ┌───────────┬───────────┬───────────┐
   │  col 1    │  col 2    │  col 3    │
   └───────────┴───────────┴───────────┘
```

Posicionar item = dizer entre quais linhas ele vive.

### Sintaxes

| Propriedade | Exemplo | Significado |
|-------------|---------|-------------|
| `grid-column: 1 / 3` | Da linha 1 à linha 3 | Ocupa colunas 1 e 2 |
| `grid-column: 1 / -1` | Da linha 1 à última | Ocupa **todas** as colunas |
| `grid-column: span 2` | A partir de onde estaria, 2 colunas | Atalho mais usado |
| `grid-row: 1 / 3` | Mesma lógica, vertical | Item se estica em 2 linhas |
| `grid-row: span 2` | Atalho vertical | Card "alto" |

### Por que `span` é mais portátil

Com `auto-fit`, o número de colunas é dinâmico. `1 / 3` quebra em telas pequenas. `span 2` se adapta — se só tem 1 coluna, ocupa 1 coluna. Mais defensivo.

### Seletor composto

`.projeto-card.destaque` (sem espaço) = elemento com **ambas** as classes. Especificidade maior que `.projeto-card` sozinho, sem precisar de `!important`.

### Padrões úteis

```css
.header   { grid-column: 1 / -1; }           /* ocupa todas as colunas */
.imagem   { grid-row: span 2; }              /* ocupa 2 linhas */
.hero     { grid-column: span 2;
            grid-row: span 2; }              /* 2 col × 2 linhas */
.sidebar  { grid-column: 2 / 4; }            /* posição explícita */
```

### Recap

| Conceito | Onde apareceu |
|----------|---------------|
| Grid lines | Numeração de 1 a N+1 |
| `grid-column: start / end` | Posição explícita |
| `grid-column: 1 / -1` | Da primeira à última |
| `grid-column: span N` | Atalho portátil |
| Seletor composto | `.projeto-card.destaque` |
| Pílula visual | `border-radius: 999px` |

---

## Grid 6 — `grid-template-areas` (layout em palavras)

### Conceito

Desenha o layout com strings nomeando cada célula. Lê-se literalmente como vai parecer.

```css
grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
```

### Sintaxe

Duas partes:
1. **No container:** strings nomeando células
2. **Em cada filho:** `grid-area: <nome>`

| Padrão | Significado |
|--------|-------------|
| `"a b c"` | 1 linha, 3 colunas |
| `"a a b"` | `a` ocupa 2 colunas, `b` 1 |
| `"a a" "b c"` | 2 linhas, 2 colunas; `a` ocupa toda a linha 1 |
| `"a . b"` | Ponto = célula vazia |

**Regra crítica:** células com mesmo nome **devem formar um retângulo**, ou o CSS é inválido.

### O refactor do `<main>`

Antes — Flexbox com wrap (4 regras escondendo o layout):
```css
main { display: flex; flex-direction: row; flex-wrap: wrap; }
.perfil, .links { flex: 1; }
.projetos { flex-basis: 100%; }
```

Depois — Grid com areas (layout desenhado no código):
```css
main {
    display: grid;
    grid-template-areas:
        "perfil   links"
        "projetos projetos";
}
.perfil   { grid-area: perfil; }
.links    { grid-area: links; }
.projetos { grid-area: projetos; }
```

### Padrão para responsivo

```css
/* Mobile: tudo empilhado */
main {
    grid-template-areas:
        "perfil"
        "links"
        "projetos";
}

@media (min-width: 768px) {
    main {
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
            "perfil   links"
            "projetos projetos";
    }
}
```

Os `grid-area` dos filhos ficam fora do @media — só o **layout** muda.

### Recap

| Conceito | Onde apareceu |
|----------|---------------|
| `grid-template-areas` | Layout com strings |
| `grid-area: <nome>` | Atribui filho a uma área |
| Mesmo nome adjacente | Funde em retângulo |
| `.` | Célula vazia |
| Áreas estáveis | Filhos sabem seu nome globalmente; só o template muda nos breakpoints |
| Areas vs span | Areas = layout inteiro; span = ajustes pontuais |

---

## Grid 7 — Polimento, commit e deploy

Sem conceito novo de Grid. Costurar tudo:
1. Pequeno polimento (hover + transition nos cards)
2. Conferir tudo localmente
3. `git add` + `git commit` (com mensagem multi-linha explicando *por quê*)
4. `git push`
5. Aguardar Pages rebuildar (`until <condição>; do sleep 5; done`)
6. Confirmar HTTP 200 + status `built`

### Convenção de commit multi-linha

```
Linha 1: resumo imperativo curto (≤72 chars)
[linha em branco]
Parágrafo explicando o *porquê* e contexto da mudança.
Bom para refatorações grandes ou mudanças com várias partes.
```

### Padrão `until` para polling

```bash
until [ "$(comando-que-retorna-status)" = "estado-desejado" ]; do
    sleep 5
done
```

Mais limpo que `sleep <fixo>`: rápido se finalizar antes, robusto se demorar mais.

### Hard reload

`Ctrl+Shift+R` ignora cache do navegador. Útil logo após push para garantir que está vendo a versão nova.

---

## Comparação Flexbox vs Grid: quando usar cada um

| Cenário | Melhor escolha |
|---------|----------------|
| Barra de navegação horizontal | Flexbox |
| Lista de tags/botões | Flexbox |
| Centralizar 1 item no meio da tela | Flexbox |
| Card/sidebar com 3 elementos empilhados | Flexbox column |
| **Galeria de cards responsiva** | **Grid + auto-fit** |
| **Dashboard com sidebar + main + aside** | **Grid + areas** |
| Layout controlando linhas E colunas | Grid |
| "Espalha o resto do espaço" | Flexbox (`flex: 1`) |
| "Ocupa 2 células" | Grid (`span 2`) |

---

# Anexo A — Código final

## `index.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Perfil</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main>
        <section class="perfil">
            <img src="imagem.jpeg" alt="Foto de perfil de Wenceslau">
            <h1>Wenceslau</h1>
            <p class="bio">
                Desenvolvedor curioso, aprendendo HTML e CSS para construir
                minha presença na web.
            </p>
        </section>

        <section class="links">
            <h2>Meus links</h2>
            <ul>
                <li><a href="https://github.com/">GitHub</a></li>
                <li><a href="https://linkedin.com/">LinkedIn</a></li>
                <li><a href="mailto:baltorw@gmail.com">E-mail</a></li>
            </ul>
        </section>

        <section class="projetos">
            <h2>Meus projetos</h2>
            <div class="grid-projetos">
                <article class="projeto-card destaque">
                    <span class="badge">Destaque</span>
                    <h3>Página de Perfil</h3>
                    <p>Site pessoal responsivo construído com HTML e CSS puros, hospedado no GitHub Pages.</p>
                </article>
                <article class="projeto-card">
                    <h3>Lista de Tarefas</h3>
                    <p>Aplicativo simples de to-do com persistência local. Praticando manipulação de DOM.</p>
                </article>
                <article class="projeto-card">
                    <h3>Calculadora</h3>
                    <p>Calculadora estilizada com operações básicas. Foco em layout via CSS Grid.</p>
                </article>
                <article class="projeto-card">
                    <h3>Conversor de Moedas</h3>
                    <p>Pequeno conversor que consome uma API pública. Prática inicial com fetch.</p>
                </article>
                <article class="projeto-card">
                    <h3>Quiz Interativo</h3>
                    <p>Jogo de perguntas e respostas com pontuação. Foco em lógica e DOM.</p>
                </article>
            </div>
        </section>
    </main>
</body>
</html>
```

## `style.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

/* ---------- Reset ---------- */
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* ---------- Variáveis (paleta e tipografia) ---------- */
:root {
    --cor-fundo: #f4f4f5;
    --cor-texto: #1f2937;
    --cor-texto-suave: #6b7280;
    --cor-destaque: #2563eb;
    --cor-card: #ffffff;

    --fonte-principal: 'Inter', system-ui, sans-serif;

    --espaco-pequeno: 0.5rem;
    --espaco-medio: 1rem;
    --espaco-grande: 2rem;
}

/* ---------- Tipografia base ---------- */
body {
    font-family: var(--fonte-principal);
    font-size: 1rem;
    line-height: 1.6;
    color: var(--cor-texto);
    background-color: var(--cor-fundo);
}

h1 {
    font-size: 1.75rem;
    font-weight: 700;
}

h2 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--cor-texto-suave);
}

.bio {
    color: var(--cor-texto-suave);
}

/* ---------- Imagens responsivas (regra geral) ---------- */
img {
    max-width: 100%;
    height: auto;
    display: block;
}

/* ---------- Layout: centralizar tudo na tela ---------- */
body {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding: var(--espaco-grande);
}

main {
    width: 100%;
    max-width: 420px;
    display: grid;
    gap: var(--espaco-grande);
    grid-template-areas:
        "perfil"
        "links"
        "projetos";
}

.perfil    { grid-area: perfil; }
.links     { grid-area: links; }
.projetos  { grid-area: projetos; }

/* ---------- Card de perfil ---------- */
.perfil {
    background-color: var(--cor-card);
    padding: var(--espaco-grande);
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--espaco-medio);
    text-align: center;
}

/* ---------- Card da lista de links ---------- */
.links {
    background-color: var(--cor-card);
    padding: var(--espaco-grande);
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

    display: flex;
    flex-direction: column;
    gap: var(--espaco-medio);
}

/* ---------- Links como botões ---------- */
.links ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--espaco-pequeno);
}

.links a {
    display: block;
    padding: 0.75rem var(--espaco-medio);
    background-color: var(--cor-fundo);
    color: var(--cor-texto);
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    text-decoration: none;
    text-align: center;
    font-weight: 600;

    transition: background-color 0.15s ease,
                border-color 0.15s ease,
                color 0.15s ease,
                transform 0.15s ease,
                box-shadow 0.15s ease;
}

.links a:hover {
    background-color: var(--cor-card);
    border-color: var(--cor-destaque);
    color: var(--cor-destaque);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.15);
}

.links a:focus-visible {
    outline: 2px solid var(--cor-destaque);
    outline-offset: 2px;
}

/* ---------- Foto de perfil circular ---------- */
.perfil img {
    width: 140px;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid var(--cor-card);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

/* ---------- Seção de projetos (card externo) ---------- */
.projetos {
    background-color: var(--cor-card);
    padding: var(--espaco-grande);
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

    display: flex;
    flex-direction: column;
    gap: var(--espaco-medio);
}

/* ---------- Grid de cards de projeto ---------- */
.grid-projetos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1.5rem 1rem;
    grid-auto-rows: minmax(120px, auto);
}

.projeto-card {
    padding: var(--espaco-medio);
    background-color: var(--cor-fundo);
    border: 1px solid #e5e7eb;
    border-radius: 10px;

    transition: transform 0.15s ease,
                box-shadow 0.15s ease,
                border-color 0.15s ease;
}

.projeto-card:hover {
    transform: translateY(-2px);
    border-color: var(--cor-destaque);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.1);
}

.projeto-card h3 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: var(--espaco-pequeno);
}

.projeto-card p {
    font-size: 0.875rem;
    color: var(--cor-texto-suave);
}

/* ---------- Card destaque (ocupa 2 colunas quando há espaço) ---------- */
.projeto-card.destaque {
    grid-column: span 2;
    background-color: var(--cor-card);
    border-color: var(--cor-destaque);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.1);
}

.badge {
    display: inline-block;
    align-self: flex-start;
    padding: 0.125rem 0.5rem;
    margin-bottom: var(--espaco-pequeno);
    background-color: var(--cor-destaque);
    color: white;
    font-size: 0.75rem;
    font-weight: 600;
    border-radius: 999px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

/* ---------- DESKTOP (≥ 768px) ---------- */
@media (min-width: 768px) {
    main {
        max-width: 760px;
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
            "perfil   links"
            "projetos projetos";
    }

    .perfil {
        justify-content: center;
    }

    .perfil img {
        width: 160px;
    }

    h1 {
        font-size: 2rem;
    }
}

/* ---------- DARK MODE ---------- */
@media (prefers-color-scheme: dark) {
    :root {
        --cor-fundo: #0f172a;
        --cor-texto: #f1f5f9;
        --cor-texto-suave: #94a3b8;
        --cor-card: #1e293b;
    }

    .links a {
        border-color: #334155;
    }
}
```

---

# Anexo B — Glossário de conceitos

## HTML

| Termo | Definição |
|-------|-----------|
| HTML semântico | Tags que descrevem significado (`<main>`, `<section>`), não aparência |
| Meta viewport | Tag que controla como o celular renderiza a largura |
| `alt` | Texto alternativo de imagem, essencial para acessibilidade |
| Hierarquia de títulos | `<h1>` único → `<h2>` → `<h3>`... |
| `mailto:` | Prefixo de link que abre cliente de e-mail |

## CSS — fundamentos

| Termo | Definição |
|-------|-----------|
| Reset | Zerar defaults inconsistentes entre navegadores |
| `:root` | Pseudo-classe que casa com `<html>`, usada para variáveis |
| Custom property (variável CSS) | `--nome: valor` em `:root`, lida com `var(--nome)` |
| `rem` | Unidade relativa à fonte do `<html>` (padrão 1rem = 16px) |
| `box-sizing: border-box` | `width` passa a incluir padding e borda |
| Especificidade | Regras de prioridade entre seletores CSS conflitantes |
| Seletor descendente | `.parent .child` aplica só dentro do parent |

## CSS — layout

| Termo | Definição |
|-------|-----------|
| Flexbox | Sistema 1D para distribuir elementos em linha ou coluna |
| Container flex | Elemento com `display: flex` |
| Eixo principal vs cruzado | Depende de `flex-direction` |
| `gap` | Espaçamento entre filhos de um flex container |
| Fluid design | `width: 100%` combinado com `max-width` |
| `vh` | Unidade = % da altura da viewport |
| `flex: 1` | Atalho para `flex-grow: 1; flex-shrink: 1; flex-basis: 0` |

## CSS — imagens

| Termo | Definição |
|-------|-----------|
| `aspect-ratio` | Força proporção da caixa (`1 / 1` = quadrado) |
| `object-fit: cover` | Recorta imagem para preencher caixa sem distorcer |
| `border-radius: 50%` | Vira círculo (só se caixa for quadrada) |

## CSS — responsividade

| Termo | Definição |
|-------|-----------|
| Media query | `@media (condição) { regras }` |
| Mobile-first | Base = mobile, `@media (min-width)` adiciona desktop |
| Breakpoint | Largura onde o layout muda |
| `prefers-color-scheme` | Media query que detecta modo escuro do SO |

## CSS — Grid

| Termo | Definição |
|-------|-----------|
| CSS Grid | Sistema de layout 2D (linhas + colunas simultâneas) |
| Grid container | Elemento com `display: grid` |
| Grid item | Filho direto de um grid container |
| Grid line | Linha invisível entre células, numerada de 1 a N+1 |
| `grid-template-columns` | Define quantas colunas e suas larguras |
| `grid-template-rows` | Define linhas **explicitamente** |
| `grid-auto-rows` | Define tamanho de linhas **automáticas** |
| `fr` | "Fração" do espaço livre (gap-aware) |
| `repeat(N, padrão)` | Atalho para repetir colunas/linhas |
| `minmax(min, max)` | Define limites de tamanho |
| `auto-fit` | Cria quantas colunas couberem, estica para preencher |
| `auto-fill` | Cria quantas couberem, mas mantém células vazias |
| `grid-column: span N` | Item ocupa N colunas a partir de onde estaria |
| `grid-row: span N` | Equivalente vertical |
| `grid-column: 1 / -1` | Da primeira à última coluna |
| `grid-template-areas` | Layout desenhado com strings de nomes |
| `grid-area: <nome>` | Atribui filho a uma área nomeada |
| `.` em areas | Célula vazia |

## CSS — interatividade

| Termo | Definição |
|-------|-----------|
| `:hover` | Pseudo-classe ativa quando o cursor está em cima |
| `:focus-visible` | Foco visível em navegação por teclado |
| `transition` | Anima a mudança entre estados |
| `transform` | Propriedade performática (GPU) para mover/escalar |

## Git

| Termo | Definição |
|-------|-----------|
| Repositório | Pasta com `.git/` rastreando histórico |
| Staging area | Área intermediária entre arquivo modificado e commit |
| Commit | Snapshot do estado do código em um momento |
| Hash | Identificador único do commit (SHA-1) |
| Branch | Linha de desenvolvimento (padrão moderno: `main`) |
| Remote | Apelido para URL de repo remoto (padrão: `origin`) |
| `push` | Enviar commits locais para o remote |

## GitHub Pages

| Termo | Definição |
|-------|-----------|
| Site de usuário | Repo `<user>.github.io` → URL `https://<user>.github.io/`, ativa sozinho |
| Site de projeto | Qualquer outro repo → URL `https://<user>.github.io/<repo>/` |
| Build status | `building` → `built` quando pronto |
| CDN | Rede de servidores que cacheia o site globalmente (Fastly) |

---

# Anexo C — Comandos úteis

## Atualizar a página (ciclo padrão)

```bash
cd ~/projetos/perfil-web
# (edita arquivos)
git status                              # ver o que mudou
git add .                               # palco
git commit -m "Atualizar bio"           # registrar
git push                                # mandar pro GitHub
```

GitHub Pages rebuilda em ~30-60s.

## Ver status do site

```bash
nix-shell -p gh --run "gh api repos/wenceslaubaltor/wenceslaubaltor.github.io/pages --jq '.status'"
```

## Testar localmente

Abrir no navegador:
```bash
xdg-open ~/projetos/perfil-web/index.html
```

## Git: comandos do dia a dia

| Comando | Função |
|---------|--------|
| `git status` | Estado dos arquivos |
| `git diff` | O que foi mudado nos arquivos modificados |
| `git diff --staged` | O que está em staging |
| `git log --oneline` | Histórico resumido |
| `git log --oneline -n 5` | Últimos 5 commits |
| `git checkout -- arquivo` | Desfaz mudanças não-staged |
| `git reset HEAD arquivo` | Tira arquivo do staging |

## GitHub CLI: comandos úteis

| Comando | Função |
|---------|--------|
| `gh repo view --web` | Abre o repo no navegador |
| `gh repo create <nome> --public` | Cria repo |
| `gh repo rename <novo-nome>` | Renomeia repo (atualiza remote local) |
| `gh auth status` | Confirma quem está logado |

## Testar dark mode no Chrome DevTools

1. F12
2. Ctrl+Shift+P
3. Digite "Rendering" → "Show Rendering"
4. Em "Emulate CSS media feature prefers-color-scheme" → escolha **dark**

## Testar responsividade

1. F12
2. Ctrl+Shift+M (toggle device toolbar)
3. Escolha um perfil (iPhone SE, iPad, etc.) ou puxe as bordas

---

# Próximos passos

## Refinamentos no projeto atual

- Substituir cores hardcoded restantes (`#e5e7eb`, `#334155`) por variáveis `--cor-borda`
- Extrair estilo de card duplicado em `.perfil` e `.links` para uma classe `.card`
- Adicionar `<meta name="description">` para SEO
- Adicionar uma seção "Sobre" mais longa abaixo dos links

## Tópicos para estudar

| Tópico | O que ganha |
|--------|-------------|
| **CSS Grid** | Layouts em 2D (linhas + colunas simultâneas). Próximo passo natural depois do Flexbox |
| **CSS clamp(), min(), max()** | Tipografia fluida sem precisar de tantas media queries |
| **Container queries** | Adapta layout pelo tamanho do container, não da viewport |
| **CSS animations (`@keyframes`)** | Animações elaboradas além de `transition` |
| **Acessibilidade ARIA** | Atributos extras para leitores de tela em UI complexa |
| **JavaScript** | Interatividade (forms, scroll animations, fetch de API) |

## Recursos recomendados

- **MDN Web Docs** (https://developer.mozilla.org/) — referência canônica de HTML/CSS
- **Flexbox Froggy** (https://flexboxfroggy.com/) — jogo para fixar Flexbox
- **Grid Garden** (https://cssgridgarden.com/) — mesmo conceito para CSS Grid
- **Can I Use** (https://caniuse.com/) — checa compatibilidade de features CSS

## Possíveis evoluções da página

- **Domínio próprio:** R$ 40/ano em registro.br por `.com.br`, aponta para GitHub Pages
- **Adicionar projetos:** seção de cards listando seus repos do GitHub
- **Botão de tema:** toggle manual de light/dark (precisa JavaScript + localStorage)
- **Formulário de contato:** com serviços como Formspree (sem backend)
- **Análise:** GoatCounter ou Plausible (privacy-friendly, sem cookies)
