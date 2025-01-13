// Importa o array de filmes
import { filmes } from './filmes.js';

const filmList = document.getElementById("film-list");
const filmDialog = document.getElementById("film-dialog");
const dialogContent = document.getElementById("dialog-content");
const closeDialog = document.getElementById("close-dialog");

// Função para renderizar os filmes
function renderFilmes() {
  filmList.innerHTML = filmes
    .map((filme, index) => {
      return `
        <div class="film-card">
          <img src="${filme.imagem}" alt="${filme.titulo}">
          <h3>${filme.titulo}</h3>
          <p>${filme.descricao}</p>
          <p><strong>Diretor:</strong> ${filme.diretor}</p>
          <p><strong>Ano:</strong> ${filme.ano}</p>
          <button class="details-btn" data-index="${index}">Mais detalhes</button>
        </div>
      `;
    })
    .join("");

  // Adicione eventos aos botões "Mais detalhes"
  const detailButtons = document.querySelectorAll(".details-btn");
  detailButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      openDialog(index);
    });
  });
}

// Função para abrir o dialog com informações do filme
function openDialog(index) {
  const filme = filmes[index];
  dialogContent.innerHTML = `
    <h2>${filme.titulo}</h2>
    <img src="${filme.imagem}" alt="${filme.titulo}" style="max-width: 100%; border-radius: 5px;">
    <p>${filme.descricao}</p>
    <p><strong>Diretor:</strong> ${filme.diretor}</p>
    <p><strong>Ano:</strong> ${filme.ano}</p>
    <p><a href="${filme.trailer}" target="_blank">Assistir ao trailer</a></p>
  `;
  filmDialog.showModal();
}

// Fechar o dialog
closeDialog.addEventListener("click", () => {
  filmDialog.close();
});

// Renderizar os filmes ao carregar a página
renderFilmes();

const searchInput = document.getElementById("search");
searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.toLowerCase();
    const filteredFilmes = filmes.filter(filme =>
        filme.titulo.toLowerCase().includes(searchValue)
    );
filmList.innerHTML = filteredFilmes.map(filme => `
    <div class="film-card">
        <img src="${filme.imagem}" alt="${filme.titulo}">
        <h3>${filme.titulo}</h3>
        <p>${filme.descricao}</p>
        <p><strong>Diretor:</strong> ${filme.diretor}</p>
        <p><strong>Ano:</strong> ${filme.ano}</p>
    </div>
`).join("");
});

// Atualiza o contador de filmes
function atualizarContadorFilmes() {
    const filmCounter = document.getElementById("film-counter");
    filmCounter.textContent = `Total de filmes: ${filmes.length}`;
}

// Chame a função para exibir o contador ao carregar a página
atualizarContadorFilmes();    