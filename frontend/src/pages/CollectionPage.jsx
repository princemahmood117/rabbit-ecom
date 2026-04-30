import React, { useEffect, useRef, useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import FilterSidebar from '../components/Products/FilterSidebar';
import SortOptions from '../components/Products/SortOptions';
import ProductGrid from '../components/Products/ProductGrid';

const CollectionPage = () => {

    const [products,setProducts] = useState([])
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    console.log(products);

    const sidebarRef = useRef(null)


    useEffect(()=> {
        setTimeout(() => {
        const fetchProducts = [
    {
    _id: 1,
    name: "Classic Cotton T-Shirt",
    price: 1299,
    images: [
      { url: "https://picsum.photos/500/500?random=1" },     
    ],
  },
  {
    _id: 2,
    name: "Slim Fit Denim Jeans",
    price: 2499,
    images: [
      { url: "https://picsum.photos/500/500?random=2" },   
    ],
  },
  {
    _id: 3,
    name: "Casual Sneakers",
    price: 3499,
    images: [
      { url: "https://picsum.photos/500/500?random=3" },   
    ],
  },
  {
    _id: 4,
    name: "Leather Backpack",
    price: 4599,
    images: [
      { url: "https://picsum.photos/500/500?random=4" },
    ],
  },
  {
    _id: 5,
    name: "Leather Belt",
    price: 299,
    images: [
      { url: "https://picsum.photos/500/500?random=5" },
    ],
  },
  {
    _id: 6,
    name: "Denim Jacket",
    price: 1989,
    images: [
      { url: "https://picsum.photos/500/500?random=6" },
    ],
  },
]
setProducts(fetchProducts)
},1000)

},[])




const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
}


// close sidebar when clicked handleClickOutside
const handleClickOutside = (e) => {    
    if(sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsSidebarOpen(false)
    }
}


// add event listener for clicks
useEffect(() => {    
    if(isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside) // clear the event listener
    }
},[isSidebarOpen])




    return (
        <div className='flex flex-col lg:flex-row'>
            {/* mobile filter icon */}
            <button onClick={toggleSidebar} className='lg:hidden border p-2 flex justify-center items-center'>
                <FaFilter className='mr-2'/> Filters
            </button>

            {/* filter sidebar opens in small devices when icon is clicked*/}
            <div ref={sidebarRef} className={`fixed inset-y-0 z-50 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <FilterSidebar/>
            </div>

            <div className='grow p-3'>
              <h2 className='text-2xl uppercase mb-4'>All Collections</h2>

              {/* sort options */}
              <SortOptions></SortOptions>

              <ProductGrid similarProducts={products}></ProductGrid>
            </div>
        </div>
    );
};

export default CollectionPage;