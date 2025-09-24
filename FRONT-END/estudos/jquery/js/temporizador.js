(function ($){ // proteje o simbolo $
    $.fn.temporizador = function (opcoes){ // criando um metodo que será chamando em qualquer seleção jQuery
    const opcoesFinais = $.extend({ // usando para mesclar os objetos , mais especifico para os valores padrão
        mensagem:"Em breve", // valor padrão caso o usuario não passe nada
        horario:"23:59:59" // valor padrão

    } , opcoes) // as opções que sobreescreve as do usuario 


    const horaDezena = $("<span class='digito'>").html("0") // cria um elemento span com a classe digito e que no html vai está como 0
    const horaUnidade= $("<span class='digito'>").html("0") // cria um elemento span com a classe digito e que no html vai está como 0
    const minutoDezena= $("<span class='digito'>").html("0") // cria um elemento span com a classe digito e que no html vai está como 0
    const minutoUnidade= $('<span class="digito">').html("0") // cria um elemento span com a classe digito e que no html vai está como 0
    const segundoDezena = $('<span class="digito">').html("0") // cria um elemento span com a classe digito e que no html vai está como 0
    const segundoUnidade = $('<span class="digito">').html("0") // cria um elemento span com a classe digito e que no html vai está como 0

    const separadorHora = $("<span class='separador'>").html(":") // cria um elemento span com a classe separador e que no html vai está como :
    const separadorMinuto= $("<span class='separador'>").html(":")  //cria um elemento span com a classe separador e que no html vai está como :

    const mensagem  = $("<div class ='mensagem'>").html(opcoesFinais.mensagem) // cria uma div com a classe mensagem e vai passar a mensagem , caso o usario passe , vai retorna a mensagem do usuario , caso não vai retorna a padrão

    $(this).addClass("temporizador") // o this aponta para as divs que chamaram o elemento temporizador
    $(this).append(horaDezena , horaUnidade, separadorHora, minutoDezena , minutoUnidade , separadorMinuto , segundoDezena , segundoUnidade , mensagem) // adicionando os elementos que nos criamos para a div com o temporizador 

    const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/) // cria um grupo de captura e esses dois pontos e para separar o grupo de captura

    const horarioAlvo = regex.exec(opcoesFinais.horario) // ter acesso a hora 

    let temporizador = setInterval(() =>{
        const agora = new Date() //pega a data atual
        const alvo = new Date() // pega a data atual
        alvo.setHours(horarioAlvo[1]) // define as horas
        alvo.setMinutes(horarioAlvo[2]) // define os minutos 
        alvo.setSeconds(horarioAlvo[3]) // define os segundos

        const diferencaEmMil= alvo.getTime() - agora.getTime()  // calcula a diferença entre o horario futuro que queremos alcançar e o agora
        if(diferencaEmMil >= 0){
            const diferenca = regex.exec(new Date(diferencaEmMil).toISOString())

            horaDezena.html(diferenca[1][0]) // vamos pega a hora e vamos pegar a primeira parte que é a da dezena
            horaUnidade.html(diferenca[1][1]) // vamos pega a hora e vamos pegar a segunda parte que é a unidade
            minutoDezena.html(diferenca[2][0]) // vamos pega o minuto e vamos pegar a primeira parte que é a dezena 
            minutoUnidade.html(diferenca[2][1])// vamos pega o minuto e vamos pegar a segunda parte que é a unidade
            segundoDezena.html(diferenca[3][0]) // vamos pega o segundo e vamos pega a primeira parte de que é a dezena 
            segundoUnidade.html(diferenca[3][1]) //vamos pega o segundo e vamos pega a segunda parte que é a unidade

        }else{
            clearInterval(temporizador) // limpa o temporizador e vai parar de ficar monitorando
        }
    } , 1000)



        return this // permite continuar usando metodos depois e garante o encadiamento de funções e metodos
    }
})(jQuery)


// RegExp:é um construtor de expressões regulares
// exec():Executa uma busca por um padrão (regex) dentro de uma string e Retorna um array com os resultados da correspondência (match),Ou retorna null se nada foi encontrado.
// setHours(): define as horas
// setMinutes(): define os minutos
// setSeconds(): define os segundos
// getTime(): retorna o tempo em milisegundos
//toISOString(): converte a data para uma string no formato ISO 8601, que é um formato padrão internacional de data e hora.