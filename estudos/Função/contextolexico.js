// contexo lexico
// Em JS refere-se ao ambiente em que uma função é definida, e não ao ambiente em que ela é chamada. Isso significa que o contexto léxico determina como as variáveis são resolvidas em uma função, com base em onde a função foi criada, em vez de onde ela foi invocada.

// Escopo (Scope):

// O escopo determina a visibilidade e acessibilidade de variáveis e funções em diferentes partes do código.

// JavaScript tem dois tipos principais de escopo: global e local (ou de função).

// Contexto de Execução:

// Quando uma função é executada em JavaScript, um novo contexto de execução é criado. Esse contexto inclui o escopo atual, as variáveis locais e uma referência ao escopo externo (contexto léxico pai).

// Cadeia de Escopos (Scope Chain):

// JavaScript usa uma cadeia de escopos para resolver os nomes das variáveis. Se uma variável não for encontrada no escopo atual, o motor busca no escopo externo (contexto léxico pai) e assim por diante, até chegar ao escopo global.

// Closures (Fechamentos):

// Um closure é uma função que "lembra" do contexto léxico em que foi criada, mesmo que seja executada fora desse contexto. Isso permite acessar variáveis do escopo externo de dentro da função.

// Exemplo de Contexto Léxico

let globalVar = "Sou global";

function funcaoExterna() {
    let varExterna = "Sou externa";

    function funcaoInterna() {
        let varInterna = "Sou interna";
        console.log(globalVar); // Acessa a variável global
        console.log(varExterna); // Acessa a variável do escopo externo
        console.log(varInterna); // Acessa a variável local
    }

    funcaoInterna();
}

funcaoExterna();

// explicação

// globalVar está no escopo global e pode ser acessada de qualquer parte do código.

// varExterna está no escopo de funcaoExterna e pode ser acessada por funcaoInterna devido à cadeia de escopos.

// varInterna está no escopo de funcaoInterna e só pode ser acessada dentro dessa função.


// Contexto Léxico e this:
// O contexto léxico também está relacionado ao valor de this, que depende de como uma função é chamada. Por exemplo:

// Em uma função regular, this se refere ao objeto que chamou a função.

// Em uma arrow function, this se refere ao contexto léxico em que a arrow function foi definida.

// exemplo
let obj = {
    nome: "Objeto",
    funcaoRegular: function() {
        console.log(this.nome); // "Objeto"
    },
    arrowFunction: () => {
        console.log(this.nome); // undefined (depende do contexto léxico)
    }
};

obj.funcaoRegular();
obj.arrowFunction();
// testes

const valo2= "Global"
function minha(){
    console.log(valo2)
}
function exec () {
    const valo2= "Local"
    minha()
}
exec()