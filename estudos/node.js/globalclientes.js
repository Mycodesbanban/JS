// importando o global.js
require("./global"); // estamos carregando o modulo

console.log(minhaapp.saudacao())
minhaapp.nome="hey djunde"; // isso é um problema do escopo global que podemos mudar o nome , mas podemos mudar isso usando o freeze 
console.log(minhaapp.nome)

// evitar esse sistema de usi , é usar o sistema de modulos 