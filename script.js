let formulario = document.getElementById("formulario");
let nome = document.getElementById("nome");
let email = document.getElementById("email");
let serie = document.getElementById("serie");
let manha = document.getElementById("manha");
let tarde = document.getElementById("tarde");
let atividades = document.querySelectorAll(".atividades");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    if (nome.value.trim() === "" || email.value.trim() === "" || serie.value.trim() === "" || (!manha.checked && !tarde.checked) || (!atividades.checked)) {
        alert("Preencha o Formulário por completo!");
        return;

    }
    alert("Formulário enviado com sucesso!");

});
