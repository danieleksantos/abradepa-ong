<div align="center">
<img src="/logo-abradepa.png" alt="ABRADEPA Logo" width="120"/>

ABRADEPA - Site Institucional & Administrativo
<p>
<strong>Plataforma institucional completa para assistência e defesa de pacientes, integrada com Headless CMS para autonomia total da ONG.</strong>
</p>

<p>
<img src="https://img.shields.io/badge/Next.js_16-black?style=for-the-badge&logo=next.js" alt="Next.js">
<img src="https://img.shields.io/badge/React_19-blue?style=for-the-badge&logo=react" alt="React">
<img src="https://img.shields.io/badge/Sanity_v4-f03e2f?style=for-the-badge&logo=sanity&logoColor=white" alt="Sanity">
<img src="https://img.shields.io/badge/Tailwind_4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind">
</p>
</div>

## Deploy
O ecossistema está publicado e operacional nos links abaixo:
- Site Institucional: https://abradepa-ong.vercel.app/
- Painel Administrativo (Studio): https://abradepa-ong.vercel.app/studio
- Hospedagem: Vercel (Frontend).
- Banco de Dados & CMS: Sanity.io (Cloud).

## Sobre o Projeto
O novo site da ABRADEPA foi desenvolvido para centralizar as informações da associação, oferecendo uma interface moderna para apresentação da ONG possiblitando atração de novos voluntários e parcerias. Além disso esse projeto conta com um painel administrativo intuitivo para a equipe interna gerenciar entradas estratégicas de dados mesmo após entrega.

### Autonomia via Headless CMS
A principal premissa do projeto foi a independência da ONG. Como a hospedagem inicial utiliza camadas gratuitas (Free Tier) que não suportariam um backend personalizado online de forma ininterrupta, optou-se pela integração com o Sanity CMS.

Esta arquitetura permite:
- Disponibilidade: O banco de dados e a interface de edição ficam hospedados na infraestrutura global do Sanity, garantindo 100% de uptime sem custos de servidor backend.
- Gestão Facilitada: A equipe da ABRADEPA pode gerenciar o Blog, a Loja Virtual e os Autores sem qualquer conhecimento técnico ou necessidade de mexer no código.
  - Para isso foi fornecido um guia de intruções detalhadas com prints do passo a passo para cada interação com a plataforma.   
- Performance: O conteúdo é entregue via CDN, tornando o carregamento do site institucional extremamente veloz.

## Tecnologias Utilizadas
### Core
- Next.js 16 (App Router): Framework de ponta para renderização híbrida.
- React 19: Utilização das últimas features de componentes e performance.
- TypeScript: Tipagem estática para maior segurança e manutenção do código.

### Gestão de Conteúdo (Sanity Stack)
- Sanity Studio v4: Interface administrativa customizada embutida no projeto.
- @portabletext/react: Renderização de conteúdo rico (texto, imagens, links) vindo do CMS.
- next-sanity: Integração otimizada para busca de dados e Live Preview.

### UI & UX
- Tailwind CSS 4: Estilização moderna e utilitária.
- Lucide Icons: Conjunto de ícones consistentes.
- Swiper.js 12: Sliders responsivos para as áreas de atuação da associação.


## Preview
<p align="center">Desktop Experience</p>
<p align="center"> 
<img src="https://github.com/user-attachments/assets/d140353b-84b6-4898-a264-9ce8bf7716fa" alt="Desktop Preview" width="700" /></p>
<p align="center">Mobile Experience (Responsive Design)
<p align="center">
  <img src="https://github.com/user-attachments/assets/0cf30aa4-4819-4df9-9e4a-bd2818537960" alt="Mobile" width="200" />
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://github.com/user-attachments/assets/cdb0de5d-c6a4-4cf0-9c6c-935a62a0eada" alt="Mobile Menu" width="200" />
</p>
<br />

<div align="center">
<p>Desenvolvido com foco em impacto social por <strong>Daniele K. Santos</strong></p>
</div>
