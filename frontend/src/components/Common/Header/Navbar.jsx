import React, { useState } from "react";
import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import { HiBars3 } from "react-icons/hi2";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import CartDrawer from "../../Layout/Cart/CartDrawer";

const Navbar = () => {
    const [drawerOpen, setCartDrawerOpen] = useState(false)

    const toggleCartDrawer = () => {
        setCartDrawerOpen(!drawerOpen)
    }
    
  return (
    <>
      <nav className="container max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* left side logo */}
        <div>
          <Link to={"/"} className="text-2xl font-medium">
            Rabbit
          </Link>
        </div>

        {/* center navigation links */}
        <div className="hidden md:flex space-x-6">
            <Link to={"#"} className="text-gray-700 hover:text-black text-sm font-medium uppercase">men</Link>
            <Link to={"#"} className="text-gray-700 hover:text-black text-sm font-medium uppercase">woman</Link>
            <Link to={"#"} className="text-gray-700 hover:text-black text-sm font-medium uppercase">top wear</Link>
            <Link to={"#"} className="text-gray-700 hover:text-black text-sm font-medium uppercase">bottom wear</Link>
        </div>

        {/* right side icon section */}
        <div className="flex space-x-4">
            <Link to={'/profile'} className="text-gray-700 hover:text-black"> <HiOutlineUser className="h-7 w-6 text-gray-700"></HiOutlineUser> </Link>
            
            <button onClick={toggleCartDrawer} className="relative hover:text-black"> <HiOutlineShoppingBag className="h-6 w-6 text-gray-700"></HiOutlineShoppingBag> <span className="absolute -top-1 bg-rabbit-red text-white text-xs rounded-full px-2">4</span> </button>

            {/* search icon component */}
            <SearchBar></SearchBar>

            <button className="hidden"> <HiBars3 className="h-6 w-6 text-gray-700"></HiBars3></button>            
        </div>
      </nav>

      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer}></CartDrawer>
    </>
  );
};

export default Navbar;
