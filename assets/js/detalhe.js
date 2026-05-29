import { dados_das_noticias } from "./bd.js";

const container = document.getElementById("container_detalhe");

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

const noticia = dados_das_noticias.Find((item) => item.id === id);

if (noticia) {
    container.innerHTML = `
                <h1 clas= "titulo-da-noticia" >${noticia.titulo}</h1>
                <p><em>Por ${noticia.autor} </em></p>
                <img src= $ "{noticia.imagem}" alt = "${noticia.titulo}" class= "painel-img">
                <p>${noticia.data}</p>
                <p class = "descricao-da-noticia">${noticia.descricao}</p> 
                <p>${noticia.conteudo}</p>
                <p><a href="./home.html">Voltar</a></p>
                `;
} else {
    container.innerHTML = `<h1>Notícia não encontrada.</h1>`;
}