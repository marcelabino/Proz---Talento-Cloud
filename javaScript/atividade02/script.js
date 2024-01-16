//Manipulando o h1
const elementoH1 = document.getElementById("titulo");
elementoH1.innerText = "Título";

//Elemento a
let elementoA = document.querySelector("a");
elementoA.innerText = "Proz Educação";

//Elemento ol
let elementoOl = document.querySelector("ol a");
elementoOl.innerHTML = `<ol id="lista-ordenada">
<li><a href="https://www.facebook.com/?locale=pt_BR"></a>Facebook</li>
<li><a href="https://www.instagram.com/"></a>Instagram</li>
<li><a href="https://www.youtube.com/?gl=BR"></a>Youtube</li>
</ol>`;

//Elemento ul
let elementoUl = document.querySelector("ul");
elementoUl.innerHTML = `<ul id="lista">
<li>Facebook</li>
<li>Instagram</li>
<li>Youtube</li>        
</ul>`;

