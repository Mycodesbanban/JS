// Objeto que controla a sequência de IDs únicos para os produtos
const sequencia = {
    _id: 1,  // Variável privada que armazena o próximo ID disponível

    get id() {  
        return this._id++; // Retorna o ID atual e depois incrementa para o próximo
    }
};

// Objeto que armazenará os produtos cadastrados
const produtos = {};

// Função para salvar um novo produto no "banco de dados" (objeto `produtos`)
function salvarProduto(produto) {
    if (!produto.id) produto.id = sequencia.id; // Se o produto não tiver um ID, gera um novo
    produtos[produto.id] = produto; // Armazena o produto no objeto usando seu ID como chave
    return produto; // Retorna o produto salvo
}

// Função para buscar um produto pelo ID
function getProduto(id) {
    return produtos[id] || {}; // Retorna o produto correspondente ou um objeto vazio se não existir
}

// Função para obter todos os produtos cadastrados
function getProdutos() {
    return Object.values(produtos); // Retorna um array contendo todos os produtos
}

function excluirProdutos() { 
    const produto= produtos[id]
   delete produtos[id]
   return produto
}


// Exporta as funções para que possam ser usadas em outros arquivos
module.exports = {
    salvarProduto,  
    getProduto,
    getProdutos,
    excluirProdutos
};
