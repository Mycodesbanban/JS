function novoelemento (tagName , className){
    const elem = document.createElement(tagName)
    elem.className= className
    return elem
}

function Barreira (reversa = false){
    this.elemento = novoelemento("div" , "barreira")

    const borda = novoelemento("div" , "borda")
    const corpo = novoelemento("div" ,"corpo")
    this.elemento.appendChild(reversa ? corpo : borda) // o elemento corpo se reversa for true, ou borda se reversa for false.”
    this.elemento.appendChild(reversa ? borda : corpo) //se reversa for verdadeiro retorna a borda caso for falso retorna o corpo 

    this.setAltura =altura => corpo.style.height = `${altura}px`
}

// const b = new Barreira(false)
// b.setAltura(300)
// document.querySelector("[wm-flappy]").appendChild(b.elemento)

function ParDeBarreiras(altura , abertura , x){
    this.elemento = novoelemento("div" , "par-de-barreiras")

    this.superior = new Barreira(true)
    this.inferior = new Barreira (false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)


    this.sortearAbertura= () => {
        const alturaSuperior  = Math.random()* (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)

    }
    this.getX = () => parseInt(this.elemento.style.left.split("px")[0]) //ParseInt: analisa um valor como uma string e retorna o primeiro inteiro.
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x)
}
// const b = new ParDeBarreiras(700 , 200 , 400)
// document.querySelector("[wm-flappy]").appendChild(b.elemento)

function Barreiras(altura , largura , abertura , espaco , notificarPonto){

    this.pares=[
        new ParDeBarreiras (altura ,abertura , largura),
        new ParDeBarreiras(altura , abertura , largura + espaco),
        new ParDeBarreiras(altura , abertura , largura + espaco * 2),
        new ParDeBarreiras(altura , abertura , largura + espaco * 3)
    ]

    const deslocamento = 3
    this.animar = () =>{
        this.pares.forEach(par =>{
            par.setX(par.getX() - deslocamento)

            // quando o elemento sair da aréa do jogo

            if(par.getX() < -par.getLargura()){ // Verifica se o par de barreiras saiu completamente da esquerda da tela.
                par.setX(par.getX()+ espaco*this.pares.length) //Quando a barreira sai da tela, ela é reposicionada para frente, depois da última barreira atual
                par.sortearAbertura()

            }
            const meio = largura / 2
            const CruzouOMeio = par.getX() + deslocamento >= meio
                && par.getX() < meio // si
               if( CruzouOMeio) notificarPonto()

        })
    }
}

function Passaro (alturaDojogo){
    let voando = false
    this.elemento = novoelemento("img" , "passaro")
    this.elemento.src="imgs/passaro.png"

    this.getY= () => parseInt(this.elemento.style.bottom.split("px")[0]) //  retorna a posição vertical atual do pássaro (em pixels), baseada no estilo bottom
    this.setY = y => this.elemento.style.bottom = `${y}px`

    window.onkeydown = e => voando = true
    window.onkeyup = w => voando = false
    
    this.animar =()=>{
        const novoY = this.getY()+(voando ? 8 : -5)
        const alturaMaxima = alturaDojogo - this.elemento.clientWidth

        if (novoY <=0){
            this.setY(0)
        } else if (novoY >= alturaMaxima){
            this.setY(alturaMaxima)
        } else{
            this.setY(novoY)
        }
    }
    this.setY(alturaDojogo / 2)


//onkeydown: ocorre quando o usuário pressiona uma tecla no teclado.
// onkeyup: ocorre quando o usuário solta uma tecla no teclado
}

// const barreiras = new Barreiras(700 ,1200 , 200 , 400 )
// const passaro = new Passaro(700)
// const AreaDojogo = document.querySelector("[wm-flappy]")
// AreaDojogo.appendChild(passaro.elemento)
// barreiras.pares.forEach(par => AreaDojogo.appendChild(par.elemento))
// setInterval(() => {
//     barreiras.animar()
//     passaro.animar()

// } , 20)

function Progresso (){
    this.elemento= novoelemento("span" , "progresso")
    this.atualizarPontos = pontos =>{
        this.elemento.innerHTML = pontos
    }
    this.atualizarPontos(0)

}
function estaoSobrepostos(elementoA , elementoB){
    const a = elementoA.getBoundingClientRect()
    const b =elementoB.getBoundingClientRect()

    const horizontal = a.left + a.width >= b.left // se o lado esquerdo do a + a largura do a é maior ou igual ao lado esquerdo b , caso for retorna verdadeiro
        && b.left + b.width >=a.left  // comparação se o lado esquerdo do b + a largura é maior ou igual que o lado esquerdo do a , caso for vai retorna verdadeiro

    const vertical = a.top + a.height >= b.top // o topo a + altura do a é maior ou igual a o topo b , caso for retorna verdadeiro 
        && b.top + b.height >= a.top // o topo b + altura do b é maior ou igual ao topo a , caso for retorna verdadeiro
   

        return horizontal && vertical

    //getBoundingClientRect():retorna o tamanho de um elemento e sua posição relativa à janela de visualização
}

function colidiu (passaro , barreira){
    let colidiu = false
    barreira.pares.forEach(pardebarreiras =>{
        if(!colidiu){
            const superior = pardebarreiras.superior.elemento
            const inferior = pardebarreiras.inferior.elemento
            colidiu = estaoSobrepostos(passaro.elemento , superior)
                || estaoSobrepostos(passaro.elemento , inferior)
        }
    })
    return colidiu
}

function FlappyBird(){
    let pontos = 0

    const AreaDojogo = document.querySelector("[wm-flappy]")
    const altura = AreaDojogo.clientHeight
    const largura =AreaDojogo.clientWidth

    const progresso = new Progresso()
    const barreiras = new Barreiras(altura , largura , 200 , 400 , () =>
    progresso.atualizarPontos(++pontos))
    const passaro = new Passaro(altura)

    AreaDojogo.appendChild(progresso.elemento)
    AreaDojogo.appendChild(passaro.elemento)

    barreiras.pares.forEach(par => AreaDojogo.appendChild(par.elemento))

    this.start = () => {
        // loop do jogo
        const temporizador = setInterval(()=>{
            barreiras.animar()
            passaro.animar()
            if(colidiu(passaro , barreiras)){
                clearInterval(temporizador)
            }
        } , 20)
    }
}
new FlappyBird().start()

