
   document.getElementById("opennav").addEventListener("click", function() {
     document.getElementById("mySidenav").style.width = "550px";
  })

   document.getElementById("closebtn").addEventListener("click", function() {
     document.getElementById("mySidenav").style.width = "0";
     document.getElementById("main").style.marginLeft = "0";
  })


   const menuProdutos = [
   {
    id: 0,
    nome: 'Sabonete Flora',
    preco: 3.50,
    categoria: 'higiene',
    imagem: './assets/sabão1.png',
    link: './InterfaceDoProduto/tela_produto.html',
    farmalink: './InterfaceFarma/Tela_FarmáciaBoa.html',
    farmalogo: './assets/Farma1.png'
 },
  {
    id: 1,
    nome: 'Remédio Dusseldove',
    preco: 17.50,
    categoria: 'higiene',
    imagem: './assets/remédio1.jpg',
    link: './InterfaceDoProduto/tela_produto2.html',
    farmalink: './InterfaceFarma/Tela_FarmáciaAlto.html',
    farmalogo: './assets/Farma2.png'
 },
  {
    id: 2,
    nome: 'Floral Mockup',
    preco: 15.50,
    categoria: 'higiene',
    imagem: './assets/remédio2.jpg',
    farmalink: './InterfaceFarma/Tela_FarmáciaFlor.html',
    farmalogo: './assets/Farma3.png'
 },
  {
    id: 3,
    nome: 'Creme Tube',
    preco: 7.90,
    categoria: 'higiene',
    imagem: './assets/creme1.jpg',
    farmalink: './InterfaceFarma/Tela_FarmáciaBoa.html',
    farmalogo: './assets/Farma1.png'
 },
 {
    id: 4,
    nome: 'Remédio Baleco',
    preco: 5.50,
    categoria: 'higiene',
    imagem: './assets/remedio3.png',
    farmalink: './InterfaceFarma/Tela_FarmáciaFlor.html',
    farmalogo: './assets/Farma3.png'
 },
  {
    id: 5,
    nome: 'Absorvente Rose',
    preco: 21.50,
    categoria: 'higiene',
    imagem: './assets/absorvente.png',
    farmalink: './InterfaceFarma/Tela_FarmáciaBoa.html',
    farmalogo: './assets/Farma1.png'
 },
  {
    id: 6,
    nome: 'Shampoo Blu (2 uni)',
    preco: 21.50,
    categoria: 'higiene',
    imagem: './assets/shampoo1.jpg',
    farmalink: './InterfaceFarma/Tela_FarmáciaAlto.html',
    farmalogo: './assets/Farma2.png'
 },
 {
    id: 7,
    nome: 'Desodorante Obsidian',
    preco: 10.90,
    categoria: 'higiene',
    imagem: './assets/desodorante1.jpg',
    farmalink: './InterfaceFarma/Tela_FarmáciaAlto.html',
    farmalogo: './assets/Farma2.png'
 },
 {
    id: 8,
    nome: 'Lenço Parasol',
    preco: 10.90,
    categoria: 'higiene',
    imagem: './assets/lencoumid1.jpg',
    farmalink: './InterfaceFarma/Tela_FarmáciaBoa.html',
    farmalogo: './assets/Farma1.png'
 },
 {
    id: 9,
    nome: 'Vitaminas Flex B2',
    preco: 36.90,
    categoria: 'higiene',
    imagem: './assets/vitamina.png',
    farmalink: './InterfaceFarma/Tela_FarmáciaFlor.html',
    farmalogo: './assets/Farma3.png'
 },

  {
    id: 10,
    nome: 'Cloroxomin 10mg',
    preco: 14.70,
    categoria: 'higiene',
    imagem: './assets/remedio4.jpg',
    farmalink: './InterfaceFarma/Tela_FarmáciaFlor.html',
    farmalogo: './assets/Farma3.png'
 },

  {
    id: 11,
    nome: 'Óleo Koala',
    preco: 8.99,
    categoria: 'higiene',
    imagem: './assets/oleo1.jpg',
    farmalink: './InterfaceFarma/Tela_FarmáciaBoa.html',
    farmalogo: './assets/Farma1.png'
 },

 ];

 let listaDestaque = document.querySelector(".produto")
 let listaCarrinho = document.querySelector('.secaoCarrinho__listaItens');

 const containerTotal = document.querySelector('.secaoCarrinho__total > span');

 function construirLayoutPratos(ulContainer, item, classePrato){


  let li = document.createElement("li")
  let a = document.createElement("a")

  let figure = document.createElement("figure")
  let link = document.createElement("a")
  link.href = item.link
  let img = document.createElement("img")
  img.className = "produto-imgmn";
  img.src = item.imagem
  img.alt = item.nome

  let figcaption = document.createElement("figcaption")
  figcaption.innerText = item.nome

  let div = document.createElement("div")
  let h3 = document.createElement("h3")
  h3.innerText = item.nome


  let span = document.createElement("span")
  span.innerText =  item.preco.toFixed(2) 

   let p = document.createElement("p")
    p.innerText = "R$"


let a1 = document.createElement("a")
a1.href = item.farmalink

let logo = document.createElement("img")
logo.className = "farmalogo";
logo.src = item.farmalogo

  let button = document.createElement("button")
  button.className = "button";

  let spanbtn = document.createElement("span")
 spanbtn.textContent = 'ㅤ';

  let divbtn = document.createElement("div")
  divbtn.className = "cart";
  let svg = document.createElement("svg")
svg.setAttribute("viewBox","0 0 36 26")



  let polyline = document.createElementNS("http://www.w3.org/2000/svg","polyline")
  polyline.setAttributeNS("polyline","points","1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5")

  let polyline1 = document.createElementNS("http://www.w3.org/2000/svg","polyline")
  polyline1.setAttributeNS("polyline","points","15 13.5 17 15.5 22 10.5")

  li.appendChild(a)
  button.dataset.id = item.id;

    //MONTANDO IMAGEM
    link.appendChild(img)
    figure.appendChild(link)
    figure.appendChild(figcaption)
    a.appendChild(figure)

    div.appendChild(h3)
     div.appendChild(p)
    div.appendChild(span)
    div.appendChild(a1)
    a1.appendChild(logo)
 
    a.appendChild(div)
    div.appendChild(button)
    button.appendChild(spanbtn)
    button.appendChild(divbtn)
    divbtn.appendChild(svg)
    svg.appendChild(polyline)
    svg.appendChild(polyline1)

    li.classList.add(classePrato)
    ulContainer.appendChild(li)

    button.addEventListener('click', adicionarNoCarrinho);
 
 document.querySelectorAll('.button').forEach(button => button.addEventListener('click', e => {
               if(!button.classList.contains('loading')) {
                 button.classList.add('loading');
                 setTimeout(() => button.classList.remove('loading'), 3700);
              }
              e.preventDefault();
           }));

 }

 for(let cont = 0; cont < menuProdutos.length; cont++){
  let item = menuProdutos[cont]

  construirLayoutPratos(listaDestaque,item, "secaoPratosDestaque__itemPrato")
}

function construirLayoutCarrinho(item) {
  const li = document.createElement('li');
  const div = document.createElement('div');
  const h3 = document.createElement('h3');
  const span = document.createElement('span');
  const p = document.createElement('p');
  const button = document.createElement('button');

  h3.innerText = item.nome;
  span.innerText = item.preco.toFixed(2);
  button.innerText = 'Remover';

  div.appendChild(h3);
  div.appendChild(span);

  li.appendChild(div);
  li.appendChild(button);

  li.classList.add('secaoCarrinho__item');

  listaCarrinho.appendChild(li);

  button.addEventListener('click', removerDoCarrinho);
}

function adicionarNoCarrinho(evento) {

  const elementoClicado = evento.currentTarget;
  const idElementoClicado = elementoClicado.dataset.id;

  const pratoSelecionado = menuProdutos[idElementoClicado];

  construirLayoutCarrinho(pratoSelecionado);
  atualizarTotal();
}

function removerDoCarrinho(evento) {
  const elementoClicado = evento.currentTarget;
  const elementoPai = elementoClicado.parentElement;

  elementoPai.remove();
  atualizarTotal();
}

function atualizarTotal() {
  const listaPrecos = document.querySelectorAll('.secaoCarrinho__item > div > span');

  let total = 0;
  for(let contador = 0; contador < listaPrecos.length; contador++){
    const elementoSpan = listaPrecos[contador];
    const precoNumero = Number(elementoSpan.innerText);
    total += precoNumero;
 }

 total = total.toFixed(2);
 containerTotal.innerText = total;
}


