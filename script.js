
const banco = [
  {
        id:0,
        imgSrc:"img/sapato.png",
        categoriaProduto: "Calçados",
        nomeProduto: "shoe",
        descricaoProduto: "A edição especial Nocturna do Yuoo, super leve e macio...",
        valorProduto: 80.00,
        addProduto: "Adicionar ao carrinho",
        removerProduto: "remover produto",
        
  },
  
  {
        id:1,
        imgSrc:"img/relogio.png",
        categoriaProduto: "Acessórios",
        nomeProduto: "smartwatch",
        descricaoProduto: "Tela Retina Sempre Ativa, para deixar tudo mais fácil de ler e acessar...",
        valorProduto:160.00,
        addProduto: "Adicionar ao carrinho",
        removerProduto: "remover produto",
        
        
  },  
  {
        id:2,
        imgSrc:"img/image.png",
        categoriaProduto: "Acessórios",
        nomeProduto: "Black Hat",
        descricaoProduto: "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
        valorProduto:70.00,
        addProduto: "Adicionar ao carrinho",
        removerProduto: "remover produto",
        
    },

  {
        id:3,
        imgSrc:"img/Surgical-Mask.png",
        categoriaProduto: "Acessórios",
        nomeProduto: "Mask",
        descricaoProduto: "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
        valorProduto: 40.00,
        addProduto: "Adicionar ao carrinho",
        removerProduto: "remover produto",
        
    },
    { 
        id:4,
        imgSrc:"img/Men-TShirt.png",
        categoriaProduto: "Camisetas",
        nomeProduto: "T-Shirt",
        descricaoProduto: "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
        valorProduto: 100.00,
        addProduto:"Adicionar ao carrinho",
        removerProduto: "remover produto",
        
    },  
  {
        id:5,
        imgSrc:"img/Short-Sleeve.png",
        categoriaProduto: "Camisetas",
        nomeProduto: "Short-Sleeve T-Shirt",
        descricaoProduto: "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
        valorProduto:100.00,
        addProduto:"Adicionar ao carrinho",
        removerProduto: "remover produto",
        
    },
  {
        id:6,
        imgSrc:"img/mockup.png",
        categoriaProduto: "Camisetas",
        nomeProduto: "Champion Packable Jacket",
        descricaoProduto: "Esta jaqueta de poliést...",
        valorProduto:100.00,
        addProduto: "Adicionar ao carrinho",
        removerProduto: "remover produto",
        
  },
  
  {
        id:7,
        imgSrc:"img/Men-Jacket.png",
        categoriaProduto: "Camisetas",
        nomeProduto: "Lightweight Jacket",
        descricaoProduto: "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
        valorProduto: 100.00,
        addProduto: "Adicionar ao carrinho",
        removerProduto: "remover produto",
        
    
  },
  {
        id:8,
        imgSrc:"img/tenis.png",
        categoriaProduto: "Calçados",
        nomeProduto: "sneakers",
        descricaoProduto: "Fit possui ação antiodor e pode ser lavado na máquina",
        valorProduto:150.00,
        addProduto: "Adicionar ao carrinho",
        removerProduto: "remover produto",
        
  },
    
]









let containerCategoria = document.getElementById("container-categorias")

containerCategoria.addEventListener("click", filterContent)
function filterContent(event) {
  
  let btnNav = document.querySelectorAll("li");
  let itemClicado = event.target
  
  if (itemClicado.id != "container-categorias"){
    btnNav.forEach((itemLi) => {
      itemLi.classList.remove("listas");
    });
    itemClicado.classList.add("listas");
    
    let categoriaClicado = itemClicado.innerText;
    
    const arrObjfiltedCategoria = banco.filter(function (character){
      return character.categoriaProduto.includes(categoriaClicado)
    });
    
    card.innerHTML = "";
    
    
    if (categoriaClicado == "Todos") {
      atualizaTela();
    } else {
      atualizaTela(arrObjfiltedCategoria);
    }
  }
}

    
  

  

  let card = document.getElementById("card-article")
  
  function createContainerCard(imgSrc, categoriaProduto,nomeProduto,descricaoProduto,valorProduto,addProduto,id){
    let containerCard = document.createElement("article");
    containerCard.setAttribute("id", "container-card")
    containerCard.innerHTML =`<div class="imgUm">
      <div class=" imgDois">
      <img src=${imgSrc} alt="">
      </div>
    </div>

    <div id="segundaDiv">
      <button type="submit" class="Categoria">${categoriaProduto}</button>
      <h3>${nomeProduto}</h3>
      <p>${descricaoProduto}</p>
      <span id=${id}>R$${valorProduto}.00
      </span>
      <a id=${id}>${addProduto}</a>`
  
    
    card.appendChild(containerCard)
}



function atualizaTela(font = banco) {
  font.forEach(function (item) {
   
    createContainerCard(
      item.imgSrc,
      item.categoriaProduto,
      item.nomeProduto,
      item.descricaoProduto,
      item.valorProduto,
      item.addProduto,
      item.id
      );
  })
}
atualizaTela()






let searchb = document.getElementById("search-b")
let btnsearch =document.getElementById("btn-search")


btnsearch.addEventListener("click", searchContent)
function searchContent(event) {
  event.preventDefault()

  let textvalue = searchb.value
  let nome = document.querySelectorAll("button")

  for (let i = 0; i < nome.length; i++) {
    
    const arrObjNome = banco.filter(function (character) {
      return character.nomeProduto.includes(textvalue)
    });
    
    card.innerHTML = "";
    atualizaTela(arrObjNome)
  }
}
    




let id = 0
function crearItemCarinho(item) {
  let divCardCarrinho = document.createElement("div")
  divCardCarrinho.setAttribute("id", id)
  divCardCarrinho.setAttribute("class", "divCardCarrinho")
  divCardCarrinho.innerHTML =
    `<div class="blocoimg">
      <img src=${item.imgSrc} alt="">
    </div>
    <div class="descricaoImg">
      <h3>${item.nomeProduto}</h3>
      <span id =${item.id}>R$${item.valorProduto}.00</span>
      <a id="remover" href="">${item.removerProduto}</a>
    </div>`
  
    let remover = document.getElementById(`${item.id}`)
  remover.addEventListener("click", function () {
    removerDoCarrinho(item)
    } )
  itens.appendChild(divCardCarrinho)
}




let arrCarrinho = []

let quantidadeItem = document.getElementById("numero")
let quantidade = 0


let valor = document.getElementById("valor")
let totalSoma = 0


card.addEventListener("click", addCarrinho)
function addCarrinho(event) {
  vazio.style.display="none"
  itens.innerHTML = ""
  let alvo = event.target.id
  event.preventDefault()
  for (let i = 0; i < banco.length; i++){
    if (alvo == banco[i].id) {
      arrCarrinho.push(banco[i])
    } 
  }
  const soma = () => {
    return arrCarrinho.reduce((a, b) => a + b.valorProduto, 0)
  }
  
  totalSoma = valor.innerText = `R$ ` + soma()
  quantidadeItem.innerText = ++quantidade
  
  atualizaCarrinho()
}







function atualizaCarrinho() {
  arrCarrinho.forEach(function (item){
    crearItemCarinho(
      item
    )
  }
)}










