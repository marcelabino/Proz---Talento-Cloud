let h1 = document.createElement("h1");
h1.innerText = "Produtos à venda";
console.log(h1);
h1.id = "titulo"

let site = document.querySelector("body");
site.appendChild(h1);

let postagem = document.createElement("div");
postagem.innerHTML = `<img src="calca.webp" alt="calça jeans">
<h2 class="post-titulo">Calça Jeans Skinny</h2>
<p class="post-descricao">Indicado para o dia a dia  <br>
Material: Jeans <br>
Preço: R$ 82,99 </p>  `

site.appendChild(postagem);
