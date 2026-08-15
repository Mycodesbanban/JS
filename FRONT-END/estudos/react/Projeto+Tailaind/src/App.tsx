import { useState } from 'react'
import {motion} from "framer-motion"
import {ArrowRight, Check, Menu,X , Star, Shield, Zap, Sparkles, Clock1 } from "lucide-react"

const navLinks = [
{
   href:"#features", label:"Recursos"
},
{
   href:"#testmonials", label:"Depoimentos"
},
{
   href:"#pricing", label:"precos"
},
{
   href:"#fag", label:"FAG"
}
]

function App() {
   const [open, setOpen] = useState(false)

  return (
    
     <div className='bg-slate-950 text-slate-100 selection:bg-fuchsia-500/30 min-h-screen '>
         {/* Nav */}
         <header className="stick top-0 border-b border-white/5">
         <div className='m-auto max-w-6xl flex px-4 py-4  items-center justify-between'>
            <a href="#" className='flex items-center gap-2'>
               <Sparkles className='size-5 text-fuchsia-400'/>
               <span className='font-bold tracking-tight'>Minha Marca</span>
            </a>
            <nav className='hidden md:flex items-center gap-6 text-sm'>
               {navLinks.map((i) => (
                  <a href={i.href} key={i.href} className='hover:text-fuchsia-300 transition'>{i.label}</a>
               ))}
            </nav>

            <button className='md:hidden p-2 rounded-lg ' onClick={() => setOpen(true)}>
               <Menu className='size-5'/>
            </button>
         </div>
         {open && (
            <div className="md:hidden">
              <div className='fixed bg-black/60 ' onClick={() => setOpen(false)}>
              <div className='fixed flex  flex-col right-0 top-0 h-full w-80 bg-slate-900 border-l border-white/10 p-6'>
              <div className="flex items-center justify-between mb-2 ">
                      <div className='flex items-center gap-2 '>
                        <Sparkles className='size-6 text-fuchsia-400'/>
                        <span className='font-semibold'>Minha marcar</span>
                      </div> 
                      <button className='p-2 rounded-lg ' onClick={() => setOpen(false)}>
                        <X  className='size-5'/>
                      </button>
                  </div>
                  <div className='flex flex-col gap-4 bg-slate-800 p-4 w-90 '>
                       {navLinks.map((i) => (
                  <a href={i.href} key={i.href} className='hover:text-slate-200 ' onClick={() => setOpen(false)}>{i.label}</a>
               ))}
                  </div>
              </div>
              </div>
            </div>
         )}
         </header>
         {/* hero */}
         <section className='relative overflow-hidden '>
         <div className='mx-auto max-w-6xl px-4 py-20 relative   '>
           <motion.h1 className='text-6xl font-extrabold ' initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:1}}>
            Acelere sua presenca com uma landing <span className='bg-clip-text text-transparent bg-linear-to-r  from-fuchsia-400 to-blue-500'>simples e eficaz!</span>  {/* bg-clip-text: bg somente onde aparecer texto, cria um bg gradiente a direita, e depois comeca com a cor (from-(cor)) */}
           </motion.h1>
           
          <motion.p className='mt-4 text-slate-300 max-2-xl ' initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:.5, delay:.5}}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusantium ab magni officiis magnam voluptatibus dignissimos corrupti perferendis suscipit recusanda.
           </motion.p>
            


          <motion.div className='mt-8 flex flex-row gap-3 ' initial={{opacity:0, y:-30}} animate={{opacity:1, y:0}} transition={{duration:1.2, delay:1}}>
               <a href="#" className='inline-flex items-center justify-center gap-2  rounded-2xl bg-fuchsia-600 px-6 py-3 font-medium hover:bg-fuchsia-700 transition '>Comece agora <ArrowRight className='size-4'/></a>
               <a href="#" className='inline-flex items-center justify-center gap-2  rounded-2xl px-6 py-3 font-medium border border-white/10 hover:bg-white/5 transition'>Ver recursos </a>

           </motion.div>
         
         
            <motion.div className='mt-14 grid grid-cols-3 gap-4 ' initial={{opacity:0, y:-30}} animate={{opacity:1, y:0}} transition={{duration:1.2, delay:1.4}}>
              {["Velocidade", "Seguranca", "Conversao"].map((label, i) => (
               <div key={label} className="roudend-2xl border border-white/10 bg-white/2 p-6">
                  <div className='flex items-center gap-3 '>
                     {i === 0 && <Zap className='size-5 text-emerald-400' />}
                     {i === 1 && <Shield className='size-5 text-sky-400' />}
                     {i === 2 && <Star className='size-5 text-yellow-400' />}
                     <div className="font-semibold">
                        {label}
                     </div>
                  </div>
                  <p className="text-slate-400 text-sm mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, accusamus sit possimus similique architecto voluptatibus.</p>
               </div>
              ))}
           </motion.div>

         </div>
         </section>
            {/* recursos */}

         <section id="features" className='mx-auto max-w-6xl px-4 py-8 '>
            <h2 className='text-3xl font-bold'>Tudo o que voce precisa</h2>
            <p className="text-slate-300 mt-2 max-w-2xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente officia, mollitia, vero nobis explicabo optio</p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {[
                  {titulo: "designer responsivo", desc:"funcionar em qualquer tela" , icon:<Sparkles className='size-5 text-fuchsia-400 '/> },
                  {titulo: "designer responsivo", desc:"funcionar em qualquer tela" , icon:<Star className='size-5 text-yellow-400 '/> },
                  {titulo: "designer responsivo", desc:"funcionar em qualquer tela" , icon:<Zap className='size-5 text-green-400 '/> },
                  {titulo: "designer responsivo", desc:"funcionar em qualquer tela" , icon:<Shield className='size-5 text-sky-400 '/> },
                  {titulo: "designer responsivo", desc:"funcionar em qualquer tela" , icon:<Sparkles className='size-5 text-fuchsia-400 '/> },
                  {titulo: "designer responsivo", desc:"funcionar em qualquer tela" , icon:<Star className='size-5 text-yellow-400 '/> },
               ].map((f) => (
                <div key={f.titulo} className='rounded-2xl border border-white/10 p-6 bg-white/2 '>
                  <div className="flex items-center gap-3">
                     {f.icon}
                     <p className="font-semibold">
                        {f.titulo}
                     </p>
                  </div>
                  <p className='text-sm text-slate-400 mt-2'>{f.desc}</p>
                </div>  
               ))}
            </div>
         </section>
         {/* depoimentos */}

         <section className='mx-auto max-w-6xl px-4 py-8' id='testmonials'>
            <h2 className="text-3xl font-bold">
               Quem usou aprovou
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
               {[1 ,2 ,3 ].map((i)=>(
                  <blockquote key={i} className='rounded-2xl border border-white/10 p-6'>
                     <div className='flex items-center gap-2 text-amber-400'>
                        {Array.from({length:5}).map((_, i) =>(
                           <Star key={i} className='size-4 fill-current'/>
                        ))}
                     </div>
                     <p className='mt-3 text-slate-300'>amei achei muito divonicooooooo esse produto manaaaa</p>
                     <footer className='mt-3 text-sm text-slate-400'>Anonimo</footer>
                  </blockquote>
               ))}
            </div>
         </section>
         <section className='mx-auto max-w-6xl  px-4 py-8' id='price'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <h2 className="text-3xl font-bold"> Plano unico sem complicacao</h2>
                  <p className="text-slate-300 mt-2 max-w-2xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente officia, mollitia, vero nobis explicabo optio</p>
               <ul className="mt-4 space-y-2 text-sm text-slate-300">
                     <li className="flex items-center gap-2">
                     <Check className='size-4 text-emerald-400'/> Beneficio 1
                   </li>
                      <li className="flex items-center gap-2">
                     <Check className='size-4 text-emerald-400'/> Beneficio 2
                   </li>
                      <li className="flex items-center gap-2">
                     <Check className='size-4 text-emerald-400'/> Beneficio 3
                  </li>
               </ul>
            <div className='rounded-3xl border border-white/10 bg-white/2 p-8 '>
               <div className='text-sm text-slate-400'>
               A partir de 
               </div>
               <div className='text-5xl font-extrabold mt-2'>R$ 199,00</div>
               <div className='text-sm text-slate-300 mt-4 flex gap-2 items-center '>
                 <Clock1 className='size-4 text-amber-400'/> <p>Somente hoje</p>
               </div>
               <button className='mt-6 rounded-2xl bg-fuchsia-600 px-6 py-3 font-medium cursor-pointer hover:bg-fuchsia-400'>
                  <a href="#">Comprar Agora</a>
               </button>
            </div>
            </div>
         </section>
         {/* footer  */}
         <footer className='border-t border-white/5 '>
               <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col items-center ">
                  <div className='mb-4'>
                     minha Marcar @{new Date().getFullYear()}
                  </div>
                  <a href="#" className='text-slate-300'>Politica de Privacidade</a>
               </div>
         </footer>
     </div>
    
  )
}

export default App
