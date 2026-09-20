const name:string = "Joao"
const idade:number = 24 
const estudando:boolean = true 

type Status = "pendente"|"Feita"

interface Atividade  {
    id:number;
    titulo:string;
    statu:Status;
}

// const tarefa:Atividade ={
//     id:1,
//     titulo:"Estudar Typescript",
//     statu:"pendente"
// }

const tarefas: Atividade[] = [{id:2, titulo:"estudar viadagem",statu:"Feita"},{id:3, titulo:"matar um cavalo",statu:"Feita"}]

const listarAtividades = ( tarefas:Atividade[]):void =>{
       tarefas.forEach((tarefa) => {
        console.log(`${tarefa.id},${tarefa.titulo},${tarefa.statu}`)
       })
}

listarAtividades(tarefas)

const Pendentes = (tarefas:Atividade[]):number =>{
    return tarefas.filter((tarefa) => tarefa.statu === "pendente").length
}

const quantidades = Pendentes(tarefas)

console.log(`${quantidades}`)


export {}

