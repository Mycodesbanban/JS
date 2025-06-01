import {useState , useEffect} from "react"


// 4- criando o hooks

export const useFecth = (url) =>{ // estamos exportando a função que estamos criando / custom hooks
    const [data , setData] = useState(null) // definindo o estado

    useEffect(()=>{
        const fethcData = async () =>{
            const res = await fetch(url) // espera a resquisição da url

            const json = await res.json() // espera os json ser convertido para js

            setData(json) // alterando o estado
        }

        fethcData()
    } , [url]) // toda vez que a url mudar ele vai fazer essa requisição
return {data}; // retorna um objeto contendo o estado de data 
}
// no app.jsx
//  const {data} = useFecth(url) chamando o data do useFeacth o hook que criamos 
