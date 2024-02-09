const elementoH2 = document.querySelector("h2");

//Alterar a cor do elemento para vermelho
elementoH2.style.color = 'red';

//Alterar o tamanho
elementoH2.style.fontSize = '50px';

const elementoLabel = document.querySelectorAll('label');
elementoLabel[0].style.color = "red";
elementoLabel[1].style.color = "green";

const elementoBotao = document.querySelector('button');
elementoBotao.style.borderRadius = "8px";
elementoBotao.style.background = 'blue';
elementoBotao.style.color = 'white';

//Captura o elemento h2 pelo ID 'login'
var h2Element = document.querySelector('#login h2');

//Adicionar um comentário indicando a primeira interação
console.log("Primeira interação do usuario");

//capturar o input do nome do usuário pelo ID
const usernameInput = document.getElementById('login-usuario');

//Adiciona a 

const alertaUsuario = document.querySelector('#login-usuario');

const alertaSenha = document.querySelector('#login-senha');

let usuario = true;
let senha = false;

if (usuario == true && senha == true){
    alertaUsuario.classList.add('correct');
    alertaSenha.classList.add('correct');
} else if (usuario == false && senha == true){
    alertaUsuario.classList.add('error');
    alertaSenha.classList.add('correct');
} else if (usuario == true && senha == false){
    alertaUsuario.classList.add('correct');
    alertaSenha.classList.add('error');
} else if (usuario == false && senha == false) {
    alertaUsuario.classList.add('error');
    alertaSenha.classList.add('error');
}


