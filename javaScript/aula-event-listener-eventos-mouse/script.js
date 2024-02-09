let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};



function atualizarValor() {
quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);
}

//variáveis
let btnAdicionar = document.querySelector('#btn-adicionar-produto-01');
let quantidade = document.querySelector('#quantidade-produto-01');
let btnSubtrair = document.querySelector('#btn-subtrair-produto-01');
let valorProduto = 11.66;

//estoque
let quantidadeDeProdutos = 10;

//função
function adicionarValor(){
  if (quantidade.value < quantidadeDeProdutos) {
  quantidade.value = Number(quantidade.value) + 1;
  subtotalInfo.quantidade = quantidade.value;
  subtotalInfo.valor = subtotalInfo.valor + valorProduto;  
  atualizarValor();
  } else {
    alert('Você atingiu o máximo da quantidade do produto!');
  }
}
btnAdicionar.addEventListener("click", adicionarValor);

function subtrairValor(){
  if (quantidade.value > 1) {
  quantidade.value = Number(quantidade.value) - 1;
  subtotalInfo.quantidade = quantidade.value;
  subtotalInfo.valor = subtotalInfo.valor - valorProduto;  
  atualizarValor();
  } else {
    alert('Adicione o produto!');
  }
}
btnSubtrair.addEventListener("click", subtrairValor);