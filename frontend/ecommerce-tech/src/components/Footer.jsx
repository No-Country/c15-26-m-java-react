import logo_footer from '../assets/logo_footer.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import youtube from '../assets/youtube.svg'
import whatsapp from '../assets/whatsapp.svg'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className=" flex flex-wrap place-content-center bg-blue-600"> 
    <div className='w-[347px] h-[222px] flex gap-4 items-center'>
      <div className='w-[168px] h-[144px]'>
        <img src={logo_footer} alt="logo" />
      </div>
      <div className='w-[103px] h-[164px] pt-2'>
        <nav>
          <ul className='flex  flex-col gap-3'>
            <li className='text-sm text-gray-200'><NavLink to={'/'}>Home</NavLink></li>
            <li className='text-sm text-gray-200'><NavLink to={'/products'}>Productos</NavLink></li>
            <li className='text-sm text-gray-200'><NavLink to={'/tracking'}>Seguimiento</NavLink></li>
            <li className='text-sm text-gray-200'><NavLink to={'/help'}>Soporte</NavLink></li>
            <li className='text-sm text-gray-200'>Sobre nosotros</li>
          </ul>
        </nav>
      </div>
    </div>
    <div className='w-[350px] h-[222px] flex flex-col gap-4 '>
      <div className='flex gap-3'>
        <div className='w-[166px] h-[109px] flex  mt-9  '>
          <nav>
            <ul className='flex flex-col gap-3'>
              <li className='text-sm text-gray-200'>Legal</li>
              <li className='text-sm text-gray-200'>Políticas de privacidad</li>
              <li className='text-sm text-gray-200'>Políticas de garantías</li>
              <li className='text-sm text-gray-200'>Políticas de envíos</li>
            </ul>
          </nav>
        </div>
        <div className='w-[167px] h-[78px] flex flex-col  mt-9 '>
        <nav>
            <ul className='flex flex-col gap-3'>
              <li className='text-sm text-gray-200'>Contáctanos</li>
              <li className='text-sm text-gray-200'>bluegragon@store.com</li>
              <li className='text-sm text-gray-200'>+54 123 5555 5555</li>
            </ul>
          </nav>
        </div>
      </div>
      <div className='w-[350px] h-[72px] flex gap-2 items-center place-content-end'>
        <div className='h-10 w-10'><img src={facebook} alt="facebook" /></div>
        <div className='h-10 w-10'><img src={whatsapp} alt="whatsapp" /></div>
        <div className='h-10 w-10'><img src={instagram} alt="instagram" /></div>
        <div className='h-10 w-10'><img src={youtube} alt="youtube" /></div>
        <div className='h-10 w-10'><img src={twitter} alt="twitter" /></div>

      </div>
    </div>
    </footer>
  )
}

export default Footer