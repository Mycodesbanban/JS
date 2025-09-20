import {useState , useEffect} from "react"


// 4- criando o hooks

export const useFecth = (url) =>{ // estamos exportando a função que estamos criando / custom hooks
    const [data , setData] = useState(null) // definindo o estado
    const [ItemID , setItemID] = useState(null)
    const [configuracao , setConfiguracao] = useState(null) 
    const [metodo , setMetodo] = useState(null) 
    const [chamadaFetch , setChamadaFetch] = useState(false)


    // 6- estado de loading
    const [relogar , setRelogar] = useState(false) // definido o estado

    // tratando erro
    const [error , setErro] = useState(null)

    
    // 5 - refatorando o post
    const httpConfiguracao = (data , metodo) =>{
        if(metodo ==="POST"){
            setConfiguracao({
    
                method:"POST" , 
                headers:{
                    "content-type":"application/json" 
                } , 
                body:JSON.stringify(data) 
            });
            setMetodo("POST")
        } else if (metodo === "DELETE"){
            setConfiguracao({

                method:"DELETE" , 
                    headers:{
                        "content-type":"application/json" 
                    }
            })
            setMetodo("DELETE")
            setItemID(data)
        }
        
    }
 


    
    useEffect(()=>{
        const fethcData = async () =>{

            // 6 -loading
            setRelogar(true) // quando ele logar vai alterar para true 
            try{ // se der certo
            const res = await fetch(url) 
            
            const json = await res.json()
            
            setData(json) 
            } catch { // caso ocorrer um erro
                setErro("Houver algum erro ao carregar os dados ")
            }
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
            else if (metodo ==="DELETE"){
               const deleteURL = `${url}/${ItemID}`
               const res = await fetch (deleteURL , configuracao)
               const json = await res.json()

               setChamadaFetch(json)
            }
            
        } 
        if(metodo) {
            asy()
        }
        
    } , [configuracao , metodo, url])
    return {data ,httpConfiguracao , relogar , error}; // retornando
}

// no app.jsx
// const {relogar} = useFecth(url)
//   {/* loading */}
//  {relogar && <p>carregando dados </p>} // se for igual a true ele vai retorna o paragrafo carregamento de dados

