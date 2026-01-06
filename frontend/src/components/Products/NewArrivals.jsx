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
const [canScrollRight, setCanScrollRight] = useState(true)


// update scroll buttons
const updateScrollButtons = () => {
    const container = scrollRef.current;
    console.log("from updateScrollButtons : ",{
        scrollLeft : container.scrollLeft,
        clientWidth : container.clientWidth,
        containerScrollWidth : container.scrollWidth,
    });
}


useEffect(() => {
    const container = scrollRef.current;
    console.log('container from useEffect : ', container);
    
    if(container) {
        container.addEventListener("scroll", updateScrollButtons)
        
       updateScrollButtons()
    }
})




    return (
        <section>
            <div className='container text-center mb-10 relative max-w-7xl mx-auto'>
                <h2 className='text-3xl font-bold mb-4'>Explore New Arrivals</h2>
                <p className='text-lg text-gray-600 mb-8'>Discover the latest styles straight off the runway, freshly added to keep your wardrobe on the cutting edge of fashion</p>

                {/* scroll buttons */}
                <div className='absolute right-0 -bottom-7.5 flex space-x-2'>
                    <button className='p-2 border border-gray-400 rounded-full bg-white text-gray-700'> <FiChevronLeft className='text-2xl'></FiChevronLeft> </button>
                    <button className='p-2 border border-gray-400 rounded-full bg-white text-gray-700'> <FiChevronRight className='text-2xl'></FiChevronRight> </button>
                </div>
            </div>  


            {/* scrollable contents */}
            <div ref={scrollRef} className='flex space-x-6 overflow-x-scroll max-w-7xl mx-auto container relative'>
                {
                    newArrivals.map((product) => (
                        <div key={product._id} className='min-w-full sm:min-w-[50%] lg:min-w-[30%] relative'>
                            <img src={product?.images[0]?.url} alt={product?.images[0]?.altText || product?.name} className='w-full h-100 object-cover'/>

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