import { Link } from "react-router-dom";
import featured from '../../assets/featured.webp'

const FeaturedCollection = () => {
    return (
        <section className="py-16 px-2">
            <div className="container max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-100 rounded-md">

                {/* left side content */}
                <div className="lg:w-1/2 p-8 text-center lg:text-left">
                    <h2 className="text-lg font-semibold text-gray-700 mb-3">Comfort and Style</h2>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">Apparel made for your everyday life</h2>
                    <p className="text-lg text-gray-600 mb-4">Dicover hight-quality, comfortable clothing that effortlessly blends fashion and functio. Designed to make you look and feel greate everyday</p>
                    
                    <Link to={'/collection/all'} className="bg-black px-6 py-2 rounded-lg text-lg text-white hover:bg-gray-200 hover:text-black transition duration-250 cursor-pointer">Shop Now</Link>
                </div>

                {/* Right side image */}
                <div className="lg:w-1/2">
                    <img src={featured} alt="featured_image"
                    className="w-full h-full object-cover rounded-tr-md rounded-br-md" />
                </div>

            </div>
        </section>
    );
};

export default FeaturedCollection;