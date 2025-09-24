// Parametro e Retorno Opcionais , Em Js Os parâmetros são considerados opcionais por padrão , e podem retorna valores opcionias.

// Isso é bastante útil quando desejamos que uma função tenha um comportamento flexivel.

// Parametros Opcionais

// Os parâmetros em JSD são considerados opcionais por padrão.Se você não passar um argumento para uma função , o paramentro correspondente será undefined.

// exemplo 
function saudacao(nome){
    if (nome === undefined){
        return "Ola visitante"
    }
    return `Òla , ${nome}`
}
console.log(saudacao("Maria"));
console.log(saudacao());

// Retorno Opcionais

// uma função em JS pode não retonar um valor explicitamente. se você não usar a instrução Return a função retornará undefined por padrão 

// exemplo
function calcular( a , b ){
    if ( b === undefined){
        return a; // retorna apenas a se o b não for fornecido
    }
    return a + b // retorna a soma de a e b 
}
console.log(calcular(2 , 2))
console.log(calcular(5))

// Usando Parâmetros Opcionais e Retornos Opcionais Juntos
// Você pode combinar parâmetros opcionais e retornos opcionais em uma única função para criar um comportamento mais flexíve

function multiplicar(a, b = 1) {
    return a * b; // Se 'b' não for fornecido, multiplica 'a' por 1
}

console.log(multiplicar(5, 2)); // 10
console.log(multiplicar(5)); // 5 (5 * 1)

// vamos fazer testes
function area ( largura , altura){
    const area= largura* altura
    if ( area > 20 ){
        console.log(`Valor acima do permitido: ${area}.m²`)

    } else{
        return area
    }
}
console.log(area(2 , 2 ))  
console.log(area(2))
console.log(area(20, 8 ))





// conclusão
// Em JavaScript, você pode facilmente trabalhar com parâmetros e retornos opcionais. Isso permite que você crie funções mais flexíveis e reutilizáveis, adaptando-se a diferentes situações sem a necessidade de sobrecarregar funções ou criar várias versões da mesma função