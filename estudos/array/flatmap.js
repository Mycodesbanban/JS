// flatmap
// é usado para mapear cada elemento de um array para um novo array e achatar o resultado, caso seja necessário. Ou seja, ele combina o comportamento de map() e flat() em um único método.
// O flat() achata um array, ou seja, ele remove qualquer nível de aninhamento dentro do array.
 const escola= [{
    nome:"turma m1",
    aluno:[{
        nome: "gustavo",
        nota:8.1
    } , {
        nome:"ana",
        nota:9.5
    }]
    } , {
        nome:"turma m2",
        aluno:[{
            nome:"rebeca" , 
            nota:7.3
        } , {
            nome:"pedro", 
            nota:9.8
    }]
    
 }]

 const getNotadoaluno= aluno=>aluno.nota;
 const getNotasdaturma=turma =>turma.aluno.map(getNotadoaluno)
 const notas1=escola.map(getNotasdaturma)
 console.log(notas1);

 Array.prototype.flatMap= function ( callback){
    return Array.prototype.concat.apply([] , this.map(callback));
 }
 const notas2=escola.flatMap(getNotasdaturma);
 console.log(notas2); // o resultado foi um array com as notas da duas turmas 
 