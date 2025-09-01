// Produtos em destaque - Roupas Femininas
const produtosFemininos = [
    {
        nome: "Vestido Floral Verão",
        preco: "R$ 129,90",
        imagem: "_imagens/vestido-floral.jpg"
    },
    {
        nome: "Blusa Manga Curta",
        preco: "R$ 79,90",
        imagem: "_imagens/blusa-manga-curta.jpg"
    },
    {
        nome: "Saia Jeans",
        preco: "R$ 99,90",
        imagem: "_imagens/saia-jeans.jpg"
    }
];

const secaoFeminino = document.createElement("section");
secaoFeminino.classList.add("produtos-femininos");

const titulo = document.createElement("h2");
titulo.textContent = "Coleção Fitness 2026 - Feminino";
secaoFeminino.appendChild(titulo);

const listaProdutos = document.createElement("div");
listaProdutos.classList.add("lista-produtos");

produtosFemininos.forEach(produto => {
    const produtoDiv = document.createElement("div");
    produtoDiv.classList.add("produto");

    const imagem = document.createElement("img");
    imagem.src = produto.imagem;
    imagem.alt = produto.nome;

    const nome = document.createElement("h3");
    nome.textContent = produto.nome;

    const preco = document.createElement("p");
    preco.textContent = produto.preco;

    const botao = document.createElement("button");
    botao.textContent = "Ver detalhes";

    produtoDiv.appendChild(imagem);
    produtoDiv.appendChild(nome);
    produtoDiv.appendChild(preco);
    produtoDiv.appendChild(botao);

    listaProdutos.appendChild(produtoDiv);
});

secaoFeminino.appendChild(listaProdutos);

// Adiciona a seção ao main
document.getElementById("produtos-femininos").appendChild(secaoFeminino);