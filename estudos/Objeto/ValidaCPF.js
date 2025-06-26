// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/
function ValidaCPF(cpfEnviado) { // criando a função construtora
  Object.defineProperty(this, 'cpfLimpo', { // defindindo a propriedade 
    enumerable: true,  // a propriedade pode ser listrada em alguns metodos
    get: function() { // funcão para trocar o valor quando for acessado
      return cpfEnviado.replace(/\D+/g, '');
    }
  });
}

ValidaCPF.prototype.valida = function() { // atribuindo a função valida para o prototype de valida , para poder acessar publicamente 
  if(typeof this.cpfLimpo === 'undefined') return false;  // caso o cpf for undefined vai retorna falso
  if(this.cpfLimpo.length !== 11) return false; // caso o tamanho do cpf for diferente de 11 retorne falso
  if(this.isSequencia()) return false; 

  const cpfParcial = this.cpfLimpo.slice(0, -2); // pega o cpf sem os dois ultimos digitos 
  const digito1 = this.criaDigito(cpfParcial); //atribuindo para o valor da const que criamos a uma variavel local que pode ser acessada em qualquer momento da função valida
  const digito2 = this.criaDigito(cpfParcial + digito1); // recebe o cpf parcial somado com o a const que criamos  

  const novoCpf = cpfParcial + digito1 + digito2; // o novo cpf e a soma desses 3 
  return novoCpf === this.cpfLimpo; // retorne se novo cpf for extamente igual a cpfLImpo
};

ValidaCPF.prototype.criaDigito = function(cpfParcial) { // atribuindo uma função criar digito para o prototype , para ser acessada publicamente 
  const cpfArray = Array.from(cpfParcial); //cria um novo array para o Parametro cpfParcial

  let regressivo = cpfArray.length + 1;
  const total = cpfArray.reduce((ac, val) => { // reduzir o array em um unico valor
    ac += (regressivo * Number(val)); // pega o valor atual do acumulador , e soma esse valor com o acumulador
    regressivo--; // tira 1
    return ac; // retorna o acumulador 
  }, 0); // passando o valor inicial do acumulador 

  const digito = 11 - (total % 11); // calcula o resto da divisão de total por 11 e subtrair por 11
  return digito > 9 ? '0' : String(digito); // se digito for maior que 9 retorne "0" caso for menor retorne digito
};

ValidaCPF.prototype.isSequencia = function() { // atribuindo a função is sequencia para dentro do prototype do Validar Cpf
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length); // repete o primeiro index do cpfLimpo e por o tamanho do array
  return sequencia === this.cpfLimpo; // retorne se sequencia for extamente igual a cpfLimpo
};

const cpf = new ValidaCPF('070.987.720-03');  // retornando o cpf

if(cpf.valida()) { // caso o cpf for valido vai retorna cpf valido
  console.log('Cpf válido');
} else { // caso não for vai retorna invalido 
  console.log('Cpf inválido');
}
