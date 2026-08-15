import tenis from "./assets/tenis.png"
function App() {
 

  return (
    <div className="w-full h-full overflow-hidden">
      <div className="w-full h-screen bg-slate-300 flex items-center justify-center p-3 ">
        <div className="bg-white h-135 w-full max-w-4xl shadow-lg flex flex-col md:flex-row items-center justify-center">
         <div className="w-full h-full flex items-center justify-center flex-col md:w-1/2">
          <div className="w-full ">
            <h3 className="hidden md:block text-sm ml-4 font-bold mt-4">Sujeito Maycon</h3>
          </div>
          <div className="w-full h-full flex items-center justify-center group ">
            <div className="mb-2 ">
              <h1 className="text-5xl font-bold mb-2 select-none">Lacamento <br />
                <p className="group-hover:animate-float-right">Nike Air</p>
                </h1> 
                <p className="mb-1 group-hover:animate-pisca-pisca">O tenis do futuro</p>
                <p className="mb-7 group-hover:animate-pisca-pisca">o futuro a um passo do seu alcance! </p>
                <a href="#"
                className="font-bold bg-zinc-800 text-white py-2 px-5 border-2 border-zinc-800 hover:bg-white duration-300 hover:text-black"
                >
                  QUERO CONHECER
                
                </a>
              

            </div>
          </div>

         </div>
         <div className="w-full h-full flex items-center justify-center bg-penis bg-no-repeat bg-center bg-cover md:w-1/2 ">
          <img src={tenis} alt="tenis nike"  className="hover:scale-115 duration-300 max-w-lg w-11/12 md:w-full  object-cover z-30 md:hover:scale-125 hover:rotate-6"/>
         </div>
        </div>
      </div>
    </div>
  )
}

export default App
