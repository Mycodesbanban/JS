// Operadores unarios
// Os operadores unários são aqueles que operam em apenas um único operando. Eles podem ser usados para realizar operações como incremento, decremento, negação, e conversão de tipo

// . Operador de Incremento (++)
// O operador de incremento (++) aumenta o valor de uma variável em 1. Ele pode ser usado de duas maneiras:

// Prefixo (++x): Incrementa o valor da variável e, em seguida, retorna o novo valor.
// Pósfixo (x++): Retorna o valor atual da variável e, em seguida, incrementa o valor.
// exemplo
let num1=1;
let num2=2;
num1++
--num1
console.log(num1++)//2 (prefixo:incremente antes de retornar)
console.log(--num1)// 2 (Pósfixo: retorna o 2 depois de incrementar)
console.log(num1) // 3 ( valor atual de x)

// Operador de Decremento (--)
// O operador de decremento (--) diminui o valor de uma variável em 1. Assim como o operador de incremento, ele pode ser usado em prefixo ou pósfixo.

// Exemplo:
let y = 5 ;
console.log(--y);// 4 (prefixo: decrementa antes de retornar)
console.log(y--); // 4 (pósfixo: retorna 4 e depois decrementa)
console.log(y); // 3 ( valor atual do y)

// vamos fazer uns testes
console.log(++num1 === num2--)//true
// o resultado foi true por que o ++ foi excutado antes da comparação , é o -- só foi executar depois de comparar 
//quando for executar esse codigo se o resultado não foi true e por conta que lá em em cima colocamos os console.log com o num++ dentro entaõ preste bastante atenção
console.log( num1=== num2) ; //false




