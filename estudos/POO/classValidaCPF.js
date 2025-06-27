// 705.484.450-52 070.987.720-03

class ValidaCPF {
  constructor(cpfEnviado) { // executado automanticamente quando a classe é instanciada com new
    Object.defineProperty(this, 'cpfLimpo', {
      writable: false, // não é editavel
      enumerable: true, //torna a propriedade visivel em laços e listagens
      configurable: false, // não sera configuravel
      value: cpfEnviado.replace(/\D+/g, '') // quando o valor for enviado vai ser trocado por uma string vazia 
    });
  }

  éSequência() {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo; //Retorna o primeiro caractere da string e repete 11 vezes , se for extamente igual a cpfLimpo vai ser retornado
  }

  geraNovoCpf() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2); // remove os dois ultimos digitos
    const digito1 = ValidaCPF.geraDigito(cpfSemDigitos); // adiciona dentro da const 
    const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1); // soma com o primeiro digito
    this.novoCPF = cpfSemDigitos + digito1 + digito2; // o novo cpf é a soma dos 3
  }

  static geraDigito(cpfSemDigitos) {
    let total = 0; // adicionando um valor para o total
    let reverso = cpfSemDigitos.length + 1; // adiciona + 1 para o tamanho do cpf

    for(let stringNumerica of cpfSemDigitos) { // pega os elemento de dentro de StringNumerica e atribuir para CpfSemDigitos
      total += reverso * Number(stringNumerica); // o total vai ser a multiplicação de reverso e a StringNumerica
      reverso--; // chamando o reverso e ele perder 1
    }

    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : '0';
  }

  valida() {
    if(!this.cpfLimpo) return false;
    if(typeof this.cpfLimpo !== 'string') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.éSequência()) return false;
    this.geraNovoCpf();

    return this.novoCPF === this.cpfLimpo;
  }
}

let validacpf = new ValidaCPF('070.987.720-03');
// validacpf = new ValidaCPF('999.999.999-99');

if (validacpf.valida()) {
  console.log('CPF válido');
} else {
  console.log('CPF inválido');
}
