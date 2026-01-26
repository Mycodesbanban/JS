
import { createContext } from 'react' // server para criar o contexto

export const SomeContext = createContext() // criando um contexto 

export const HookUseContext = ({children}) => {  // criando um componente funcional, e recebe a props que vai representar tudo que estiver dentro do componente quando ele for usado
    const contextValue = "testing Context" // pode ser usado para todos os componentes que consumirem o contexto

    return(
        <SomeContext.Provider value={{contextValue}}> {/* envolve os componentes que teram acesso ao contexto e o que esta dentro do value que sera disponibilizado para todos  */}
            {children} {/* renderiza os componentes filhos dentro do provider */}
        </SomeContext.Provider>
    )
}