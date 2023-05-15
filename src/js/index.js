const BotaoAlterarTema = document.getElementById("theme_changer");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".theme_button");

BotaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./images/sun.png");
    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./images/moon.png");
    }
});
