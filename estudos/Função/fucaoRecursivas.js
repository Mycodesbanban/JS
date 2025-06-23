function recursiva (max){
    if (max >=10) return; // não deixa a função continuar caso for maior ou igual a 10   
    max++; // incrementar
    console.log(max) // mostra o valor max no console
    recursiva(max) // chama a função de novo com o novo valor 
}
recursiva(-10)