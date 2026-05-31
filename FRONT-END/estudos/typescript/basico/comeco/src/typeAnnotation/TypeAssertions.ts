// converter de um tipo pra outro 

const body = document.querySelector("body")

if (body) body.style.background = "red"

const body2 = document.querySelector("body") as HTMLBodyElement //  assim que fazemos o type assertions

 body2.style.background = "red"
