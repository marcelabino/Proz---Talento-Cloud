console.log("Está conectado!")

//Selecionando itens do DOM pela tag
const logoElement = document.getElementById("logo");

console.log('Alt do logo:', logoElement.alt);

const autoresElements = document.getElementsByClassName('post-autor');

console.log('Autores das postagens:');
for(let i = 0; i < autoresElements.length; i++){
    const autor = autoresElements[i].textContent;
    console.log('-', autor);
}

const nomeFormulario = document.getElementById("nome");
console.log(nomeFormulario);

const linkElement = document.getElementsByClassName('post-texto');

const titulos = document.querySelectorAll('footer .lista_redes a');

function imprimirLinks(lista){
    for (i = 0; i < titulos.length; i++){
        console.log(titulos[i].innerText);
    }
    console.log('A quantidade de links:', titulos.length);
}
imprimirLinks(titulos);

