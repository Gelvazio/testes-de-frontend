/**
 * Dados dos alunos e dos projetos publicados no GitHub (fonte única da página).
 * Levantados pela API do GitHub em 2026-10-15. Para incluir um aluno, basta
 * acrescentar um objeto em ALUNOS — o resto da página se monta sozinho.
 */

const DATA_LEVANTAMENTO = '15/10/2026';

const ALUNOS = [
  {
    usuario: 'marialmmarcelino-blip',
    resumo: 'Calculadora de IMC e formulário de contato do Frontend Mentor.',
    projetos: [
      {
        nome: 'cal',
        linguagem: 'HTML',
        descricao:
          'Calculadora de IMC: o usuário informa nome, altura e peso e o JavaScript ' +
          'calcula o índice. Versão organizada na pasta calculadora/ (HTML, CSS e JS ' +
          'separados).',
      },
      {
        nome: 'calculadora-imc',
        linguagem: 'CSS',
        descricao:
          'Primeira versão da calculadora de IMC, com index.html, style.css e script.js.',
      },
      {
        nome: 'ss',
        linguagem: 'HTML',
        descricao:
          'Formulário de contato (desafio "Contact form" do Frontend Mentor): nome, ' +
          'sobrenome, e-mail, tipo de consulta, mensagem e consentimento. Traz também ' +
          'os arquivos do desafio (fontes Karla e imagens de referência).',
      },
      {
        nome: 'site.html',
        linguagem: 'HTML',
        descricao: 'Cópia isolada da página "Contact Form.html" do formulário de contato.',
      },
      {
        nome: 'meu-primeiro-site',
        linguagem: 'HTML',
        eFork: true,
        temSite: true,
        descricao:
          'Página de boas-vindas da atividade prática de versionamento com GitHub, ' +
          'publicada no GitHub Pages.',
      },
      {
        nome: 'meu-site',
        descricao: 'Repositório iniciado só com README e licença (sem página ainda).',
      },
      { nome: 's', estaVazio: true, descricao: 'Repositório criado, mas ainda vazio.' },
      { nome: 'site', estaVazio: true, descricao: 'Repositório criado, mas ainda vazio.' },
      { nome: 'sitehtlm', estaVazio: true, descricao: 'Repositório criado, mas ainda vazio.' },
    ],
  },
  {
    usuario: 'marcosvpaz-svg',
    resumo: 'Loja virtual de camisas de futebol, landing page em grid e JavaScript.',
    projetos: [
      {
        nome: 'assets',
        linguagem: 'CSS',
        descricao:
          'Protótipo de loja virtual (e-commerce) em três versões: assets/ com o HTML ' +
          'comentado explicando cada tag; projetoFE, loja de roupas com categorias e ' +
          'carrinho; e projetoFE2, a "FIFA STORE" de camisas de times (Seleções, Clubes, ' +
          'Retrô, Treino e Goleiros) com carrinho em JavaScript.',
      },
      {
        nome: 'grid-landing-page',
        linguagem: 'CSS',
        descricao:
          'Desafio "Grid landing page" do Frontend Mentor: página de uma ONG de educação ' +
          '("A classroom for every child") com números de impacto montados em CSS Grid.',
      },
      {
        nome: 'calculadora-imc',
        linguagem: 'CSS',
        descricao:
          'Calculadora de IMC com nome, altura e peso; mostra o resultado na própria página.',
      },
      {
        nome: 'arquivos',
        linguagem: 'CSS',
        descricao:
          'Introdução ao JavaScript: botão "Dark Mode" que alterna a página entre tema ' +
          'claro e escuro (pasta darkmode/).',
      },
    ],
  },
  {
    usuario: 'carlosdanielramosleandro43-ctrl',
    resumo: 'Pet shops com Tailwind, landing de hotel, IMC, lâmpada e dark mode.',
    projetos: [
      {
        nome: 'grid-landingipage',
        linguagem: 'CSS',
        descricao:
          'Landing page em grid do Frontend Mentor adaptada para o hotel "Maison Soleil": ' +
          'painel do hóspede com reserva, check-in, clima do dia e menu de navegação.',
      },
      {
        nome: 'Fontend-Mentor',
        linguagem: 'HTML',
        descricao: 'Mesma página do hotel "Maison Soleil" (versão anterior do desafio).',
      },
      {
        nome: 'calculadoraIMC',
        linguagem: 'CSS',
        descricao: 'Calculadora de IMC com nome, altura e peso, em HTML, CSS e JavaScript.',
      },
      {
        nome: 'repository_html',
        linguagem: 'JavaScript',
        descricao:
          'Exercícios de JavaScript: botão "Dark Mode" (pasta JS/) e lâmpada que liga e ' +
          'desliga (pasta lampada/).',
      },
      {
        nome: 'repository.html',
        linguagem: 'JavaScript',
        descricao: 'Mesmos exercícios de dark mode e lâmpada, com README.',
      },
      {
        nome: 'meu-pet-shop',
        linguagem: 'HTML',
        temSite: true,
        descricao:
          'Landing page do "PetShop Amigo Fiel" feita com Tailwind CSS: chamada para ' +
          'agendamento e cards de serviços (banho e hidratação, tosa e atendimento ' +
          'veterinário). Publicada no GitHub Pages.',
      },
      {
        nome: 'petshop',
        linguagem: 'HTML',
        descricao:
          'Primeira versão do pet shop "Universo Pet" (fundamentos de UI/UX) com Tailwind.',
      },
      {
        nome: 'meu-site',
        linguagem: 'HTML',
        temSite: true,
        descricao: 'Página de boas-vindas à unidade curricular, com imagem e logo do GitHub.',
      },
      {
        nome: 'meu-novo-site',
        linguagem: 'HTML',
        temSite: true,
        descricao: 'Página da atividade prática de versionamento com GitHub.',
      },
      {
        nome: 'mue-primeiro-site',
        linguagem: 'HTML',
        temSite: true,
        descricao: 'Outra cópia da página da atividade de versionamento com GitHub.',
      },
      {
        nome: 'front_e_upload',
        eFork: true,
        descricao:
          'Cópia (fork) de um projeto com backend em NestJS (TypeScript) para upload e ' +
          'armazenamento de arquivos.',
      },
      {
        nome: 'meu-primeiro-site',
        estaVazio: true,
        descricao: 'Repositório criado só com o arquivo de configuração do Git.',
      },
      { nome: 'FrontendMentor', estaVazio: true, descricao: 'Repositório criado, mas vazio.' },
      { nome: 'Frontend-Mentor', estaVazio: true, descricao: 'Repositório criado, mas vazio.' },
    ],
  },
  {
    usuario: 'marcosxz447l',
    resumo: 'Consulta da cota de enchente de Rio do Sul, desafios Frontend Mentor e JS.',
    projetos: [
      {
        nome: 'Enchente-em-riodosul',
        linguagem: 'HTML',
        temSite: true,
        descricao:
          'Consulta da cota de enchente de Rio do Sul/SC: busca a rua, mostra a cota ' +
          'mínima e máxima e o mapa do local, com opção de idioma (PT/ES). Página ' +
          'dinâmica com template reativo, publicada no GitHub Pages.',
      },
      {
        nome: 'news-homepage-main',
        linguagem: 'HTML',
        descricao:
          'Desafio "News homepage" do Frontend Mentor: portal de notícias de tecnologia ' +
          '(Web 3.0) com destaques, lista "New", cards numerados e menu mobile.',
      },
      {
        nome: 'situacao-aprendizagem-main',
        linguagem: 'HTML',
        descricao:
          'Situação de aprendizagem: desafio "Newsletter sign-up form with success ' +
          'message" do Frontend Mentor, com validação do e-mail e tela de sucesso.',
      },
      {
        nome: 'Calculadora-IMC',
        linguagem: 'CSS',
        descricao: 'Calculadora de IMC com nome, altura e peso, em HTML, CSS e JavaScript.',
      },
      {
        nome: 'JavaScript',
        linguagem: 'JavaScript',
        descricao:
          'Lâmpada interativa: botões ligar e desligar trocam a imagem da lâmpada ' +
          '(incluindo o estado "quebrada").',
      },
      {
        nome: 'DarkMode',
        linguagem: 'CSS',
        descricao: 'Introdução ao JavaScript: botão que alterna entre tema claro e escuro.',
      },
      {
        nome: '-meus',
        linguagem: 'HTML',
        temSite: true,
        descricao:
          'Site institucional sobre o SENAI feito com HTML e CSS: objetivo da instituição, ' +
          'diretoria, unidades e política de privacidade.',
      },
      {
        nome: 'petshop',
        linguagem: 'HTML',
        descricao: 'Landing page do pet shop "Universo Pet" com Tailwind CSS.',
      },
      {
        nome: 'meu-site',
        linguagem: 'HTML',
        temSite: true,
        descricao: 'Página de boas-vindas à unidade curricular, com fotos.',
      },
      {
        nome: 'meu-primeiro-site',
        linguagem: 'HTML',
        temSite: true,
        descricao: 'Página da atividade prática de versionamento com GitHub.',
      },
      { nome: 'lampada', estaVazio: true, descricao: 'Repositório criado, mas vazio.' },
      { nome: 'Lampada-', estaVazio: true, descricao: 'Repositório criado, mas vazio.' },
    ],
  },
  {
    usuario: 'jhoinymarlizardi-sudo',
    resumo: 'Calculadora de IMC e formulário de newsletter do Frontend Mentor.',
    projetos: [
      {
        nome: 'Calculadora-IMC',
        linguagem: 'CSS',
        descricao: 'Calculadora de IMC com nome, altura e peso, em HTML, CSS e JavaScript.',
      },
      {
        nome: 'situa-o-de-aprendizagem',
        linguagem: 'CSS',
        descricao:
          'Situação de aprendizagem: desafio "Newsletter sign-up form with success ' +
          'message" do Frontend Mentor (versão mais recente, com CSS próprio).',
      },
      {
        nome: 'situacao-aprendizagem',
        linguagem: 'HTML',
        descricao:
          'Primeira versão do formulário de newsletter da situação de aprendizagem, ' +
          'com os arquivos e imagens de referência do desafio.',
      },
    ],
  },
];
