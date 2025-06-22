function criaCalculadora() {
  return {
    display: document.querySelector('.display'), // vai definir um objeto display selecionando a classe display

    inicia() { 
      this.cliqueBotoes(); // se refere ao objeto da função criar calculadora
      this.pressionaBackSpace();
      this.pressionaEnter();
    },

    pressionaBackSpace() {
      this.display.addEventListener('keydown', e => { // quando a tecla é precionada acionar esse evento
        if (e.keyCode === 8) { // seleciona o espaço
          e.preventDefault(); // tira o comportamento padrão do navegador 
          this.clearDisplay(); // refere ao  objeto da função criar calculadora
        }
      });
    },

    pressionaEnter() {
      this.display.addEventListener('keyup', e => { // quando soltamos uma tecla precionada vai ocorre esse evento
        if (e.keyCode === 13) { // enter 
          this.realizaConta();
        }
      });
    },

    realizaConta() {
      let conta = this.display.value; // refere ao objeto atual (this) o valor do display

      try {
        conta = eval(conta); // executa em forma de string

        if(!conta) {
          alert('Conta inválida');
          return; // retorna caso a conta seja falsa
        }

        this.display.value = String(conta); // pega o valor do display passa para o objeto atual e converte para uma string
      } catch(e) { // caso ocorra um erro
        alert('Conta inválida');
        return;
      }
    },

    clearDisplay() { // limpa o diplay apos o enter 
      this.display.value = ''; 
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1); // remove o ultimo caractere 
    },


    cliqueBotoes() {
      document.addEventListener('click', e => {
        const el = e.target;

        if(el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }

        if(el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if(el.classList.contains('btn-del')) {
          this.apagaUm();
        }

        if(el.classList.contains('btn-eq')) {
          this.realizaConta();
        }

        this.display.focus();
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    }

  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
