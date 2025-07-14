// Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado 
// considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos 
// de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com 
// // idade acima de  30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
function plano ( idade){
    if ( idade <=10){
        console.log("Você paga 180R$")
    }
    else if ( idade <= 30){
        console.log("Você paga 150R$")
    }
    else if(idade <=60){
        console.log("Você pagar 195R$")
    }
    else if ( idade >=61 ){
        console.log("Você pega 230R$")
    } else{
        console.log("ERRO VOCÊ NÂO TEM PLANO")
    }
        
}
plano(10)
plano(90)
plano(31)
plano(60)
plano("A")