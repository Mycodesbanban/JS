import {useState , useEffect, use} from "react"


// 4- criando o hooks

export const useFecth = (url) =>{ // estamos exportando a função que estamos criando / custom hooks
    const [data , setData] = useState(null) // definindo o estado


    // 6- estado de loading
    const [relogar , setRelogar] = useState(false) // definido o estado

    
    // 5 - refatorando o post
    const httpConfiguracao = (data , method) =>{
        if(method ==="POST"){
            setConfiguracao({
    
                method:"POST" , 
                headers:{
                    "content-type":"application/json" 
                } , 
                body:JSON.stringify(data) 
            });
            setMetodo(method)
        }
    }
    const [configuracao , setConfiguracao] = useState(null) 
    const [metodo , setMetodo] = useState(null) 
    const [chamadaFetch , setChamadaFetch] = useState(false)


    
    useEffect(()=>{
        const fethcData = async () =>{

            // 6 -loading
            setRelogar(true) // quando ele logar vai alterar para true 
            
            const res = await fetch(url) 
            
            const json = await res.json()
            
            setData(json) 

            setRelogar(false) // quando receber os dados vai se alterar para false
        }
        
        fethcData()
    } , [url , chamadaFetch])  
    // o post novo
    useEffect(() =>{
        const asy = async () =>{ 
            if(metodo ==="POST"){ 
                
                
                let FetchOpcoes = [url , configuracao]
                const res = await fetch(...FetchOpcoes) 
                const json = await res.json() 
                setChamadaFetch(json)  
                
            }
            
        } 
        asy() 
        httpConfiguracao()
        
    } , [configuracao , metodo, url])
    return {data ,httpConfiguracao , relogar}; // retornando
}

// no app.jsx
// const {relogar} = useFecth(url)
//   {/* loading */}
//  {relogar && <p>carregando dados </p>} // se for igual a true ele vai retorna o paragrafo carregamento de dados

