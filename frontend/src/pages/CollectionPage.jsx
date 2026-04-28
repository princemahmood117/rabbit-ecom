import React, { useEffect, useRef, useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import FilterSidebar from '../components/Products/FilterSidebar';

const CollectionPage = () => {

    const [products,setProducts] = useState([])
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const sidebarRef = useRef(null)
    console.log("sidebar ref ", sidebarRef);


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
}, 1000)

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
    document.addEventListener('mousedown', handleClickOutside)
})




    return (
        <div className='flex flex-col lg:flex-row'>
            {/* mobile filter button */}
            <button className='lg:hidden border p-2 flex justify-center items-center'>
                <FaFilter className='mr-2'></FaFilter>
            </button>

            {/* filter sidebar */}
            <div ref={sidebarRef}>
                <FilterSidebar></FilterSidebar>
            </div>
        </div>
    );
};

export default CollectionPage;