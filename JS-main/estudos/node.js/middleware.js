// Middleware Pattern (Chain of Responsibility)

// Primeiro middleware: adiciona 'valor1' ao contexto e chama o próximo middleware
const passo1 = (ctx, next) => {
    ctx.valor1 = "mid1"; // Define uma propriedade no contexto
    next(); // Chama o próximo middleware na cadeia
};

// Segundo middleware: adiciona 'valor2' ao contexto e chama o próximo middleware
const passo2 = (ctx, next) => {
    ctx.valor2 = "mid2"; // Define outra propriedade no contexto
    next(); // Continua para o próximo middleware
};

// Terceiro middleware: adiciona 'valor3' ao contexto
// Como não chama 'next()', ele é o último da cadeia
const passo3 = ctx => {
    ctx.valor3 = "mid3"; // Adiciona um terceiro valor ao contexto
};

// Função que executa os middlewares na ordem correta
const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        // Verifica se existem middlewares e se ainda há mais para executar
        if (middlewares && indice < middlewares.length) {
            // Executa o middleware atual, passando 'ctx' e uma função que chama o próximo
            middlewares[indice](ctx, () => execPasso(indice + 1)); // O () é uma função callback e seu uso é fundamental para controlar quando o próximo middleware será executado.
        }
    };
    execPasso(0); // Inicia a execução do primeiro middleware
};

// Criamos um objeto vazio para servir como contexto
const ctx = {};

// Chamamos a função 'exec', passando o contexto e os middlewares na ordem
exec(ctx, passo1, passo2, passo3);

// Exibe o objeto final no console, com todas as modificações feitas pelos middlewares
console.log(ctx); 

