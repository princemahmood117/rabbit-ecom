
import { IoMdClose } from 'react-icons/io';

const CartDrawer = ({toggleCartDrawer, drawerOpen}) => {    


    return (
        <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-gray-200 shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}>
            
            {/* close button */}
            <div className='flex justify-end p-4'>
                <button onClick={toggleCartDrawer} > <IoMdClose className='h-5 w-5 text-gray-600 hover:text-gray-800 cursor-pointer'></IoMdClose> </button>
            </div>
        </div>
    );
};

export default CartDrawer;