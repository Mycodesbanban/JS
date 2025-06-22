// Factory function (Função fábrica)
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome, 
    sobrenome,

    // Getter
    get nomeCompleto() { // estamos querendo apenas obter o valor
      return `${this.nome} ${this.sobrenome}`;
    },

    // Setter
    set nomeCompleto(valor) { // estamos definindo o valor de uma propriedade de um objeto de forma personalizada
      valor = valor.split(' ');
      this.nome = valor.shift(); // remove o primeiro 
      this.sobrenome = valor.join(' '); // vai juntar todos os elementos de um array em uma unica função 
    },

    fala(assunto = 'falando sobre NADA') {
      return `${this.nome} está ${assunto}.`;
    },

    altura: a,
    peso: p,

    // Getter
    get imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
const p2 = criaPessoa('João', 'Otávio', 1.90, 57);
const p3 = criaPessoa('Junior', 'Otávio', 1.5, 110);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);

