const MyNameApp = { // guarda as configuracoes do vue
    data(){ //uma funcao que retorna os dados da aplicacao 
        return{
            //*Basico
            name:"",
            age:15,// dados que estara disponivel no html

            //*Input e Data binding
            input_name:"" //armazena tudo que o usuario escrever no input
        }
    },
    //*Input e Data binding (continua)
    methods:{ // aqui onde fica a nossas funcoes da nossa aplicacao
        submitForm(e){
            e.preventDefault(); //evitar o comportamento padrao dos navegadores
            console.log(this.input_name) //referindo ao data 

            this.name = this.input_name // vai transforma o valor do html igual ao valor do input 

        }
    }
}

Vue.createApp(MyNameApp).mount("#app") //ativa a aplicacao do vue passando as configuracoes que criamos no MyNameApp
