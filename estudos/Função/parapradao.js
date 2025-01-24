// Parametro padrão 
// em JS Usando permitem que você defina valores padrão para os parâmetros de uma função. Se um argumento não for fornecido ou for undefined, o valor padrão será usado. Isso é útil para garantir que uma função tenha um comportamento previsível, mesmo quando alguns argumentos não são fornecidos.

// estrategia 1 de gerar valor padrão 
function soma (a ,b , c ){
    a= a || 1
    b= b ||1
    c= c ||1
    return a + b + c 
}
console.log(soma())
console.log(soma(3))
console.log(soma(1 , 2 , 3))
console.log(soma(0 , 0 , 0))

// estrategia 2 , 3  , 4 para gerar um valor padrão
function soma2(a , b , c){
    a= a !== undefined? a : 1
    b= 1 in arguments? b : 1
    c= isNaN(c) ? 1 : c
    return a + b + c
}
console.log( soma2())
console.log(soma2(3))
console.log(soma(1, 2, 3,))
console.log(0,0,0)

// Valor padrão do es2015

// Sintaxe de Parâmetros Padrão
// A sintaxe para definir parâmetros padrão é simples: você atribui um valor ao parâmetro na definição da função.

// exemplo padrão

function saudacao(nome = "Visitante") {
    return `Olá, ${nome}!`;
}

console.log(saudacao("Maria")); // "Olá, Maria!"
console.log(saudacao()); // "Olá, Visitante!"

// Vantagens dos Parâmetros Padrão

// Código Mais Limpo: Você pode evitar verificações explícitas para undefined dentro da função.

// Comportamento Previsível: Garante que a função tenha um comportamento padrão, mesmo que alguns argumentos não sejam fornecidos 


// Parâmetros Padrão com Outros Parâmetros

// Você pode combinar parâmetros padrão com parâmetros obrigatórios ou variáveis. Os parâmetros padrão são avaliados da esquerda para a direita.

// Exemplo com Parâmetros Múltiplos
function criarUsuario(nome, idade = 18, cidade = "Desconhecida") {
    return {
        nome: nome,
        idade: idade,
        cidade: cidade
    };
}

console.log(criarUsuario("João", 25, "São Paulo")); // { nome: 'João', idade: 25, cidade: 'São Paulo' }
console.log(criarUsuario("Ana")); // { nome: 'Ana', idade: 18, cidade: 'Desconhecida' }

// Parâmetros Padrão com Expressões

// Os valores padrão também podem ser expressões, incluindo chamadas de função.

function multiplicar(a, b = 2) {
    return a * b;
}

console.log(multiplicar(5)); // 10 (5 * 2)
console.log(multiplicar(5, 3)); // 15 (5 * 3)

// Parâmetros Padrão e undefined

// É importante notar que os parâmetros padrão só são usados quando o argumento é undefined. Se você passar null, o valor padrão não será aplicado.
function saudacao(nome = "Visitante") {
    return `Olá, ${nome}!`;
}

console.log(saudacao(null)); // "Olá, null!" (não usa o valor padrão)


// teste
function soma3( a= 1 , b = 1 , c= 1){
    return a + b + c
}
console.log(soma3(1))
console.log(soma3(3))
console.log(soma3(1, 2, 3))
console.log(soma3(0 ,0  ,0 ))
console.log(soma3())
