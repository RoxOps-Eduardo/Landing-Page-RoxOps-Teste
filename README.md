# Landing Page RoxOps — Teste

Landing page institucional da **RoxOps** (automação e IA para operação comercial).

## O que é

Site estático de uma página, sem build step. Abre direto no navegador.

```
index.html    estrutura e conteúdo
styles.css    tokens de design e layout
script.js     esteira animada + revelação em rolagem
```

## Rodar local

```bash
python -m http.server 4321
```

Depois abra `http://localhost:4321`.

## Deploy

Hospedado na Vercel como site estático. Todo push na `main` gera um deploy novo.

## Direção de design

Prancha técnica em violeta — a marca é "Rox" (roxo) + "Ops" (operação), e o
slogan da empresa é *"Onde a escala do seu negócio começa na estrutura"*. A
página é montada como um desenho de esquema: régua fina, marcações em
monoespaçada, hierarquia rígida.

- **Tipografia** — Bricolage Grotesque (display), Instrument Sans (texto),
  JetBrains Mono (marcações técnicas).
- **Paleta** — papel lilás frio `#F1EFF6`, tinta `#14121C`, violeta `#5B21D6`,
  fundo escuro `#17122A`.
- **Elemento de assinatura** — a esteira animada do hero: um pulso percorre os
  cinco estágios pelos quais o lead passa, acendendo cada nó na passagem. É o
  produto da RoxOps desenhado literalmente.

Acessibilidade: foco visível, `prefers-reduced-motion` respeitado (a esteira
mostra o estado final em vez de animar), sem rolagem horizontal em nenhuma
largura.

## Pendências antes de virar site oficial

- [ ] Confirmar o e-mail de contato (hoje aponta para `contato@roxops.com.br`).
- [ ] Autorização do cliente citado na seção "Em produção" para uso do nome real
      — hoje o case está anonimizado de propósito.
- [ ] Repor as páginas de Política de Privacidade e Termos de Uso e linkar no
      rodapé.
- [ ] Definir métricas reais para exibir (a página evita números inventados).
