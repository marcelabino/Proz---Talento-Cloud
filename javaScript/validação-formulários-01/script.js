// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

function mostrarPopup(input, label) {
    input.addEventListener("focus", function(){
        label.classList.add("required-popup")
    })

    input.addEventListener("blur", function(){
        label.classList.remove("required-popup")
    })
}

mostrarPopup(usernameInput, usernameLabel);

// Mostrar popup de campo obrigatório
usernameInput.addEventListener("focus", function(){
    usernameLabel.classList.add("required-popup")
})

// Ocultar popup de campo obrigatório
usernameInput.addEventListener("blur", function(){
    usernameLabel.classList.remove("required-popup")
})

// Validar valor do input
usernameInput.addEventListener("change", function(evento){
    let valor = evento.target.value

    if (valor.length < 3) {
        usernameInput.classList.remove("correct");
        usernameInput.classList.add("error");
        usernameHelper.innerText = "Você deve digitar 3 ou mais caracteres!"
        usernameHelper.classList.add("visible");
    } else {
        usernameInput.classList.add("correct");
        usernameInput.classList.remove("error");
        usernameHelper.classList.remove("visible");
    }
});

//Validação email
let emailInput = document.getElementById("email")
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

mostrarPopup(emailInput, emailLabel);

emailInput.addEventListener("change", function(evento){
    let valor = evento.target.value

    if(valor.includes("@") && valor.includes(".com")){
        emailInput.classList.remove("error");
        emailInput.classList.add("correct");
        emailHelper.classList.remove("visible");
    } else {
        emailInput.classList.add("error");
        emailInput.classList.remove("correct");
        emailHelper.innerText = "E-mail errado!"
        emailHelper.classList.add("visible");
    }
})

//Validação idade
let idadeInput = document.getElementById("idade");
let idadeLabel = document.querySelector('label[for="idade"]');
let idadeHelper = document.getElementById("idade-helper");

mostrarPopup(idadeInput, idadeLabel);

idadeInput.addEventListener("change", function(evento){
    let idade = evento.target.value

    if (idade >= 18) {
        idadeInput.classList.remove("error");
        idadeInput.classList.add("correct");
        idadeHelper.classList.remove("visible");
    } else {
        idadeInput.classList.add("error");
        idadeInput.classList.remove("correct");
        idadeHelper.innerText = "Acesso negado! Menor de 18 anos."
        idadeHelper.classList.add("visible");   
 }  
})