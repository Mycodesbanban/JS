

const color={
    p:"#388e3c",
    div:"#1265c0",
    span:"#3e53935",
    section:"#f67809",
    ul:"#5e35b1",
    ol:"#fbc02d",
    header:"#d81b60",
    nav:"#64dd17",
    main:"#00acc1",
    footer:"#304ffe",
    form:"#9f6581",
    body:"#25b6da",
    padrao:"#616161",
    get(tag){
        return this [tag] ? this [tag]:this.padrao
    }
}
document.querySelectorAll(".tag").forEach(box =>{
    const tagName = box.tagName.toLowerCase() 
    //toLoweCase: colocar todas as letras para minusculas
    box.style.borderColor = color.get(tagName) // definido a cor da borda
    if (!box.classList.contains("nolabel")){
        const label = document.createElement("label")
        label.style.backgroundColor = color.get(tagName)
        label.innerHTML=tagName
        box.insertBefore(label , box.childNodes[0])
    }
    // childNodes:somente leitura da interface Node retorna um NodeList dinâmico dos nós filhos do elemento fornecido, onde o primeiro nó filho é atribuído ao índice 0
    // insertBefore:O método da interface Node insere um nó antes de um nó de referência como filho de um nó pai especificado. 
    //document.createElement:Em um documento HTML, o método document.createElement() cria o elemento HTML especificado por localName, ou um HTMLUnknownElement se localName não for reconhecido. 
    // DOMTokenList: conjurto de tokens separados por espaço
    // contains:O método da interface DOMTokenList retorna um valor booleano - verdadeiro se a lista subjacente contiver o token fornecido, caso contrário falso.
     //classList:É uma propriedade somente leitura que retorna uma coleção DOMTokenList ao vivo dos atributos de classe do elemento. Isso pode ser usado para manipular a lista de classes.
})