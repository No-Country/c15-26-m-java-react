import { Outlet } from 'react-router-dom';
import CartDetail from '../components/CartDetail';


const Cart = () => {

  return (
    < div className='flex flex-col'>

        <CartDetail/>

        <Outlet/>
      
    </div>
  )
}

export default Cart