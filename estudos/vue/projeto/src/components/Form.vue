<template>
    <div>
        <p>Construa seu hamburguer:</p>
        <div>
            <form id="Form_buguer">
                <div class="input_container">
                    <label for="nome">Nome do Cliente</label>
                    <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite seu nome">
                </div>
                <div class="input_container">
                    <label for="pao">escolha seu pao:</label>
                    <select name="pao" id="pao" v-model="pao">
                        <option value="">selecione seu pao:</option>
                        <option value="">Integral</option>
                    </select>
                </div>
                 <div class="input_container">
                    <label for="carne">escolha sua carne:</label>
                    <select name="carne" id="carne" v-model="pao">
                        <option value="">selecione sua carne:</option>
                        <option value="">cuzida</option>
                    </select>
                </div>
                 <div class="input_container" id="opcionais-container">
                    <label id="opcionais-title" for="opcionais">escolha os opcionais</label>
                    <div class="checkbox_container">
                        <input type="checkbox" name="opcionais" id="opcionais" v-model="opcionais" value="salame">
                        <span>salame</span>
                    </div>
                </div>
                <div class="input_container">
                    <input type="submit" class="submit_btn" value="criar um hambuguer">
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name:"Form"
}
</script>


<style scoped>

 #Form_buguer {
    max-width: 400px;
    margin: 0 auto;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  label {
    font-weight: bold;
    margin-bottom: 15px;
    color: #222;;
    padding: 5px 10px;
    border-left: 4px solid #fcba03;
  }

  input, select {
    padding: 5px 10px;
    width: 300px;
  }

  #opcionais-container {
    flex-direction: row;
    flex-wrap: wrap;
  }

  #opcionais-title {
    width: 100%;
  }

  .checkbox_container {
    display: flex;
    align-items: flex-start;
    width: 50%;
    margin-bottom: 20px;
  }

  .checkbox_container span,
  .checkbox_container input {
    width: auto;
  }

  .checkbox_container span {
    margin-left: 6px;
    font-weight: bold;
  }

  .submit_btn {
    background-color: #222;
    color:#fcba03;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
  }

  .submit_btn:hover {
    background-color: transparent;
    color: #222;
  }

</style>


<!-- <template>
  <Message :msg="msg" v-show="msg" />
  <div>
    <form id="burger-form" method="POST" @submit="createBurger">
      <div class="input-container">
        <label for="nome">Nome do cliente:</label>
        <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite o seu nome">
      </div>
      <div class="input-container">
        <label for="pao">Escolha o pão:</label>
        <select name="pao" id="pao" v-model="pao">
          <option value="">Selecione o seu pão</option>
          <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">{{ pao.tipo }}</option>
        </select>
      </div>
      <div class="input-container">
        <label for="carne">Escolha a carne do seu Burger:</label>
        <select name="carne" id="carne" v-model="carne">
          <option value="">Selecione o tipo de carne</option>
          <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">{{ carne.tipo }}</option>
        </select>
      </div>
      <div id="opcionais-container" class="input-container">
        <label id="opcionais-title" for="opcionais">Selecione os opcionais:</label>
        <div class="checkbox-container" v-for="opcional in opcionaisdata" :key="opcional.id">
          <input type="checkbox" name="opcionais" v-model="opcionais" :value="opcional.tipo">
          <span>{{ opcional.tipo }}</span>
        </div>
      </div>
      <div class="input-container">
        <input class="submit-btn" type="submit" value="Criar meu Burger!">
      </div>
    </form>
  </div>
</template> -->