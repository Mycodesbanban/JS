function removervogais(nome){
    const vogais=["A" ,"a" , "e" , "E" , "O", "o" , "U" , "u" , "i" ,"I"]
    vogais.forEach(vogal=> nome=nome.replace(vogal , ""))
    return nome
}
console.log(removervogais("coder"));

