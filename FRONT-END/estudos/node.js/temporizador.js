const shedule = require("node-schedule"); // è  uma biblioteca para agendar tarefas em Node.js de forma simples , Ele permite executar funções em horários especificos ou em intervalos regulares , usando expressões no estilo cron.


const tarefa1 = shedule.scheduleJob("*/5 * 21 * * 1" , function(){ // explicação */5 → Executa a cada 5 minutos
    // * → Qualquer minuto
    // 21 → Só roda às 21h
    // * → Qualquer dia do mês
    // * → Qualquer mês
    // 1 → So as segundas 
    // *    *    *    *    *    *
    // ┬    ┬    ┬    ┬    ┬    ┬
    // │    │    │    │    │    │
    // │    │    │    │    │    └ dias da semana (0 - 7) segunda a domingo
    // │    │    │    │    └───── mês (1 - 12)
    // │    │    │    └────────── dia do mês (1 - 31)
    // │    │    └─────────────── hora (0 - 23)
    // │    └──────────────────── minuto (0 - 59)
    // └───────────────────────── segundo (0 - 59)

    // .scheduleJob:é usada para agendar a execução de uma tarefa em um horário específico ou em intervalos regulares.
    // Ela pode ser usada de duas maneiras:
    // 1️⃣ Com uma expressão cron (para horários fixos ou repetitivos)
    // 2️⃣ Com um objeto RecurrenceRule (para regras mais flexíveis)

    console.log("executando tarefa1!" , new Date().getSeconds())//Date() usada para trabalhar com datas e horários
    // .getSeconds:retorna o segundo atual de um objeto
});

setTimeout(function(){
    tarefa1.cancel()//cancela a tarefa atual
    console.log("Cancelamento Tarefa 1!")
 }, 20000) //setTimeout:é usado para executar uma função após um determinado tempo (em milissegundos).


// setImmediate Executando Código Imediatamente Após o Ciclo Atual
// setInterval:Executando Código Repetidamente
const regra = new shedule.RecurrenceRule() // RecurrenceRule: permite definir regras para agendamentos de tarefas de forma flexível
regra.dayOfWeek=[new shedule.Range(1 , 5)] // de segunda (1) a sexta (5)
regra.hour=12
regra.second=30

const tarefa2 = shedule.scheduleJob(regra , function(){
    console.log('Executando Tarefa 2!' , new Date().getSeconds())
})


