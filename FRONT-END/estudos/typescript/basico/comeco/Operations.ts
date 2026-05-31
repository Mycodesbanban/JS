type Documento = {
    titulo: string
    texto:string
    data?: Date
}   
const documento: Documento = {
    titulo:"vers",
    texto:"bisbs"
}


console.log(documento.data ?? "nao existe ")