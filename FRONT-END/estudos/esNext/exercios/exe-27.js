// Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas 
// crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em 
// quantos anos isso acontecerá. Utilize centímetros para as unidades de medida. 
 function crescimento (altura1 , altura2 , taxa1 , taxa2){
    let menoraltura
    if(altura1 < altura2){
        menoraltura= "A criança 1 tem a menor altura"
    } else if ( altura1 > altura2){
        menoraltura = "A criança 2 tem a menor altura"
    }else{
       menoraltura= "As alturas são identicas"
    }
    console.log(menoraltura)

    const taxadecresimento1=  taxa1
    const taxadecresimento2 = taxa2

    let crescimentoanual1= altura1 
    let crescimentoanual2= altura2 

    let ano = 0

    if ( crescimentoanual1 < crescimentoanual2){
        while(crescimentoanual1 < crescimentoanual2){
            ano++
            crescimentoanual1 += taxadecresimento1
        }
        if ( ano > 13){
            console.log("A criança 1 não vai ultrapasar a criança2 na infancia ")
        } else{
            console.log(` a criança1 vai ultrapassar a criança2 em ${ano}infancia`)
        }   
    }  if( crescimentoanual1 > crescimentoanual2) {
        while(crescimentoanual1 > crescimentoanual2){
            ano++
            crescimentoanual2 += taxadecresimento2
        }
        if(ano > 13){
            console.log("A criança2 não vai ultrapssar a criança1 na infancia")
        }
    } else{
        console.log(` com ${ano} a criança 2 vai ultrapassar a criança 1`)
    }
 }
 crescimento(111 , 2 , 140 , 10)
 crescimento(160 , 2 , 140 , 1)