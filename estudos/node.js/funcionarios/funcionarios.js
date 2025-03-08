const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require("axios");

const chineses= f => f.pais ==="China"
const mulheres = f => f.genero ==="F"
const menor= (f , ataul)=>{
    return  f.salario < ataul.salario ? f : ataul
    
}

axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios)
  
    const f = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menor)
    console.log(f)
})
