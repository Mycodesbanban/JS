import { useState } from "react"
import jpg1 from "./assets/1.jpg";
import jpg2 from "./assets/2.jpg";
import jpg3 from "./assets/3.jpg";
import jpg4 from "./assets/4.jpg";
import jpg5 from "./assets/5.jpg";
import jpg6 from "./assets/6.jpg";
function App() {
  const [menuaberto, setMenuAberto] = useState(false)
 
  return (
      <div className="h-screen w-full bg-slate-200">
      <div className="flex w-full ">
        {/* sidebar */}
        <div className="border-r-2 hidden sm:flex w-full max-w-50 min-h-screen relative bg-white flex-col px-2 py-5">
          <div className="fixed">
            <div>
              <h1 className="text-rose-500 text-3xl font-bold">DevHouse</h1>
            </div>
            <nav className="flex flex-col mt-8 w-full gap-5 ">
              <a href="#" className="text-gray-500 font-medium hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-200">Aluguel</a>
              <a href="#" className="text-gray-500 font-medium hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-200">Comprar</a>
              <a href="#" className="text-gray-500 font-medium hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-200">Servicos</a>
              <a href="#" className="text-gray-500 font-medium hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-200">Contatos</a>
            </nav>
          </div>
          <button className="w-11 h-11 rounded-full bg-gray-100 fixed z-30 bottom-5 left-4 hover:bg-gray-300 duration-200" id="btn-close">
            <i className="fa fa-phone" style={{fontSize:"16px"}}></i>
          </button>
        </div>


        {/* body */}
        <div className="w-full flex flex-col  pb-4">
          <div className={`absolute z-50 w-full ${
            menuaberto ? "flex" : "hidden"
          } flex-col items-center px-3 py-2 bg-white shadow-2xl`} >
            <button className="text-3xl text-bold mt-4" onClick={() => setMenuAberto(false)}>X</button>
            <nav className="flex flex-col mt-8 gap-5 w-full ">   
              <a href="#" className="text-gray-500 font-medium hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-200">Aluguel</a>
              <a href="#" className="text-gray-500 font-medium hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-200">Comprar</a>
              <a href="#" className="text-gray-500 font-medium hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-200">Servicos</a>
              <a href="#" className="text-gray-500 font-medium hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-200">Contatos</a>
              </nav>
          </div>


        {/* header */}
        <header className="bg-white py-5 px-3 w-full flex flex-row items-center justify-between">
        <div className="flex items-center bg-slate-100 px-2 py-2 max-w-xs lg:max-w-[50%] rounded-lg lg:mr-8">
          <i className="fa fa-search text-gray-500" style={{fontSize:"16px"}}></i>
          <input type="text" className="w-full bg-slate-100 px-2 outline-none"  placeholder="Procurando algum aluguel?"/>
        </div>

        <div className=" flex gap-3 items-center">
          <a href="#" className="w-8 h-8 p-5 bg-slate-100 hidden md:flex items-center justify-center rounded-full">
            <i className="fa fa-heart text-gray-500" style={{fontSize:"16px"}}></i>
          </a>

          <button className="bg-rose-500 hover:bg-rose-600 duration-300 text-white flex items-center justify-center gap-2 px-4 py-2 rounded font-medium " id="btn-open">
            <span className="hidden md:flex">Sign In</span>
            <i className="fa fa-user text-slate-50 md:ml-1" style={{fontSize:"16px"}}></i>
          </button>
          <button className="flex items-center justify-center px-4 py-2 md:hidden" onClick={() => setMenuAberto(true)}>
            <i className="fa fa-bars" style={{fontSize:"26px"}}></i>
          </button>
        </div>

        </header>

          {/* casas */}

          <div className="w-full px-3 lg:px-6">
            <div className="flex w-full items-baseline justify-between">
              <h1 className="text-3xl font-bold sm:text-4xl mt-4 mb-6  ">Compre ou alugue </h1>
              <span className="hidden md:block text-gray-600">100 casas encontradas</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a href="#" className="bg-white p-3 min-h-100 relative flex flex-col hover:shadow-lg duration-300 ">
                <div className="group overflow-hidden rounded-2xl">
                  <div className="absolute z-40 top-5 left-5 ">
                    <div className="flex bg-slate-50/70 group-hover:bg-slate-50 duration-300 self-start items-center justify-center gap-3 px-3 py-1 rounded-full  
                     ">
                      <i className="fa fa-map" style={{fontSize:"12px"}}></i>
                      <p className="font-medium text-sm">Campos pretos</p>
                    </div>
                  </div>
                  <div>
                    <img src={jpg1} alt="CASA CASA CASA CASA CASA PRA ALUGAR URGENTE "  className="rounded-2xl w-full h-64 object-cover group-hover:scale-110 duration-300"/>
                  </div>
                  <div className="w-full flex flex-col gap-1 my-2 ">
                    <h2 className="text-lg font-bold ">Apertamento Grande</h2>
                    <div>
                      <p className="text-gray-600 line-through text-sm"> r$ 3000/mes </p>
                       <p className="my-1 text-indigo-500 "> r$ 2400/mes </p>
                    </div>
                  </div>
                </div>
                <div className="mt-auto">
                  <span className="font-medium text-sm ">100mts -</span>
                  <span>2 quartos -</span>
                  <span>2 banheiros</span>
                </div>
              </a>
               <a href="#" className="bg-white p-3 min-h-100 relative flex flex-col hover:shadow-lg duration-300 ">
                <div className="group overflow-hidden rounded-2xl">
                  <div className="absolute z-40 top-5 left-5 ">
                    <div className="flex bg-slate-50/70 group-hover:bg-slate-50 duration-300 self-start items-center justify-center gap-3 px-3 py-1 rounded-full  
                     ">
                      <i className="fa fa-map" style={{fontSize:"12px"}}></i>
                      <p className="font-medium text-sm">Campos pretos</p>
                    </div>
                  </div>
                  <div>
                    <img src={jpg2} alt="CASA CASA CASA CASA CASA PRA ALUGAR URGENTE "  className="rounded-2xl w-full h-64 object-cover group-hover:scale-110 duration-300"/>
                  </div>
                  <div className="w-full flex flex-col gap-1 my-2 ">
                    <h2 className="text-lg font-bold ">Apertamento Grande</h2>
                    <div>
                      <p className="text-gray-600 line-through text-sm"> r$ 3000/mes </p>
                       <p className="my-1 text-indigo-500 "> r$ 2400/mes </p>
                    </div>
                  </div>
                </div>
                <div className="mt-auto">
                  <span className="font-medium text-sm ">100mts -</span>
                  <span>2 quartos -</span>
                  <span>2 banheiros</span>
                </div>
              </a> 
              <a href="#" className="bg-white p-3 min-h-100 relative flex flex-col hover:shadow-lg duration-300 ">
                <div className="group overflow-hidden rounded-2xl">
                  <div className="absolute z-40 top-5 left-5 ">
                    <div className="flex bg-slate-50/70 group-hover:bg-slate-50 duration-300 self-start items-center justify-center gap-3 px-3 py-1 rounded-full  
                     ">
                      <i className="fa fa-map" style={{fontSize:"12px"}}></i>
                      <p className="font-medium text-sm">Campos pretos</p>
                    </div>
                  </div>
                  <div>
                    <img src={jpg3} alt="CASA CASA CASA CASA CASA PRA ALUGAR URGENTE "  className="rounded-2xl w-full h-64 object-cover group-hover:scale-110 duration-300"/>
                  </div>
                  <div className="w-full flex flex-col gap-1 my-2 ">
                    <h2 className="text-lg font-bold ">Apertamento Grande</h2>
                    <div>
                      <p className="text-gray-600 line-through text-sm"> r$ 3000/mes </p>
                       <p className="my-1 text-indigo-500 "> r$ 2400/mes </p>
                    </div>
                  </div>
                </div>
                <div className="mt-auto">
                  <span className="font-medium text-sm ">100mts -</span>
                  <span>2 quartos -</span>
                  <span>2 banheiros</span>
                </div>
              </a>
               <a href="#" className="bg-white p-3 min-h-100 relative flex flex-col hover:shadow-lg duration-300 ">
                <div className="group overflow-hidden rounded-2xl">
                  <div className="absolute z-40 top-5 left-5 ">
                    <div className="flex bg-slate-50/70 group-hover:bg-slate-50 duration-300 self-start items-center justify-center gap-3 px-3 py-1 rounded-full  
                     ">
                      <i className="fa fa-map" style={{fontSize:"12px"}}></i>
                      <p className="font-medium text-sm">Campos pretos</p>
                    </div>
                  </div>
                  <div>
                    <img src={jpg4} alt="CASA CASA CASA CASA CASA PRA ALUGAR URGENTE "  className="rounded-2xl w-full h-64 object-cover group-hover:scale-110 duration-300"/>
                  </div>
                  <div className="w-full flex flex-col gap-1 my-2 ">
                    <h2 className="text-lg font-bold ">Apertamento Grande</h2>
                    <div>
                      <p className="text-gray-600 line-through text-sm"> r$ 3000/mes </p>
                       <p className="my-1 text-indigo-500 "> r$ 2400/mes </p>
                    </div>
                  </div>
                </div>
                <div className="mt-auto">
                  <span className="font-medium text-sm ">100mts -</span>
                  <span>2 quartos -</span>
                  <span>2 banheiros</span>
                </div>
              </a> 
              <a href="#" className="bg-white p-3 min-h-100 relative flex flex-col hover:shadow-lg duration-300 ">
                <div className="group overflow-hidden rounded-2xl">
                  <div className="absolute z-40 top-5 left-5 ">
                    <div className="flex bg-slate-50/70 group-hover:bg-slate-50 duration-300 self-start items-center justify-center gap-3 px-3 py-1 rounded-full  
                     ">
                      <i className="fa fa-map" style={{fontSize:"12px"}}></i>
                      <p className="font-medium text-sm">Campos pretos</p>
                    </div>
                  </div>
                  <div>
                    <img src={jpg5} alt="CASA CASA CASA CASA CASA PRA ALUGAR URGENTE "  className="rounded-2xl w-full h-64 object-cover group-hover:scale-110 duration-300"/>
                  </div>
                  <div className="w-full flex flex-col gap-1 my-2 ">
                    <h2 className="text-lg font-bold ">Apertamento Grande</h2>
                    <div>
                      <p className="text-gray-600 line-through text-sm"> r$ 3000/mes </p>
                       <p className="my-1 text-indigo-500 "> r$ 2400/mes </p>
                    </div>
                  </div>
                </div>
                <div className="mt-auto">
                  <span className="font-medium text-sm ">100mts -</span>
                  <span>2 quartos -</span>
                  <span>2 banheiros</span>
                </div>
              </a> 
              <a href="#" className="bg-white p-3 min-h-100 relative flex flex-col hover:shadow-lg duration-300 ">
                <div className="group overflow-hidden rounded-2xl">
                  <div className="absolute z-40 top-5 left-5 ">
                    <div className="flex bg-slate-50/70 group-hover:bg-slate-50 duration-300 self-start items-center justify-center gap-3 px-3 py-1 rounded-full  
                     ">
                      <i className="fa fa-map" style={{fontSize:"12px"}}></i>
                      <p className="font-medium text-sm">Campos pretos</p>
                    </div>
                  </div>
                  <div>
                    <img src={jpg6} alt="CASA CASA CASA CASA CASA PRA ALUGAR URGENTE "  className="rounded-2xl w-full h-64 object-cover group-hover:scale-110 duration-300"/>
                  </div>
                  <div className="w-full flex flex-col gap-1 my-2 ">
                    <h2 className="text-lg font-bold ">Apertamento Grande</h2>
                    <div>
                      <p className="text-gray-600 line-through text-sm"> r$ 3000/mes </p>
                       <p className="my-1 text-indigo-500 "> r$ 2400/mes </p>
                    </div>
                  </div>
                </div>
                <div className="mt-auto">
                  <span className="font-medium text-sm ">100mts -</span>
                  <span>2 quartos -</span>
                  <span>2 banheiros</span>
                </div>
              </a>
            </div>
          </div>


          
        </div>
      </div>


      </div>
  )
}

export default App
