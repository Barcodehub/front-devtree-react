//rfc (generar estructura basica del componente)
import {Link} from 'react-router-dom'

export default function LoginView() {
  return (
    <>
      <h1 className='text-4x text-white font-bold'>Inicia Sesion</h1>



    <nav className='mt-10'>

        <Link 
        className='text-center text-white text-lg block'
        to="/auth/register">
        Registrate
        </Link>

    </nav>

    </>
  )
}
