const anonimo = process.argv.indexOf("-a") !==-1
//process é um objeto global no Node.js que fornece informações e controle sobre o processo em execução.
// process.argv: é um array que contém os argumentos passados para o script quando ele é executado no terminal.
// indexOf(): é usado para encontrar a posição de um argumento específico dentro desse array.

const os = require('os'); //os:O módulo OS fornece informações sobre o sistema operacional do computador.

console.log(anonimo) // quando excutamos no terminal o resultado vai ser true , se caso colocasse -b o resultado seria false 

if(anonimo){
    process.stdout.write(`fala Anônimo!${os.EOL}`) // resultado no terminal = fala Anônimo 
    // process.stdout é um fluxo de saida no Node.js que permite imprimir mensagens no terminal
    // process.stdout.write() é usado no Node.js para escrever dados diretamente no console sem adicionar automaticamente uma nova linha.
    //os.EOL: representa o caractere de fim de linha (ou nova linha) adequado para o sistema operacional atual.
    // \\n quebra linha
    process.exit() // finalizar o processo no Node.js 
} else{
    process.stdout.write("informe seu nome:")
    process.stdin.on("data" , data=>{ // colocamos uma arrow function 
        const nome = data.toString().replace(os.EOL, "")
        // toString: converte valores em strings
        //replace: vai substituir o \n por um espaço vazio 
        process.stdout.write(` Fala ${nome}!! ${os.EOL}`) // vai mostra no terminal o nome do usuario que escreveu em uma nova linha
        process.exit() // finalizando o processo
    })
    //process.stdin:é um fluxo de entrada no Node.js que permite ler dados digitados pelo usuário no terminal
    //.on e usado para executadar eventos em objetos

}
