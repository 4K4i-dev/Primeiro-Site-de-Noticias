import { usuario } from "./db.js";

const email = usuario.email;
const senha = usuario.senha;


function verificarCredenciais(){
    const emailInformado = document.getElementById ("email").value;
    const senhaInformada = document.getElementById ("senha").value;

    if (emailInformado === email && senhaInformada === senha) {
        alert("Login realizado com sucesso!");
        window.location = "home.html";
    } else {
        alert("Credenciais inválidas. Tente novamente.");
    }
}

document.addEventListener("DOMContentLoaded", ()=> {
    const botao=document.querySelector("button");
    botao.addEventListener("click", (e) => {
        e.preventDefault();
        verificarCredenciais();
    })
})