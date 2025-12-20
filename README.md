# Portfólio Pessoal com Next.js e Animações

Este é um projeto de portfólio pessoal desenvolvido com Next.js, TypeScript e Tailwind CSS, focado em apresentar minhas habilidades, projetos e informações de contato de uma forma moderna e animada.

## ✨ Funcionalidades

O projeto é uma single-page application (SPA) com as seguintes seções:

*   **Hero**: Seção de boas-vindas com uma foto de perfil, título animado e uma breve introdução.
*   **Sobre (Perfil)**: Uma descrição mais detalhada sobre minha trajetória e paixão por tecnologia.
*   **Habilidades (Skills)**: Exibição das tecnologias e ferramentas com as quais tenho experiência, apresentadas em um grid com ícones.
*   **Projetos**: Uma galeria de projetos com cards interativos, cada um contendo título, descrição, tags de tecnologia, e links para o repositório no GitHub e para a demonstração ao vivo.
*   **Contato**: Um formulário de contato funcional para que visitantes possam enviar mensagens.

## 🚀 Tecnologias Utilizadas

*   **Framework**: [Next.js](https://nextjs.org/) 15+ (com App Router)
*   **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
*   **Estilização**: [Tailwind CSS](https://tailwindcss.com/)
*   **Animações**:
    *   [Motion One](https://motion.dev/) para animações de texto e elementos.
    *   [Framer Motion](https://www.framer.com/motion/) para animações de hover nos cards de projeto.
*   **Ícones**: [React Icons](https://react-icons.github.io/react-icons/)
*   **Formulário de Contato**: API Route do Next.js para backend simplificado.
*   **SEO**: Metadados otimizados para melhor ranqueamento no Google, incluindo `sitemap.xml` e `robots.txt`.

## 🛠️ Como Executar o Projeto

Siga os passos abaixo para rodar o projeto em seu ambiente local.

### Pré-requisitos

*   Node.js (versão 18 ou superior)
*   npm ou yarn

### Instalação

1.  Clone o repositório (substitua com seu link do GitHub):
    ```bash
    git clone https://github.com/LEBEATO/portfolionext.git
    ```

2.  Navegue até o diretório do projeto:
    ```bash
    cd portfolionext
    ```

3.  Instale as dependências:
    ```bash
    npm install
    ```

### Rodando o Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento, execute o comando:

```bash
npm run dev
```

Abra http://localhost:3000 no seu navegador para ver o resultado.

## 📈 Otimizações de SEO

Foram implementadas várias técnicas de SEO para melhorar a visibilidade do portfólio nos mecanismos de busca:

*   **Metadados Dinâmicos**: Títulos e descrições otimizados para cada página (usando a API de Metadata do Next.js).
*   **Open Graph e Twitter Cards**: Tags meta para garantir uma boa aparência ao compartilhar o link em redes sociais.
*   **Sitemap**: Arquivo `sitemap.xml` para ajudar os buscadores a indexar todas as seções importantes.
*   **Robots.txt**: Arquivo `robots.txt` para guiar os robôs de busca.