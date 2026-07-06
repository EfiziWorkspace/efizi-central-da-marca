# Efizi · Design System — Fundação de marca

> Handoff para os times de **App** e **BI**. Este pacote é a **fonte da verdade visual** da Efizi (cores, tipografia, espaçamento, raios, sombra, paleta de gráficos). Use-o para que loja, apps e dashboards pareçam **a mesma marca**.

Substitui o antigo `colors_and_type.css` (estava em oklch e na marca pré-reposicionamento). Aqui é tudo **hex canônico do brandbook 2026**.

---

## Como o sistema é organizado

```
Camada 0 — FUNDAÇÃO (este pacote)        ← tokens compartilhados por TODOS
   ├─ App / Dashboard (React/Next)       ← vocês constroem os componentes daqui
   ├─ BI (gráficos, relatórios)          ← usa a paleta de gráficos
   └─ Loja (Shopify)                     ← já construída (../shopify)
```

Componentes **não** se compartilham entre stacks diferentes (um botão React não roda no Liquid da loja). O que se compartilha são os **tokens** — as cores, fontes e medidas abaixo. Cada time monta seus componentes em cima deles.

---

## Arquivos deste pacote

| Arquivo | Para quem | O que é |
|---|---|---|
| `efizi-tokens.css` | App / qualquer stack | CSS variables. Aliases no padrão **shadcn** (`--primary`, `--card`, `--sidebar-*`, `--chart-*`, `--radius`) + modo escuro. |
| `efizi-tokens.ts` | App React/Next | Objeto tipado pra importar direto no código. |
| `efizi-tokens.json` | BI / ferramentas / build | Tokens crus, agnósticos de framework. |
| `efizi-app.css` | App React/Next | **Kit de componentes** de dashboard (botões, campos, tabela, badges, sidebar, KPIs, alertas) consumindo os tokens. Classes `.eui-*`, funciona com ou sem Tailwind. |
| `app-components.html` | App | Folha visual de referência do kit (abra no navegador; render em `preview/app-light.png` e `app-dark.png`). |
| `README.md` | Todos | Este guia. |

---

## Regras de marca (valem em toda superfície)

**Cores — 3 fazem 95%:**

| Cor | Hex | Uso |
|---|---|---|
| **Orange** | `#FF4000` | Protagonista: botões primários, ênfase, marca. ~70%. |
| **Pulse** | `#FFD500` | Só o "grito": selo de oferta/destaque. ~20%. **Nunca como fundo de marca.** |
| **Ink** | `#0A0A0A` | Texto e fundos sóbrios. ~10%. |
| Cream | `#F5F3EF` | Respiro, fundos institucionais. |
| Teal | `#228474` | **Só UI digital**: link, foco, PIX. Nunca em anúncio/papelaria. |

> **Regra de ouro: UMA cor de ênfase por peça.** Laranja para a ação; se tiver selo, o amarelo é dele; teal fica só pra link/foco. Num dashboard, isso significa: o botão primário é laranja, e você não pinta a tela toda de laranja.

**Tipografia:** Manrope (pesos 400–800). Sentence case (não Title Case). Tracking negativo **só** em títulos display; corpo sempre 0. **Corpo mínimo 18px** — boa parte do público tem 40+.

**Raio:** apps usam **8px** base (`--radius`). **Não use** cantos totalmente quadrados nem excessivamente arredondados fora de pills/avatares.

**Não faça:** ❌ inventar um segundo laranja ❌ amarelo como cor de texto/fundo grande ❌ teal fora de link/foco ❌ gradiente vibrando sem motivo ❌ sombra pesada.

---

## Como usar no App (React / Next)

**Opção A — shadcn / Tailwind (recomendado se já usam):**
Cole o conteúdo de `efizi-tokens.css` no lugar do bloco `:root` (e `.dark`) do seu `globals.css`. Os nomes (`--background`, `--primary`, `--card`, `--border`, `--ring`, `--sidebar-*`, `--chart-1..5`, `--radius`) já são os que o shadcn espera — os componentes existentes passam a usar a marca Efizi sem tocar em mais nada.

**Kit de componentes pronto:** o `efizi-app.css` já traz botões, campos, tabela, badges, sidebar, KPIs e alertas prontos (classes `.eui-*`) — veja o `app-components.html` pra referência visual (claro e escuro). Dá pra usar as classes direto, ou usá-las como espec pra virar componentes React/shadcn.

**Opção B — React sem Tailwind:**
Importe o CSS uma vez no root e use as variáveis:
```tsx
import "@/design-system/efizi-tokens.css";
<button style={{ background: "var(--primary)", color: "var(--primary-foreground)",
                 borderRadius: "var(--radius)" }}>Salvar</button>
```
Ou importe o objeto tipado:
```tsx
import { efizi } from "@/design-system/efizi-tokens";
<span style={{ color: efizi.color.brand.orange }} />
```

**Modo escuro:** adicione a classe `.dark` no `<html>`/`<body>`. Os aliases já trocam.

---

## Como usar no BI (gráficos)

Use a paleta de gráficos (`chart` no JSON / `--efizi-chart-*` no CSS):

- **Categórica** (séries distintas): `#FF4000, #228474, #334155, #2F6DB4, #FE734F, #C99A00, #7A5AA6, #6B6660`
- **Sequencial** (intensidade/heatmap): `#FFE0D4 → #FFB08C → #FF7A45 → #FF4000 → #B82D00`
- **Divergente** (negativo↔positivo): `#C4361B ↔ #F5F3EF ↔ #228474`

> O amarelo Pulse **não** entra como cor de série (some no branco). Use só pra destacar 1 número. A maioria das ferramentas de BI (Power BI, Metabase, Looker, etc.) aceita um tema em cores hex ou JSON — é só colar esta lista.

---

## Referências visuais

- **Kit da Loja (Shopify)** já construído: `../shopify/efizi-ds.css` + folha de componentes `../shopify/components.html`. Serve de exemplo de "como fica na prática" (botões, cards, preço, formulários).
- **DNA / brandbook completo:** `../dna/`.

---

## Dúvidas / evolução

Quando o time disser qual stack usa de fato (ex.: shadcn, CSS Modules, styled-components, ou a ferramenta de BI), dá pra gerar o **preset exato** (config Tailwind, tema de BI pronto, etc.). Estes tokens são a base — a partir daqui é só plugar.
