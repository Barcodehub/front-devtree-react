import { Outlet } from "react-router-dom"
import {Toaster} from 'sonner'

export default function AuthLayout() {
  return (

    <>
     <div className='bg-slate-800 min-h-screen'>       {/*importamos el logo para ambas vistas */}
      <div className=' max-w-lg mx-auto pt-10 px-5'>
          <img src="/logo.svg" alt="logotipo" />
    
          <div className='py-10'>
                <Outlet />  {/* se importa lo propio de cada vista */}
            </div>     
      </div>
    <Toaster position='top-right' />  
</div>
  </>
  
)
}
