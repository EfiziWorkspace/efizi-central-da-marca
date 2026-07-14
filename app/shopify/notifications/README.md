# E-mails transacionais Efizi — guia de instalação

Kit de 8 notificações transacionais da Shopify com o layout da marca 2026.

## Como instalar (cada um é manual)

A Shopify **não tem API** pra publicar notificação. Pra cada template:

1. Admin Shopify → **Configurações → Notificações**
2. Abra a notificação correspondente (tabela abaixo) → **Editar código**
3. **Apague o conteúdo atual e cole o arquivo `.html` inteiro**
4. Salve. Use **"Enviar teste"** pra ver na sua caixa de entrada.

O link de descadastro e o rodapé legal obrigatório a Shopify adiciona sozinha.

## Mapa: arquivo → notificação no admin

| Arquivo | Notificação (admin, PT-BR) | Trilha |
|---|---|---|
| `pedido-confirmado.html` | Confirmação de pedido | passo 1 |
| `pedido-enviado.html` | Confirmação de envio | passo 2 |
| `saiu-pra-entrega.html` | Fora para entrega | passo 3 |
| `entregue.html` | Pedido entregue | passo 4 |
| `carrinho-abandonado.html` | Checkout abandonado | — |
| `cancelado.html` | Pedido cancelado | — |
| `reembolso.html` | Reembolso | — |
| `ativacao-conta.html` | Ativação da conta do cliente | — |
| `pagamento-pendente.html` | Pedido aguardando pagamento / Lembrete de pagamento | — |
| `pagamento-confirmado.html` | Pagamento pendente realizado *(PIX/boleto confirmado)* | passo 1 |
| `erro-pagamento.html` | Erro no pagamento | — |
| `erro-pagamento-pendente.html` | Erro no pagamento pendente | — |
| `draft-order-proposta.html` | Fatura de pedido rascunho | — |
| `redefinicao-senha.html` | Redefinição de senha da conta do cliente | — |
| `contato-cliente.html` | Contato com o cliente | — |

> Os arquivos `*-preview.html` e `galeria*.html` são só pra visualização (dados fictícios). **Não** cole esses no admin — cole só os da tabela acima.

## Trilha de progresso (imagens já hospedadas)

As 4 imagens da trilha já estão no **Files** da loja (CDN), embutidas nos templates:

- `tracker-confirmado.png` · `tracker-enviado.png` · `tracker-saiu.png` · `tracker-entregue.png`
- Base: `https://cdn.shopify.com/s/files/1/0593/9894/6914/files/tracker-*.png?v=1783120169`
- Fontes editáveis (SVG→PNG 2x): pasta `assets/` + gerador no histórico

"Fora para entrega" e "Pedido entregue" só **disparam** se o app de rastreio empurrar os eventos `OUT_FOR_DELIVERY` / `DELIVERED` pra Shopify.

## Padrões da marca aplicados

- Fundo creme `#F5F3EF`, card branco, logo laranja, Manrope, sentence case, body ~18px (público 40+)
- Uma ênfase (laranja `#FF4000`); verde só em economia; amarelo só no selo preto do PIX
- Slogan B2C no rodapé; **nome da transportadora oculto** em todos
- Bloco de ajuda com WhatsApp + "Ligar pra gente" no rodapé de cada e-mail

## Atenção — variáveis pra conferir num teste

Estes usam variáveis menos documentadas; confira uma vez com "Enviar teste" e ajuste se preciso:

- `reembolso.html` — valor total usa `{{ amount | money }}`. Se vier zerado, troque por `{{ refund_amount | money }}`.
- `draft-order-proposta.html` — botão usa `{{ url }}` (link da fatura). Se não abrir a proposta, veja o nome da variável do link no template padrão de Fatura de pedido rascunho.
- `pagamento-pendente.html` — o código PIX / boleto vem do gateway, não da notificação; aqui o botão leva pra `{{ order_status_url }}`. Cole na notificação de pagamento pendente/lembrete que sua loja usa.
- `contato-cliente.html` — o corpo é `{{ custom_message }}` (o que a equipe digita ao clicar "Contatar cliente").

## Kit completo: 12 templates

8 do kit inicial + 4 desta leva (pagamento pendente, proposta, senha, contato). Se quiser expandir depois: Boas-vindas da conta, Atualização de envio, Cartão-presente.
