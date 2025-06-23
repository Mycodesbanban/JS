// explicação do this completa:
// this se refere ao objeto que está executando a função atual
// ele pode mudar dependendo da função que ele está sendo chamado


function Calculadora() {
  this.display = document.querySelector('.display');  // seleciona a classe display e salva como propriedade do objeto

  this.inicia = () => { // definir uma função
    this.capturaCliques();  // pega os cliques
    this.capturaEnter(); // captura o enter 
  };

  this.capturaEnter = () => {
    document.addEventListener('keyup', e => {
      if (e.keyCode === 13) { // quando clicar no enter vai executar esse evento
        this.realizaConta();
      }
    });
  };

  this.capturaCliques = () => {
    document.addEventListener('click', event => {
      const el = event.target;  // elemento que foi clicado/disparado do html
      if (el.classList.contains('btn-num')) this.addNumDisplay(el);
      if (el.classList.contains('btn-clear')) this.clear();
      if (el.classList.contains('btn-del')) this.del();
      if (el.classList.contains('btn-eq')) this.realizaConta();
    });
  };

  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value);

      if(!conta) {
        alert('Conta inválida');
        return;
      }

      this.display.value = conta;
    } catch(e) {
      alert('Conta inválida');
      return;
    }
  };

  this.addNumDisplay = el => {
    this.display.value += el.innerText;
    this.display.focus();
  };

  this.clear = () => this.display.value = '';
  this.del = () => this.display.value = this.display.value.slice(0, -1);
}

const calculadora = new Calculadora(); // cria uma nova calculadora 
calculadora.inicia(); // e coloca a função inicia , como estpá no this (escopo global) podemos acessar em qualquer lugar 
