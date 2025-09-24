// O tratamento de erros em JavaScript é uma parte fundamental da programação, permitindo que você lide com exceções e erros de forma controlada. O JavaScript fornece as instruções try, catch, e throw para gerenciar erros de maneira eficaz. Vamos explorar cada um desses componentes em detalhes.

// Try
// O bloco 'try' é usado para envolver o código que pode gerar uma exceção. Se uma exceção ocorrer dentro do bloco 'try', a execução do código é interrompida e o controle é passado para o bloco 'catch'.

// Exemplo de try

try {
    // Código que pode gerar um erro
    let resultado = 10 / 0; // Isso não gera um erro, mas vamos simular um erro
    console.log(resultado);
    // Simulando um erro
    throw new Error("Um erro ocorreu!");
} catch (error) {
    console.log("Erro capturado: " + error.message);
}

// catch
// O bloco 'catch' é usado para capturar e tratar a exceção que foi lançada no bloco 'try'. Você pode acessar o objeto de erro dentro do bloco 'catch' para obter informações sobre o erro.

// exemplo de catch
try {
    // Código que pode gerar um erro
    let resultado = JSON.parse("não é um JSON válido");
} catch (error) {
    console.log("Erro capturado: " + error.message); // "Erro capturado: Unexpected token n in JSON at position 0"
}

//throw
// A instrução 'throw' é usada para lançar uma exceção manualmente. Você pode lançar um objeto de erro ou qualquer outro valor. Isso é útil quando você deseja sinalizar que algo inesperado aconteceu.

// Exemplo de throw

function verificarIdade(idade) {
    if (idade < 18) {
        throw new Error("Você deve ter pelo menos 18 anos.");
    }
    return "Acesso permitido.";
}

try {
    console.log(verificarIdade(16)); // Isso lançará um erro
} catch (error) {
    console.log("Erro: " + error.message); // "Erro: Você deve ter pelo menos 18 anos."
}

// finally
// O bloco 'finally' é opcional e pode ser adicionado após os blocos 'try' e 'catch'. O código dentro do bloco 'finally' será executado independentemente de uma exceção ter sido lançada ou não. Isso é útil para realizar limpeza ou liberar recursos.

// exemplo de finally


try {
    console.log("Tentando executar código...");
    throw new Error("Um erro ocorreu!");
} catch (error) {
    console.log("Erro capturado: " + error.message);
} finally {
    console.log("Este bloco sempre será executado.");
}

// O tratamento de erros em JavaScript é uma prática essencial para garantir que seu código seja robusto e capaz de lidar com situações inesperadas. Usando try, catch, throw, e finally, você pode gerenciar exceções de forma eficaz, melhorando a experiência do usuário e a manutenção do código.
