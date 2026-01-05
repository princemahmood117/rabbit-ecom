
import { IoMdClose } from 'react-icons/io';
import CartContents from '../../Cart/CartContents';

const CartDrawer = ({toggleCartDrawer, drawerOpen}) => {    


    return (
        <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-120 h-full bg-gray-200 shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}>
            
            {/* close button */}
            <div className='flex justify-end p-4'>
                <button onClick={toggleCartDrawer} > <IoMdClose className='h-5 w-5 text-gray-600 hover:text-gray-800 cursor-pointer'></IoMdClose> </button>
            </div>

            {/* cart contents */}

            <div className='flex-grow p-4 overflow-y-auto'>
                <h2 className='text-xl font-semibold mb-4'>Your Cart</h2>
                {/* cart content component */}
                <CartContents></CartContents>
            </div>

            {/* checkout button */}
            <div className='p-4 bg-white sticky bottom-0'>
                <button className='w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200 cursor-pointer'>Checkout</button>
                <p className='text-sm tracking-tighter text-gray-500 mt-2 text-center'>Shipping, taxes and discount code calculated at checkout</p>
            </div>
        </div>
    );
};

export default CartDrawer;