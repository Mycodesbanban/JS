
import './App.css'
import uberlogo from "./assets/uberlogo.png"
import post1 from "./assets/post1.png"
import post2 from "./assets/post2.png"
import qrcode1 from "./assets/qrcode1.png"
import qrcode2 from "./assets/qrcode2.png"
import playstore from "./assets/playstore.png"
import lojapple from "./assets/lojapple.png"




function App() {


  return (
    <div>

    <div className='w-full bg-black h-20 px-2'>
      <div className='h-20 w-full flex items-center justify-between max-w-7xl mx-auto'>
    <div className='flex items-center'><img src={uberlogo} alt="imagem" className='w-20 mr-5'/>
     <nav className='hidden items-center gap-5 sm:flex' >
      <a href="#" className='text-white font-medium hover:bg-gray-800 px-2 py-2 rounded-full duration-500'>Company </a>
      <a href="#" className='text-white font-medium hover:bg-gray-800  px-2 py-2 rounded-full duration-500'>Safeety</a>
      <a href="#" className='text-white font-medium hover:bg-gray-800  px-2 py-2 rounded-full duration-500'>Help</a>
    </nav>
    </div>
    <div className=' flex items-center gap-4'>
      <a href="#" className='text-white font-medium'>Login</a>
      <a href="#" className='text-black font-medium bg-white px-3 py-1 rounded-full'>cadrasto</a>
    </div>
   
      </div>

    </div>

    {/* body */}
    <div className='w-full bg-uber bg-no-repeat bg-cover bg-left sm:py-11 ' >
      <div className='w-full max-w-7xl mx-auto flex'>

        <div className='bg-white max-w-lg w-full md:mx-2 md:my-2  '>
          <div className='bg-slate-100 flex items-center w-full justify-between'>
            <span className='flex-1 pt-3 flex flex-col items-center justify-center gap-2 ' >
              <i className='fa fa-signal ' style={{fontSize:"32px"}} ></i>
              <p className='text-center font-medium'>Faca viagens ou entregas</p>
              <span className='w-full bg-black h-[1.5px]'></span>
            </span>
             <span className='flex-1 pt-3 flex flex-col items-center justify-center gap-2 ' >
              <i className='fa fa-car ' style={{fontSize:"32px"}} ></i>
              <p className='text-center font-medium'> Viajar </p>

            </span>
             <span className='flex-1 pt-3 flex flex-col items-center justify-center gap-2 ' >
              <i className='fa fa-key ' style={{fontSize:"32px"}} ></i>
              <p className='text-center font-medium'>alugue seus carros</p>
        
            </span>
          </div>
          <div className='flex flex-col gap-5 px-4 my-4'>
          <h1 className='font-bold text-4xl max-w-sm'>Assuma o comando e ganhe. </h1>
          <p className='max-w-sm'> Dirija na plataforma com maior rede de usuarios ativos.</p>
          <button className='bg-black self-start text-white rounded-lg py-2 px-6 font-medium hover:scale-105 duration-200'>
            cadraste-se para dirigir 
          </button >
          <a href="#" className='text-gray-700 mt-7 mb-4 border-b-2 self-start hover:border-gray-900 duration-300'>Saiba mais como dirigir e fazer entregas  </a>
          </div>
        </div>

      </div>
    </div>
      <div className='w-full py-11 bg-city bg-no-repeat bg-cover bg-right px-2'>
        <div className='w-full max-w-7xl mx-auto flex flex-col gap-5'>
          <h1 className='text-3xl lg:text-4xl font-bold w-full max-w-2xl '>A plataforma Uber que voce conhece, reinventada para empresas</h1>
          <p className='font-medium text-sm max-w-2xl md:text-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci labore omnis veniam veritatis nam, voluptas vel voluptatibus aperiam dignissimos eveniet possimus soluta est incidunt assumenda vitae error repudiandae quas laudantium.</p>
          <button className='bg-black self-start text-white px-6 py-2 rounded-lg hover:scale-105 duration-200 font-medium'>Comecar</button>
        </div>
      </div>
      <div className='w-full px-2 py-8 sm:py-11 '>
        <div className='w-full flex flex-col max-w-7xl mx-auto '>
            <h1 className='font-bold text-2xl max-w-2xl sm:text-4xl mb-6'>Preocupados com a seguranca, onde quer que voce va</h1>
            <div className='w-full flex flex-col gap-4 sm:flex-row'>
              <a href="#" className='flex-1' >
                <span className='flex flex-col gap-2'>
                  <img src={post1} alt="post" className='opacity-85 hover:opacity-100 hover:scale-95 duration-200' />
                  <h2 className='font-bold text-lg'>sua Seguranca e nossa prioridade</h2>
                  <p className='text-stone-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iusto quae quidem possimus commodi deleniti qui tenetur molestiae exercitationem. Asperiores aperiam veniam at mollitia molestiae iste, temporibus rem error alias!</p>
                </span>
              </a>
                <a href="#" className='flex-1'>
                <span className='flex flex-col gap-2'>
                  <img src={post2} alt="post" className='opacity-85 hover:opacity-100 hover:scale-95  duration-200' />
                  <h2 className='font-bold text-lg'>Colocamos mais de 10.000 cidades em movimento</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iusto quae quidem possimus commodi deleniti qui tenetur molestiae exercitationem. Asperiores aperiam veniam at mollitia molestiae iste, temporibus rem error alias!</p>
                </span>
              </a>
            </div>
        </div>
      </div>
      <div className='w-full px-2 py-8 sm:py-11'>
        <div className='w-full max-w-7xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-3  '>
          <span className='flex flex-col gap-4'>
            <i className='fa fa-users' style={{fontSize:"32px"}}></i>
            <h2 className='font-bold text-xl'>Quem somos</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nobis asperiores voluptates aliquam pariatur fuga </p>
            <a href="#" className='text-gray-600 mt-3 border-b-2 self-start hover:border-gray-400 hover:text-black duration-200'>saiba sobre a uber </a>
          </span>
          <span className='flex flex-col gap-4'>
            <i className='fa fa-clipboard' style={{fontSize:"32px"}}></i>
            <h2 className='font-bold text-xl'>Newsroom</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nobis asperiores volssssuptates aliquam pariatur fuga </p>
            <a href="#" className='text-gray-600 mt-3 border-b-2 self-start hover:border-gray-400 hover:text-black duration-200'>acessar o newsroom </a>
          </span>
          <span className='flex flex-col gap-4'>
            <i className='fa fa-home' style={{fontSize:"32px"}}></i>
            <h2 className='font-bold text-xl'>Cidadania global </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nobis asperiores voluptates aliquam pariatur c sbae que nfuga </p>
            <a href="#" className='text-gray-600 mt-3 border-b-2 self-start hover:border-gray-400 hover:text-black duration-200'>see our partnerships </a>
          </span>
        </div>
      </div>
      <div className='w-full px-2 py-8 sm:py-11 bg-gray-300'>
        <div className='w-full max-w-7xl mx-auto gap-4 '>
        <h2 className='font-bold text-2xl md:text-4xl '>E mais facil pelo o app</h2>
        <div className='flex flex-col w-full gap-5 md:flex-row'>
        <a href="#" className='flex w-full border-slate-300 px-4 py-6 bg-white items-center justify-between hover:shadow-lg duration-400'>
          <div className='flex'>
            <img src={qrcode1} alt="instalar app" className='hidden md:flex mr-4 w-1/3' />
            <div>
              <h3 className='font-bold text-xl'>Baixe o app da Uber </h3>
              <p className='hidden md:block '>Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <i className='fa fa-chevron-right hover:scale-105 duration-200' style={{fontSize:"24px"}}></i>
        </a>
                <a href="#" className='flex w-full border-slate-300 px-4 py-6 bg-white items-center justify-between hover:shadow-lg duration-400'>
          <div className='flex'>
            <img src={qrcode2} alt="instalar app" className='hidden md:flex mr-4 w-1/3' />
            <div>
              <h3 className='font-bold text-xl'>Baixe o app parceiro </h3>
              <p className='hidden md:block '>Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <i className='fa fa-chevron-right hover:scale-105 duration-200' style={{fontSize:"24px"}}></i>
        </a>
        </div>
        </div>
      </div>
        <div className='w-full px-2 py-8 sm:py-11'>
          <div className='w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-5'>
            <a href="#" className='flex items-center w-full justify-between border-b-[1.5px] border-gray-950 py-6 hover:text-gray-800 duration-200 '>
              <h2 className='font-bold text-3xl lg:text-5xl max-w-xs'>Cadreste pra dirigir </h2>
              <i className='fa fa-arrow-right' style={{fontSize:"32px"}}></i>
            </a>
               <a href="#" className='flex items-center w-full justify-between border-b-[1.5px] border-gray-950 py-6 hover:text-gray-800 duration-200 '>
              <h2 className='font-bold text-3xl lg:text-5xl max-w-xs'>Cadreste pra viajar </h2>
              <i className='fa fa-arrow-right' style={{fontSize:"32px"}}></i>
            </a>
          </div>
        </div>
        <div>
        </div>
        <footer className='bg-black flex flex-col items-center justify-center py-12 gap-4'>
          <img src={uberlogo} alt="uber logo" className='w-20  '/>
          <span className='text-white'>@2023 direito de Maycon</span>
          <div className='flex flex-col sm:flex-row gap-4 items-center justify-center'>
            <a href="#" className='w-full flex items-center justify-center  '>
            <img src={playstore} alt="playstore" className='w-2/3 sm:w-full' />
            </a>
             <a href="#" className='w-full flex items-center justify-center'>
            <img src={lojapple} alt="applestore" className='w-2/3 sm:w-full' />
            </a>
          </div>  
        </footer>
    </div>
    


  )
}

export default App
