import React, { useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const NewArrivals = () => {
    const newArrivals = [
  {
    _id: "1",
    name: "Classic White T-Shirt",
    price: 1299,
    images: [
      {
        url: "https://picsum.photos/500/500?random=1",
        altText: "Classic White T-Shirt",
      },
    ],
  },
  {
    _id: "2",
    name: "Slim Fit Denim Jacket",
    price: 4599,
    images: [
      {
        url: "https://picsum.photos/500/500?random=2",
        altText: "Slim Fit Denim Jacket",
      },
    ],
  },
  {
    _id: "3",
    name: "Casual Cotton Hoodie",
    price: 3499,
    images: [
      {
        url: "https://picsum.photos/500/500?random=3",
        altText: "Casual Cotton Hoodie",
      },
    ],
  },
  {
    _id: "4",
    name: "Relaxed Fit Chinos",
    price: 2899,
    images: [
      {
        url: "https://picsum.photos/500/500?random=4",
        altText: "Relaxed Fit Chinos",
      },
    ],
  },
  {
    _id: "5",
    name: "Summer Floral Dress",
    price: 3999,
    images: [
      {
        url: "https://picsum.photos/500/500?random=5",
        altText: "Summer Floral Dress",
      },
    ],
  },
  {
    _id: "6",
    name: "Oversized Graphic Tee",
    price: 1799,
    images: [
      {
        url: "https://picsum.photos/500/500?random=6",
        altText: "Oversized Graphic Tee",
      },
    ],
  },
  {
    _id: "7",
    name: "Lightweight Windbreaker",
    price: 5299,
    images: [
      {
        url: "https://picsum.photos/500/500?random=7",
        altText: "Lightweight Windbreaker",
      },
    ],
  },
  {
    _id: "8",
    name: "Everyday Canvas Sneakers",
    price: 6199,
    images: [
      {
        url: "https://picsum.photos/500/500?random=8",
        altText: "Everyday Canvas Sneakers",
      },
    ],
  },
];


const scrollRef = useRef(null)

const [isDragging, setIsDragging] = useState(false)
const [startX, setStartX] = useState(0)
const [scrollLeft, setScrollLeft] = useState(false)
const [canScrollRight, setCanScrollRight] = useState(false)
const [canScrollLeft, setCanScrollLeft] = useState(true)


const scroll = (direction) => {
  const scrollAmount = direction === "left" ? -300 : 300;

  scrollRef.current.scrollBy({left : scrollAmount, behaviour : "smooth"})
}

// update scroll buttons
const updateScrollButtons = () => {
    const container = scrollRef.current;
    console.log('container in function : ', container);

    if(container) {
      const leftScroll = container.scrollLeft;

      const rightScrollable = container.scrollWidth > leftScroll + container.clientWidth

      setCanScrollLeft(leftScroll > 0)
      setCanScrollRight(rightScrollable)
    }
}


useEffect(() => {
    const container = scrollRef.current;
    
    if(container) {
        container.addEventListener("scroll", updateScrollButtons)        
       updateScrollButtons()
       return () => container.removeEventListener("scroll", updateScrollButtons) 
    }
},[])

const handleMouseDown = (e) => {
  setIsDragging(true)
  setStartX(e.pageX - scrollRef.current.offsetLeft)
  setScrollLeft(scrollRef.current.scrollLeft)
}

const handleMouseMove = (e) => {
  if(!isDragging) return;
  const x = e.pageX - scrollRef.current.offsetLeft;
  const walk = x - startX;
  scrollRef.current.scrollLeft = scrollLeft - walk
}

const handleMouseUp = () => {
  setIsDragging(false)
}

const handleMouseLeave = () => {

}



    return (
        <section className='py-16 px-4 lg:px-0'>
            <div className='container text-center mb-10 relative max-w-7xl mx-auto'>
                <h2 className='text-3xl font-bold mb-4'>Explore New Arrivals</h2>
                <p className='text-lg text-gray-600 mb-8'>Discover the latest styles straight off the runway, freshly added to keep your wardrobe on the cutting edge of fashion</p>

                {/* scroll buttons */}
                <div className='absolute right-0 -bottom-7.5 flex space-x-2'>
                    <button 
                    disabled={!canScrollLeft} 
                    onClick={()=> scroll("left")} 
                    className={`p-2 border border-gray-400 rounded-full ${canScrollLeft ? "bg-white text-black cursor-pointer" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}> <FiChevronLeft className='text-2xl'></FiChevronLeft> </button>

                    <button 
                    disabled={!canScrollRight} 
                    onClick={()=> scroll('right')} 
                    className={`p-2 border border-gray-400 rounded-full ${canScrollRight ? "bg-white text-black cursor-pointer" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}> <FiChevronRight className='text-2xl'></FiChevronRight> </button>
                </div>
            </div>  


            {/* scrollable contents */}
            <div
             onMouseDown={handleMouseDown} 
             onMouseMove={handleMouseMove}
             onMouseUp={handleMouseUp}
             onMouseLeave={handleMouseLeave}
             ref={scrollRef} 
             className={`flex space-x-6 overflow-x-scroll max-w-7xl mx-auto container relative ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}>
                {
                    newArrivals.map((product) => (
                        <div key={product._id} className='min-w-full sm:min-w-[50%] lg:min-w-[30%] relative'>
                            <img draggable={false} src={product?.images[0]?.url} alt={product?.images[0]?.altText || product?.name} className='w-full h-100 object-cover'/>

                            <div className='text-white absolute bottom-0 right-0 left-0 backdrop-blur-sm p-4 rounded-b-lg '>
                                <Link to={`/product/${product?._id}`} className='block'>
                                <h4 className='font-medium'>{product?.name}</h4>
                                <p className='mt-1'>${product?.price}</p>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default NewArrivals;