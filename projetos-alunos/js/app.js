/**
 * Monta os cards dos alunos e o modal com a explicação dos projetos.
 * Depende de ALUNOS e DATA_LEVANTAMENTO (js/dados-alunos.js).
 */

const URL_GITHUB = 'https://github.com/';
const SUFIXO_PAGES = '.github.io/';
const TAMANHO_AVATAR = 120;
const TEXTO_SEM_LINGUAGEM = 'Sem código';
const ROTULO_FORK = 'cópia (fork)';
const ROTULO_VAZIO = 'vazio';
const ROTULO_SITE = 'Abrir site';
const ROTULO_REPOSITORIO = 'Repositório';
const ROTULO_LOCAL = 'Acessar Localmente';
const PASTA_REPOSITORIOS = 'repositorios';

/**
 * Cria um elemento com classe e texto opcionais.
 * @param {string} tag - Nome da tag HTML.
 * @param {{classe?: string, texto?: string}} [opcoes] - Classe CSS e texto.
 * @returns {HTMLElement} Elemento criado.
 */
function criarElemento(tag, opcoes = {}) {
  const elemento = document.createElement(tag);
  if (opcoes.classe) elemento.className = opcoes.classe;
  if (opcoes.texto) elemento.textContent = opcoes.texto;
  return elemento;
}

/**
 * Cria um link que abre em nova aba.
 * @param {string} endereco - URL do link.
 * @param {string} texto - Texto exibido.
 * @param {string} classe - Classe CSS do link.
 * @returns {HTMLAnchorElement} Link criado.
 */
function criarLinkExterno(endereco, texto, classe) {
  const link = criarElemento('a', { classe, texto });
  link.href = endereco;
  link.target = '_blank';
  link.rel = 'noopener';
  return link;
}

/**
 * Monta a URL do avatar do aluno no GitHub.
 * @param {string} usuario - Nome de usuário no GitHub.
 * @returns {string} URL da imagem.
 */
function obterUrlAvatar(usuario) {
  return `${URL_GITHUB}${usuario}.png?size=${TAMANHO_AVATAR}`;
}

/**
 * Monta a URL do site publicado no GitHub Pages.
 * @param {string} usuario - Nome de usuário no GitHub.
 * @param {string} repositorio - Nome do repositório.
 * @returns {string} URL do site.
 */
function obterUrlPages(usuario, repositorio) {
  return `https://${usuario.toLowerCase()}${SUFIXO_PAGES}${repositorio}/`;
}

/**
 * Monta o endereço relativo da pasta do repositório baixado.
 * @param {string} usuario - Nome de usuário no GitHub.
 * @param {string} repositorio - Nome do repositório.
 * @returns {string} Caminho relativo da pasta local.
 */
function obterUrlLocal(usuario, repositorio) {
  const partes = [PASTA_REPOSITORIOS, usuario, repositorio].map(encodeURIComponent);
  return `${partes.join('/')}/`;
}

/**
 * Lista as linguagens distintas dos projetos do aluno.
 * @param {Array<{linguagem?: string}>} projetos - Projetos do aluno.
 * @returns {string[]} Linguagens sem repetição.
 */
function listarLinguagens(projetos) {
  const linguagens = projetos.map((projeto) => projeto.linguagem).filter(Boolean);
  return [...new Set(linguagens)];
}

/**
 * Conta os projetos que já têm conteúdo (não vazios).
 * @param {Array<{estaVazio?: boolean}>} projetos - Projetos do aluno.
 * @returns {number} Quantidade de projetos com conteúdo.
 */
function contarProjetosComConteudo(projetos) {
  return projetos.filter((projeto) => !projeto.estaVazio).length;
}

/**
 * Cria a lista de etiquetas (chips) com as linguagens.
 * @param {string[]} linguagens - Linguagens a exibir.
 * @returns {HTMLUListElement} Lista de etiquetas.
 */
function criarEtiquetasLinguagens(linguagens) {
  const lista = criarElemento('ul', { classe: 'etiquetas' });
  linguagens.forEach((linguagem) => {
    lista.append(criarElemento('li', { classe: 'etiqueta', texto: linguagem }));
  });
  return lista;
}

/**
 * Cria o card de um aluno; o clique abre o modal com os projetos.
 * @param {{usuario: string, resumo: string, projetos: object[]}} aluno - Aluno.
 * @param {(aluno: object) => void} aoAbrir - Função chamada ao clicar no card.
 * @returns {HTMLButtonElement} Card do aluno.
 */
function criarCardAluno(aluno, aoAbrir) {
  const card = criarElemento('button', { classe: 'cartao-aluno' });
  card.type = 'button';

  const avatar = criarElemento('img', { classe: 'cartao-aluno__avatar' });
  avatar.src = obterUrlAvatar(aluno.usuario);
  avatar.alt = `Avatar de ${aluno.usuario}`;
  avatar.loading = 'lazy';

  const total = aluno.projetos.length;
  const comConteudo = contarProjetosComConteudo(aluno.projetos);
  const contagem = `${total} repositórios · ${comConteudo} com conteúdo`;

  card.append(
    avatar,
    criarElemento('h2', { classe: 'cartao-aluno__usuario', texto: aluno.usuario }),
    criarElemento('p', { classe: 'cartao-aluno__contagem', texto: contagem }),
    criarElemento('p', { classe: 'cartao-aluno__resumo', texto: aluno.resumo }),
    criarEtiquetasLinguagens(listarLinguagens(aluno.projetos)),
  );
  card.addEventListener('click', () => aoAbrir(aluno));
  return card;
}

/**
 * Cria as marcações do projeto (linguagem, fork, vazio).
 * @param {{linguagem?: string, eFork?: boolean, estaVazio?: boolean}} projeto - Projeto.
 * @returns {HTMLUListElement} Lista de marcações.
 */
function criarMarcacoesProjeto(projeto) {
  const marcacoes = [projeto.linguagem || TEXTO_SEM_LINGUAGEM];
  if (projeto.eFork) marcacoes.push(ROTULO_FORK);
  if (projeto.estaVazio) marcacoes.push(ROTULO_VAZIO);
  return criarEtiquetasLinguagens(marcacoes);
}

/**
 * Cria os links do projeto (repositório e, se houver, o site publicado).
 * @param {string} usuario - Dono do repositório.
 * @param {{nome: string, temSite?: boolean}} projeto - Projeto.
 * @returns {HTMLDivElement} Bloco com os links.
 */
function criarLinksProjeto(usuario, projeto) {
  const links = criarElemento('div', { classe: 'item-projeto__links' });
  const urlRepositorio = `${URL_GITHUB}${usuario}/${projeto.nome}`;
  links.append(criarLinkExterno(urlRepositorio, ROTULO_REPOSITORIO, 'botao-link'));

  const estaBaixado = !projeto.eFork && !projeto.estaVazio;
  if (estaBaixado) {
    const urlLocal = obterUrlLocal(usuario, projeto.nome);
    links.append(criarLinkExterno(urlLocal, ROTULO_LOCAL, 'botao-link'));
  }

  if (!projeto.temSite) return links;

  const urlSite = obterUrlPages(usuario, projeto.nome);
  links.append(criarLinkExterno(urlSite, ROTULO_SITE, 'botao-link botao-link--destaque'));
  return links;
}

/**
 * Cria o item da lista de projetos do modal.
 * @param {string} usuario - Dono do repositório.
 * @param {object} projeto - Projeto a exibir.
 * @returns {HTMLLIElement} Item da lista.
 */
function criarItemProjeto(usuario, projeto) {
  const item = criarElemento('li', { classe: 'item-projeto' });
  if (projeto.estaVazio) item.classList.add('item-projeto--vazio');

  item.append(
    criarElemento('h3', { classe: 'item-projeto__nome', texto: projeto.nome }),
    criarMarcacoesProjeto(projeto),
    criarElemento('p', { classe: 'item-projeto__descricao', texto: projeto.descricao }),
    criarLinksProjeto(usuario, projeto),
  );
  return item;
}

/**
 * Cria o controlador do modal de projetos.
 * @param {HTMLDialogElement} modal - Elemento <dialog> da página.
 * @returns {{abrir: (aluno: object) => void}} Função para abrir o modal com um aluno.
 */
function criarControladorModal(modal) {
  const titulo = modal.querySelector('#modal-titulo');
  const avatar = modal.querySelector('#modal-avatar');
  const perfil = modal.querySelector('#modal-perfil');
  const lista = modal.querySelector('#lista-projetos');

  modal.querySelector('#modal-fechar').addEventListener('click', () => modal.close());
  modal.addEventListener('click', (evento) => {
    const clicouNoFundo = evento.target === modal;
    if (clicouNoFundo) modal.close();
  });

  /**
   * Preenche o modal com os projetos do aluno e o exibe.
   * @param {{usuario: string, projetos: object[]}} aluno - Aluno selecionado.
   */
  function abrir(aluno) {
    titulo.textContent = aluno.usuario;
    avatar.src = obterUrlAvatar(aluno.usuario);
    perfil.href = `${URL_GITHUB}${aluno.usuario}`;
    lista.replaceChildren(
      ...aluno.projetos.map((projeto) => criarItemProjeto(aluno.usuario, projeto)),
    );
    modal.showModal();
    lista.scrollTop = 0;
  }

  return { abrir };
}

/**
 * Inicializa a página: monta os cards e liga o modal.
 * @param {object[]} alunos - Lista de alunos (ALUNOS).
 */
function iniciarPagina(alunos) {
  const grade = document.querySelector('#grade-alunos');
  const modal = document.querySelector('#modal-projetos');
  if (!grade || !modal) return;

  const controlador = criarControladorModal(modal);
  grade.replaceChildren(...alunos.map((aluno) => criarCardAluno(aluno, controlador.abrir)));

  const rodape = document.querySelector('#rodape-dados');
  rodape.textContent = `Dados levantados no GitHub em ${DATA_LEVANTAMENTO}.`;
}

iniciarPagina(ALUNOS);
